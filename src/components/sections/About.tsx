import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SITE_CONFIG } from '@/lib/constants';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <AnimateOnScroll>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/kelly-portrait.avif"
                alt={`Dra. ${SITE_CONFIG.name} - Fisioterapeuta`}
                fill
                className="object-cover"
                sizes="384px"
                unoptimized
              />
            </div>
          </AnimateOnScroll>

          {/* Text content */}
          <AnimateOnScroll delay={200}>
            <SectionHeading
              title="Sobre Mim"
              subtitle="Conheça a profissional"
              centered={false}
            />

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Sou <strong className="text-neutral-900">Dra. {SITE_CONFIG.name}</strong>,
                fisioterapeuta formada com registro no{' '}
                <strong>{SITE_CONFIG.crefito}</strong>. Dedico minha carreira ao
                atendimento domiciliar, levando tratamento especializado e
                humanizado até a casa dos meus pacientes.
              </p>
              <p>
                Minha abordagem combina técnicas modernas de fisioterapia com
                atenção individualizada a cada paciente. Acredito que a
                recuperação é mais eficiente quando o paciente está no conforto e
                na segurança do seu próprio lar.
              </p>
              <p>
                <strong className="text-neutral-900">Especialidades:</strong>{' '}
                reabilitação motora, fisioterapia geriátrica, pós-operatório
                ortopédico, fisioterapia neurológica e exercícios terapêuticos
                personalizados.
              </p>
            </div>

            <div className="mt-8">
              <Button href={SITE_CONFIG.whatsappUrl} variant="primary">
                Agende Sua Avaliação
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
