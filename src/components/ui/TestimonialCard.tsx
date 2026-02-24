import type { Testimonial } from '@/data/testimonials';
import AnimateOnScroll from './AnimateOnScroll';

interface TestimonialCardProps extends Testimonial {
  index: number;
}

export default function TestimonialCard({
  quote,
  name,
  detail,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <AnimateOnScroll delay={index * 150}>
      <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Stars */}
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'text-yellow-400' : 'text-neutral-200'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-1 text-neutral-600 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
            {name}
          </div>
          <p className="text-sm text-neutral-500">{detail}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
