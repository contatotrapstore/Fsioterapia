import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SITE_CONFIG } from '@/lib/constants';

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Área de Atendimento"
          subtitle="Onde atendemos"
        />

        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary-50 p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <svg
                className="h-8 w-8 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>

            <h3 className="font-heading text-2xl font-bold text-primary-800">
              {SITE_CONFIG.city}, {SITE_CONFIG.state}
            </h3>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              Atendo em diversas regiões de <strong>Curitiba</strong> e{' '}
              <strong>Pinhais</strong>. Realizo atendimento domiciliar com
              conforto e praticidade. Consulte a disponibilidade para a sua
              localidade.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['Curitiba', 'Pinhais'].map((region) => (
                <span
                  key={region}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-700 shadow-sm"
                >
                  {region}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-primary-600 font-medium">
              Atendimento domiciliar — vou até você!
            </p>

            <div className="mt-6">
              <Button href={SITE_CONFIG.whatsappUrl} variant="primary">
                Consultar Disponibilidade
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
