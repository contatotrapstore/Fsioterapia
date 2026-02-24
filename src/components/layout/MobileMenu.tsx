'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex h-full flex-col">
          {/* Close button */}
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
            <span className="font-heading text-lg font-bold text-primary-800">
              Menu
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100"
              aria-label="Fechar menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="border-t border-neutral-100 p-6">
            <Button
              href={SITE_CONFIG.whatsappUrl}
              variant="whatsapp"
              size="lg"
              className="w-full"
            >
              Agendar pelo WhatsApp
            </Button>
            <p className="mt-3 text-center text-sm text-neutral-500">
              {SITE_CONFIG.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
