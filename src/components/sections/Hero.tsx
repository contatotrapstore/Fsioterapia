import Image from 'next/image';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-primary-900"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/kelly-hero.avif"
          alt="Fisioterapia domiciliar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-950/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 py-32 md:grid-cols-2 lg:gap-16 lg:py-40">
          {/* Text side */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              {SITE_CONFIG.title}
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Fisioterapia
              <br />
              Domiciliar
              <br />
              <span className="text-white/90">Humanizada</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Sou <strong className="text-white">Dra. {SITE_CONFIG.name}</strong>,
              fisioterapeuta especializada em atendimento domiciliar.
              Reabilitação, mobilidade e qualidade de vida no conforto do seu lar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={SITE_CONFIG.whatsappUrl} variant="whatsapp" size="lg">
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </Button>
              <Button href="#servicos" variant="secondary" size="lg">
                Conheça Meus Serviços
              </Button>
            </div>

            {/* Trust line */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <CheckIcon />
                Atendimento humanizado
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                Profissional registrada
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                {SITE_CONFIG.city} e região
              </span>
            </div>
          </div>

          {/* Photo grid side */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/fisioterapia-idoso.jpg"
                    alt="Fisioterapia domiciliar com idoso"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/exercicio-equilíbrio.jpg"
                    alt="Exercícios de equilíbrio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/reabilitacao-andador.jpg"
                    alt="Reabilitação motora"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/tratamento-bicicleta.jpg"
                    alt="Exercícios terapêuticos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
