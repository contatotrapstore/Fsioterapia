import clsx from 'clsx';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variantStyles = {
  primary:
    'bg-primary-800 text-white hover:bg-primary-900',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp-dark',
  outline:
    'bg-transparent text-primary-800 border border-primary-300 hover:bg-primary-50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
