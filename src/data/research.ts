export interface Publication {
  id: string;
  title: string;
  category: string;
  year: string;
  abstract: string;
  pdfUrl?: string;
  doi?: string;
  status: string;
  lang: string;
  locked?: boolean;
}

export const publications: Publication[] = [
  {
    id: 'sepsis-neo',
    title: "Sepsis néonatal précoce à début respiratoire chez un nouveau-né à terme : à propos d'un cas",
    category: 'Néonatologie',
    year: '2026',
    abstract:
      "Le sepsis néonatal précoce demeure une urgence diagnostique et thérapeutique en néonatologie, en raison de sa présentation initialement peu spécifique et du risque d'évolution rapide vers la défaillance multiviscérale. Nous rapportons le cas d'un nouveau-né à terme, admis dans les premières 24 heures de vie pour détresse respiratoire modérée, mauvaise adaptation alimentaire et instabilité thermique.",
    status: 'Unreleased Preprint',
    lang: 'FR',
    locked: true,
  },
  {
    id: 'ictere-neo',
    title: "Ictère néonatal précoce d'origine hémolytique par incompatibilité ABO : à propos d'un cas simulé et discussion diagnostique",
    category: 'Néonatologie',
    year: '2026',
    abstract:
      "Analyse d'un cas clinique d'ictère précoce chez un nouveau-né à terme, explorant la démarche diagnostique face à une hyperbilirubinémie non conjuguée. L'étude souligne l'importance du test de Coombs et de la cinétique biologique pour différencier l'ictère physiologique d'une hémolyse immunologique par incompatibilité ABO.",
    pdfUrl: 'https://doi.org/10.13140/RG.2.2.14446.78408',
    doi: '10.13140/RG.2.2.14446.78408',
    status: 'Preprint',
    lang: 'FR',
    locked: false,
  },
];

export interface WorkInProgress {
  id: string;
  title: string;
  status: string;
  description: string;
}

export const workInProgress: WorkInProgress[] = [
  {
    id: 'wip-1',
    title: 'Bioinformatics Pipelines for Clinical Labs',
    status: 'Draft',
    description:
      'A guide to implementing reproducible bioinformatics workflows in resource-constrained clinical settings.',
  },
  {
    id: 'wip-2',
    title: 'Cybersecurity Vulnerabilities in IoT Medical Devices',
    status: 'Data Collection',
    description:
      'Empirical analysis of common security flaws in connected medical hardware used in hematology labs.',
  },
];
