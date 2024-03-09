import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Error } from './ui/error';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from 'react';
import { SubmitButton } from './ui/SubmitButton';
import clsx from 'clsx';

const FormSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
  token: z.string().min(1, { message: 'Please complete the captcha' }),
});

const ResponseSchema = z.object({
  message: z.string(),
});

export const ContactForm = () => {
  const [response, setResponse] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, errors, isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch(
      `${import.meta.env.PUBLIC_ASDOUGL_API_HOST}/api/contact`,
      {
        body: JSON.stringify(data),
        method: 'POST',
      }
    );

    if (response.ok) {
      const json = ResponseSchema.safeParse(await response.json());
      setResponse(
        json.success && json.data.message === 'SENT'
          ? `Thanks for reaching out ${data.name}! I'll get back to you as soon as I can.`
          : 'Something went wrong'
      );
    } else {
      setResponse('Something went wrong');
    }

    reset();
  });

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-lg bg-accent px-8 py-6">
      <form
        onSubmit={onSubmit}
        className={clsx('flex w-full flex-col gap-4', {
          invisible: isSubmitSuccessful,
        })}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <Input id="name" {...register('name')} />
          {errors.name && (
            <Error className="text-sm text-red-400">
              {errors.name.message}
            </Error>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Input id="email" {...register('email')} />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <Textarea id="message" {...register('message')} />
          {errors.message && <Error>{errors.message.message}</Error>}
        </div>
        <div className="flex flex-col pt-4">
          <HCaptcha
            sitekey={import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY}
            theme="dark"
            onVerify={(token) => {
              setValue('token', token);
            }}
          />
          {errors.token && <Error>{errors.token.message}</Error>}
        </div>
        <div className="pt-4">
          <SubmitButton
            intent="primary"
            type="submit"
            disabled={!isDirty || isSubmitting}
            submitting={isSubmitting}
          >
            Send
          </SubmitButton>
        </div>
        {errors.root && <Error>{errors.root.message}</Error>}
      </form>
      {response && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-lg bg-accent bg-opacity-80 p-4">
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};
