export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: 'sofa',
    title: 'Conforto do Lar',
    description:
      'Recupere-se no ambiente mais confortável e familiar: a sua própria casa.',
  },
  {
    icon: 'user-check',
    title: 'Atendimento Individualizado',
    description:
      'Sessões 100% dedicadas a você, sem filas ou espera. Toda atenção que você merece.',
  },
  {
    icon: 'map-pin-off',
    title: 'Sem Deslocamento',
    description:
      'Evite o estresse do trânsito e o desgaste de deslocamentos. O atendimento vai até você.',
  },
  {
    icon: 'shield',
    title: 'Segurança e Privacidade',
    description:
      'Tratamento em ambiente seguro e privado, ideal para pacientes com mobilidade reduzida.',
  },
  {
    icon: 'trending-up',
    title: 'Recuperação Mais Eficiente',
    description:
      'Estudos mostram que pacientes tratados em domicílio apresentam melhor adesão ao tratamento e recuperação mais rápida.',
  },
];
