import SectionHeading from '@/components/ui/SectionHeading';
import BenefitCard from '@/components/ui/BenefitCard';
import { benefits } from '@/data/benefits';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20 lg:py-24 bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Benefícios do Atendimento Domiciliar"
          subtitle="Por que escolher fisioterapia em casa?"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
