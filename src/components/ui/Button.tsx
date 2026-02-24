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
    'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
  secondary:
    'bg-white text-primary-800 border-2 border-white hover:bg-primary-50 hover:border-primary-100',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp-dark shadow-lg hover:shadow-xl',
  outline:
    'bg-transparent text-primary-700 border-2 border-primary-600 hover:bg-primary-50',
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
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer',
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
