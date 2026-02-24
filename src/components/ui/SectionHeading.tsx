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
            'text-sm font-semibold uppercase tracking-widest mb-2',
            light ? 'text-primary-300' : 'text-primary-600'
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={clsx(
          'text-3xl md:text-4xl lg:text-5xl font-bold',
          light ? 'text-white' : 'text-primary-800'
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          'mt-4 h-1 w-20 rounded-full',
          centered && 'mx-auto',
          light ? 'bg-primary-400' : 'bg-primary-500'
        )}
      />
    </div>
  );
}
