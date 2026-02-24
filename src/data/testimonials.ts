export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Após minha cirurgia no joelho, a Kelly foi essencial na minha recuperação. Atendimento humanizado e muito profissional. Recomendo a todos!',
    name: 'M.S.',
    detail: '62 anos — Pós-operatório de joelho',
    rating: 5,
  },
  {
    quote:
      'Minha mãe de 85 anos melhorou muito a mobilidade depois de iniciar a fisioterapia em casa. A Kelly é atenciosa e competente. Recomendo de olhos fechados.',
    name: 'A.L.',
    detail: 'Familiar de paciente idosa',
    rating: 5,
  },
  {
    quote:
      'O atendimento domiciliar fez toda diferença na minha reabilitação. Não precisar sair de casa acelerou muito minha recuperação. Profissional excelente!',
    name: 'J.R.',
    detail: '58 anos — Reabilitação motora',
    rating: 5,
  },
];
