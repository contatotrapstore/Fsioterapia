export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'home',
    title: 'Fisioterapia Domiciliar',
    description:
      'Atendimento profissional no conforto da sua casa, com plano de tratamento personalizado e acompanhamento contínuo da evolução.',
  },
  {
    icon: 'activity',
    title: 'Reabilitação Motora',
    description:
      'Recuperação de movimentos e funções após lesões, cirurgias ou períodos prolongados de imobilização. Exercícios progressivos e seguros.',
  },
  {
    icon: 'heart',
    title: 'Fisioterapia para Idosos',
    description:
      'Atendimento especializado para a terceira idade, focado em prevenção de quedas, manutenção da mobilidade e independência funcional.',
  },
  {
    icon: 'clipboard',
    title: 'Fisioterapia Pós-Operatória',
    description:
      'Reabilitação após procedimentos cirúrgicos ortopédicos, com protocolos específicos para cada tipo de cirurgia e fase de recuperação.',
  },
  {
    icon: 'bone',
    title: 'Fisioterapia Ortopédica',
    description:
      'Tratamento de dores articulares, musculares e da coluna. Técnicas manuais, alongamentos e fortalecimento para alívio da dor.',
  },
  {
    icon: 'dumbbell',
    title: 'Exercícios Terapêuticos',
    description:
      'Programa de exercícios personalizados para fortalecimento, flexibilidade e equilíbrio, adaptados às necessidades de cada paciente.',
  },
];
