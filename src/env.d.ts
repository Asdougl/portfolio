/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ASDOUGL_API_HOST: string;
  readonly PUBLIC_HCAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
