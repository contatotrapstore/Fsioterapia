export interface AudienceItem {
  icon: string;
  title: string;
  description: string;
}

export const audience: AudienceItem[] = [
  {
    icon: 'users',
    title: 'Idosos',
    description:
      'Atendimento especializado para a terceira idade com foco em autonomia e qualidade de vida.',
  },
  {
    icon: 'stethoscope',
    title: 'Pós-Cirúrgico',
    description:
      'Reabilitação segura e progressiva no pós-operatório de cirurgias ortopédicas e gerais.',
  },
  {
    icon: 'zap',
    title: 'Pacientes com Dor Crônica',
    description:
      'Tratamento para dores persistentes na coluna, articulações e músculos.',
  },
  {
    icon: 'accessibility',
    title: 'Mobilidade Reduzida',
    description:
      'Exercícios adaptados para recuperação e manutenção de movimentos.',
  },
  {
    icon: 'brain',
    title: 'Pacientes Neurológicos',
    description:
      'Reabilitação para sequelas de AVC, Parkinson e outras condições neurológicas.',
  },
  {
    icon: 'bone',
    title: 'Pacientes Ortopédicos',
    description:
      'Tratamento para fraturas, lesões ligamentares, tendinites e outras condições.',
  },
];
