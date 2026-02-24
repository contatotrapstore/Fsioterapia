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
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl bg-neutral-100 shadow-md">
              {/* TODO: Substituir pela foto real da Kelly com next/image */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-200">
                    <svg
                      className="h-10 w-10 text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-400">
                    Foto da profissional
                  </p>
                </div>
              </div>
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
              {/* TODO: Substituir pelo conteúdo real do site Wix */}
              <p>
                Sou <strong className="text-neutral-900">{SITE_CONFIG.name}</strong>,
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
