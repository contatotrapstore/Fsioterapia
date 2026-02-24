import clsx from 'clsx';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx('mb-12', centered && 'text-center')}>
      {subtitle && (
        <p
          className={clsx(
            'text-sm font-medium uppercase tracking-widest mb-3',
            light ? 'text-primary-300/80' : 'text-primary-600'
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={clsx(
          'text-3xl md:text-4xl lg:text-5xl font-bold',
          light ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          'mt-4 h-0.5 w-16 rounded-full',
          centered && 'mx-auto',
          light ? 'bg-primary-400/50' : 'bg-primary-600'
        )}
      />
    </div>
  );
}
