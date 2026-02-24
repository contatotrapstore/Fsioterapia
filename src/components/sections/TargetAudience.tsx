import SectionHeading from '@/components/ui/SectionHeading';
import AudienceCard from '@/components/ui/AudienceCard';
import { audience } from '@/data/audience';

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Quem Atendemos"
          subtitle="Público atendido"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item, index) => (
            <AudienceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
