import { Bars3Icon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { NAV_ITEMS } from '~/util/constants';

export const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', clickOutside);

    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={clsx(
          'flex aspect-square h-full items-center justify-center',
          { 'bg-accent': open }
        )}
      >
        <Bars3Icon height={24} />
      </button>
      <nav
        ref={menuRef}
        className={clsx(
          'absolute left-0 top-full w-full border-b-2 border-tertiary-3 bg-background shadow-lg',
          {
            invisible: !open,
          }
        )}
      >
        <ul className="container mx-auto">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="px-4 py-4 text-xl">
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
