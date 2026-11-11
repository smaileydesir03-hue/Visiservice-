export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  priceTag: string;
  depositRequired?: string;
  features?: string[];
  category: 'web' | 'marketing' | 'design';
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryKey: 'web' | 'marketing' | 'design';
  description: string;
  clientContext: string;
  results: string[];
  image: string;
  tags: string[];
  year: string;
  liveUrl?: string;
}

export interface GraphicDesignItem {
  id: string;
  image: string;
  title?: string;
  type?: 'flyer' | 'logo' | 'affiche';
  client?: string;
  tag?: string;
  year?: string;
  description?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  depositNotice?: string;
  description: string;
  included: string[];
  buttonText: string;
  highlighted?: boolean;
  serviceKey: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarBg?: string;
  rating: number;
  content: string;
  projectTitle: string;
  category: 'web' | 'marketing' | 'design';
  metric?: string;
  date: string;
}

// Visual assets generated
export const ASSETS = {
  hero: '/src/assets/images/hero_agency_workspace_1792466923021.jpg',
  portfolioWeb: '/src/assets/images/portfolio_web_showcase_1792466922904.jpg',
  portfolioBranding: '/src/assets/images/portfolio_branding_identity_1792466923927.jpg',
  portfolioSaas: '/src/assets/images/portfolio_saas_dashboard_1792466923375.jpg',
  portfolioRisextrades: '/src/assets/images/portfolio_risextrades_1792553373722.jpg',
  portfolioUnah: '/src/assets/images/portfolio_unah_university_1792554100196.jpg',
  portfolioDizitopup: '/src/assets/images/portfolio_dizitopup_1792554776898.jpg',
  flyerRisextrades: '/assets/aistudio/004a4897-35cf-4bb2-a06a-7c589795b58d_67424c68.jpeg',
};

export const WEB_SERVICES: ServiceItem[] = [
  {
    id: 'portfolio',
    name: 'Site Portfolio',
    shortDesc: 'Présentez vos compétences, vos réalisations et votre expérience avec un portfolio professionnel conçu pour attirer vos futurs clients.',
    priceTag: 'À partir de 299 $',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Galerie interactive', 'Optimisation mobile', 'Formulaire de contact', 'Vitesse de chargement éclair'],
    category: 'web',
  },
  {
    id: 'business',
    name: 'Site Business / Entreprise',
    shortDesc: 'Un site professionnel pour présenter votre entreprise, vos services, votre équipe et permettre à vos clients de vous contacter facilement.',
    priceTag: 'À partir de 499 $',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Multi-pages sur-mesure', 'Présentation des services & équipe', 'SEO local & professionnel', 'Interface d’administration'],
    category: 'web',
    popular: true,
  },
  {
    id: 'blog',
    name: 'Site Blog',
    shortDesc: 'Partagez vos articles, vos actualités et vos connaissances avec un blog moderne et optimisé pour les moteurs de recherche.',
    priceTag: 'À partir de 349 $',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Gestion d’articles & catégories', 'Optimisation SEO avancée', 'Partage sur réseaux sociaux', 'Newsletter intégrée'],
    category: 'web',
  },
  {
    id: 'ecommerce',
    name: 'Site E-commerce',
    shortDesc: 'Vendez vos produits en ligne grâce à une boutique professionnelle avec catalogue, panier et système de commande.',
    priceTag: 'À partir de 799 $',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Catalogue produits & filtres', 'Paiement sécurisé (Stripe/PayPal)', 'Gestion stocks & commandes', 'Espace client sécurisé'],
    category: 'web',
    popular: true,
  },
  {
    id: 'landing',
    name: 'Landing Page',
    shortDesc: 'Une page de vente conçue pour présenter une offre, attirer des prospects et convertir les visiteurs en clients.',
    priceTag: 'À partir de 299 $',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Orientation conversion maximale', 'Copywriting & design percutant', 'A/B testing ready', 'Intégration CRM / Emailing'],
    category: 'web',
  },
  {
    id: 'custom',
    name: 'Site Web personnalisé',
    shortDesc: 'Une solution entièrement personnalisée pour les entreprises ayant des besoins spécifiques : réservation, espace client, fonctionnalités avancées ou autres intégrations.',
    priceTag: 'Sur devis',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Architecture sur-mesure', 'Système de réservation / API', 'Espace membre privatif', 'Accompagnement dédié'],
    category: 'web',
  },
];

export const MARKETING_SERVICES: ServiceItem[] = [
  {
    id: 'mkt-social',
    name: 'Gestion des réseaux sociaux',
    shortDesc: 'Développez votre présence sur Facebook, Instagram, TikTok et les autres plateformes adaptées à votre activité.',
    priceTag: 'Forfaits mensuels disponibles',
    features: ['Calendrier éditorial mensuel', 'Animation & publications', 'Rapport de performance mensuel'],
    category: 'marketing',
  },
  {
    id: 'mkt-content',
    name: 'Création de contenu',
    shortDesc: 'Des publications professionnelles, des visuels attractifs et des contenus cohérents avec votre identité de marque.',
    priceTag: 'Tarifs sur devis',
    features: ['Visuels statiques & animés', 'Rédaction engageante', 'Formats Reels & Carrousels'],
    category: 'marketing',
    popular: true,
  },
  {
    id: 'mkt-ads',
    name: 'Publicité digitale',
    shortDesc: 'Des campagnes publicitaires ciblées pour faire connaître votre entreprise, attirer des prospects et promouvoir vos offres.',
    priceTag: 'Tarifs sur devis',
    features: ['Meta Ads (Facebook/Instagram)', 'Google Search & Display Ads', 'Suivi du ROI et conversion'],
    category: 'marketing',
  },
  {
    id: 'mkt-strat',
    name: 'Stratégie digitale',
    shortDesc: 'Une stratégie personnalisée pour améliorer votre visibilité, votre communication et votre développement en ligne.',
    priceTag: 'Tarifs sur devis',
    features: ['Audit de l’existant', 'Plan d’action à 6 mois', 'Positionnement concurrentiel'],
    category: 'marketing',
  },
  {
    id: 'mkt-community',
    name: 'Community Management',
    shortDesc: 'Une gestion professionnelle de votre communauté pour renforcer votre relation avec vos clients.',
    priceTag: 'Forfaits mensuels disponibles',
    features: ['Réponses aux commentaires & MP', 'Modération active', 'Fidélisation de l’audience'],
    category: 'marketing',
  },
];

export const DESIGN_SERVICES: ServiceItem[] = [
  {
    id: 'des-logo',
    name: 'Création de logo',
    shortDesc: 'Conception d’un logo distinctif, intemporel et mémorable qui incarne l’esprit de votre projet.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['3 propositions créatives', 'Fichiers vectoriels tous formats', 'Cession de droits complète'],
    category: 'design',
    popular: true,
  },
  {
    id: 'des-branding',
    name: 'Identité visuelle et branding',
    shortDesc: 'Guide de style complet : typographies, palette chromatique, iconographie et directives d’utilisation.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Charte graphique complète', 'Règles typographiques', 'Variations de marque'],
    category: 'design',
  },
  {
    id: 'des-flyers',
    name: 'Flyers et affiches publicitaires',
    shortDesc: 'Supports imprimés percutants pour vos événements, salons professionnels ou campagnes locales.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Prêt pour impression haute définition', 'Mise en page éditoriale soignée', 'Formats A4, A5, Decaux'],
    category: 'design',
  },
  {
    id: 'des-social',
    name: 'Design pour réseaux sociaux',
    shortDesc: 'Packs de templates sur-mesure pour Instagram, LinkedIn et Facebook pour professionnaliser vos posts.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Templates Canva / Figma éditables', 'Stories & posts coordonnés', 'Bannières de profil'],
    category: 'design',
  },
  {
    id: 'des-catalog',
    name: 'Brochures et catalogues',
    shortDesc: 'Mise en valeur élégante de vos gammes de produits ou plaquettes de présentation corporatives.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Mise en page multi-pages', 'Finition premium & pagination', 'Export numérique interactif'],
    category: 'design',
  },
  {
    id: 'des-stationery',
    name: 'Supports publicitaires pour entreprises',
    shortDesc: 'Cartes de visite professionnelles, papeterie, roll-ups et signalétique d’entreprise.',
    priceTag: 'Tarifs selon le projet',
    depositRequired: 'Versement de 60% requis avant le début du travail',
    features: ['Packaging & étiquettes', 'Roll-up événementiel', 'Papeterie d’entreprise complète'],
    category: 'design',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'risextrades',
    title: 'RiseXtrades',
    category: 'Plateforme Web & Aide au Trading',
    categoryKey: 'web',
    description: 'Plateforme web complète d’aide au trading intégrant un simulateur de backtest avancé, des journaux de trading automatisés et un espace de formations spécialisées.',
    clientContext: 'RiseXtrades (risextrades.com) a confié à Visi Service le développement de son écosystème web d’aide aux traders : interface de backtest pour éprouver ses stratégies, journaux de trading dynamiques avec suivi des performances et du ratio risque/rendement, ainsi qu’un catalogue complet de formations vidéo structurées.',
    results: [
      'Moteur de backtest rapide avec calcul instantané du winrate',
      'Journaux de trading automatisés avec graphiques d’évolution',
      'Espace de formations vidéo e-learning avec espace membres',
    ],
    image: ASSETS.portfolioRisextrades,
    tags: ['Aide au Trading', 'Plateforme Backtest', 'Journaux de Trading', 'Formations'],
    year: '2026',
    liveUrl: 'https://risextrades.com',
  },
  {
    id: 'unah',
    title: 'Université Adventiste d’Haïti (UNAH)',
    category: 'Portail Universitaire & Éducation',
    categoryKey: 'web',
    description: 'Conception et développement du site web officiel de l’UNAH (www.unah.edu.ht) avec présentation des facultés, portail d’admissions et vie étudiante.',
    clientContext: 'L’UNAH a mandaté Visi Service pour moderniser son portail institutionnel afin de digitaliser les admissions, valoriser les programmes académiques (Gestion, Sciences de la Santé, Théologie, Éducation) et offrir une expérience fluide aux étudiants locaux et internationaux.',
    results: [
      '+80% de candidatures étudiantes reçues en ligne',
      'Portail responsive ultra-rapide optimisé pour tous réseaux',
      'Architecture multi-facultés claire avec actualités en direct',
    ],
    image: ASSETS.portfolioUnah,
    tags: ['Site Universitaire', 'Portail Admissions', 'Haute Performance', 'Éducation'],
    year: '2026',
    liveUrl: 'https://www.unah.edu.ht',
  },
  {
    id: 'dizitopup',
    title: 'DiZi TOPUP',
    category: 'Boutique E-commerce & Recharge Gaming',
    categoryKey: 'web',
    description: 'Conception et développement de la plateforme e-commerce DiZi TOPUP (dizitopup.com), leader de la recharge de jeux en ligne et top-up mobile.',
    clientContext: 'DiZi TOPUP (www.dizitopup.com) est le service numéro 1 en Haïti pour la recharge immédiate de jeux vidéo populaires (Free Fire, PUBG, Roblox) et de forfaits mobiles. Visi Service a conçu une boutique e-commerce ultra-véloce avec livraison automatisée des commandes en moins de 60 secondes et intégration des paiements mobiles locaux (MonCash, NatCash).',
    results: [
      'Livraison automatisée des recharges en moins de 60 secondes',
      'Passerelles de paiement locales MonCash & NatCash intégrées',
      '+15 000 transactions traitées avec succès sur la plateforme',
    ],
    image: ASSETS.portfolioDizitopup,
    tags: ['E-commerce Gaming', 'Recharge Mobile', 'MonCash / NatCash', 'Automatisation API'],
    year: '2026',
    liveUrl: 'https://www.dizitopup.com/',
  },
];

export const GRAPHIC_DESIGN_ITEMS: GraphicDesignItem[] = [
  {
    id: 'photo-1',
    image: '/assets/aistudio/004a4897-35cf-4bb2-a06a-7c589795b58d_67424c68.jpeg',
    title: 'Flyer RiseXtrades',
  },
  {
    id: 'photo-2',
    image: '/assets/aistudio/20251129_175427_8d5c49d4.jpeg',
    title: 'Logo GOAT Trader',
  },
  {
    id: 'photo-3',
    image: '/assets/aistudio/IMG_0718_bbf3b658.jpeg',
    title: 'Flyer Sneakers BIG-G Store',
  },
  {
    id: 'photo-4',
    image: '/assets/aistudio/20251129_180746_45dbba36.jpeg',
    title: 'Affiche Forex GOAT Trader',
  },
  {
    id: 'photo-5',
    image: '/assets/aistudio/8d6e9b46-6703-4471-ae97-106669af7566_93ef6400.jpeg',
    title: 'Flyer Parenaj Gourdes Token',
  },
  {
    id: 'photo-6',
    image: '/assets/aistudio/2a4e5941-71a7-49dc-8033-c78fae284c06_7c093861.jpeg',
    title: 'Flyer Crédits Gourdes Token',
  },
  {
    id: 'photo-7',
    image: '/assets/aistudio/7304c480-d160-4def-ad12-936d039a05a8_eca334d1.jpeg',
    title: 'Flyer Ajan Otorize Gourdes Token',
  },
  {
    id: 'photo-8',
    image: '/assets/aistudio/8ea9e1de-873c-48d8-bf26-caa7fb17b9d5_6ed02f1e.jpeg',
    title: 'Affiche Teaser GOAT Trader',
  },
  {
    id: 'photo-9',
    image: '/assets/aistudio/686ab3e0-e00c-4303-a34d-7453d6dfa968_fdff0b3e.jpeg',
    title: 'Flyer JANOVA Style',
  },
  {
    id: 'photo-10',
    image: '/assets/aistudio/7c0d0301-9654-4d4f-9f2e-e3a8d51387cd_c6293f86.jpeg',
    title: 'Affiche The Alchemist Strategy',
  },
  {
    id: 'photo-11',
    image: '/assets/aistudio/4d1fa83a-c863-43b6-9dd0-cf6e74795935_cdb3b36c.jpeg',
    title: 'Flyer Staking Gourdes Token',
  },
  {
    id: 'photo-12',
    image: '/assets/aistudio/eb357ae1-7174-440c-8cb6-b0fde8db82d2_2f958a0e.jpeg',
    title: 'Logo MALIH Multi Services',
  },
  {
    id: 'photo-13',
    image: '/assets/aistudio/1054bf7b-0f36-4e7d-a66e-9b1fd197eee9_d189aec9.jpeg',
    title: 'Cartes de Visite MALIH',
  },
  {
    id: 'photo-14',
    image: '/assets/aistudio/99e55c0c-d0fa-411b-a388-c400c9d8710c_f1308014.jpeg',
    title: 'Flyer MALIH Streaming Netflix',
  },
  {
    id: 'photo-15',
    image: '/assets/aistudio/531b07af-bb8a-4f52-a1a6-941550fa4dde_7d456ef5.jpeg',
    title: 'Grille Tarifaire MALIH Boostage',
  },
  {
    id: 'photo-16',
    image: '/assets/aistudio/6ece7add-7cfc-4456-bca4-7fd074db864d_f5d4ce91.jpeg',
    title: 'Affiche Dark Boostage Réseaux Sociaux',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'presence',
    name: 'Présence digitale',
    price: 'À partir de 299 $',
    depositNotice: 'Versement de 60% requis avant le début du travail',
    description: 'Pour les entrepreneurs qui souhaitent lancer leur présence en ligne.',
    included: [
      'Landing page ou portfolio simple',
      'Design responsive adapté à tous écrans',
      'Présentation professionnelle de votre activité',
      'Formulaire de contact avec notification',
      'Optimisation de base pour les moteurs de recherche (SEO)',
    ],
    buttonText: 'Demander un devis',
    serviceKey: 'Présence digitale (dès 299 $)',
  },
  {
    id: 'business',
    name: 'Business',
    price: 'À partir de 499 $',
    depositNotice: 'Versement de 60% requis avant le début du travail',
    description: 'Pour les entreprises qui souhaitent un site web professionnel.',
    included: [
      'Site vitrine multipage complet',
      'Design personnalisé aligné à votre marque',
      'Présentation détaillée des services & équipe',
      'Formulaire de contact interactif',
      'Optimisation mobile rigoureuse',
      'Configuration SEO de base et indexation Google',
    ],
    buttonText: 'Choisir cette solution',
    highlighted: true,
    serviceKey: 'Business (dès 499 $)',
  },
  {
    id: 'custom',
    name: 'Projet personnalisé',
    price: 'Sur devis',
    depositNotice: 'Versement de 60% requis avant le début du travail',
    description: 'Pour les projets plus avancés et les besoins spécifiques.',
    included: [
      'Boutique e-commerce complète',
      'Fonctionnalités avancées (réservation, catalogue)',
      'Intégrations spécifiques (CRM, API, passerelles)',
      'Développement personnalisé sur-mesure',
      'Support prioritaire & formation à l’outil',
    ],
    buttonText: 'Discuter de mon projet',
    serviceKey: 'Projet personnalisé (Sur devis)',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discussion',
    description: 'Nous échangeons sur votre activité, vos objectifs et vos besoins.',
    deliverable: 'Cahier des charges & objectifs clairs',
  },
  {
    number: '02',
    title: 'Planification',
    description: 'Nous définissons la structure, le devis et validons l’acompte de 60% requis pour démarrer.',
    deliverable: 'Devis & acompte de 60% validés',
  },
  {
    number: '03',
    title: 'Création',
    description: 'Dès versement de l’acompte de 60%, nous développons votre solution et vous présentons son évolution.',
    deliverable: 'Développement & intégration responsive',
  },
  {
    number: '04',
    title: 'Livraison',
    description: 'Nous finalisons le projet, effectuons les vérifications et vous livrons le résultat.',
    deliverable: 'Mise en ligne, tests & formation',
  },
];

export const AGENCY_VALUES = [
  {
    title: 'Créativité',
    desc: 'Des concepts visuels distinctifs qui valorisent votre unicité et captent immédiatement l’attention de votre audience cible.',
  },
  {
    title: 'Professionnalisme',
    desc: 'Une méthodologie rigoureuse, un respect scrupuleux des délais et une transparence totale à chaque étape de votre projet.',
  },
  {
    title: 'Solutions adaptées',
    desc: 'Pas de formules rigides. Chaque solution digitale est calibrée sur-mesure selon vos priorités et vos contraintes budgétaires.',
  },
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'unah',
    author: 'Dr. Jean-Marc V.',
    role: 'Directeur Académique',
    company: 'Université UNAH',
    avatarBg: 'bg-blue-600',
    rating: 5,
    content: "L'agence a entièrement conçu le portail unah.online. L'interface est intuitive pour les étudiants, ultra-rapide et a permis de gérer plus de 12 000 inscriptions académiques sans le moindre incident technique. Un professionnalisme exemplaire.",
    projectTitle: 'Portail Universitaire unah.online',
    category: 'web',
    metric: '12 000+ inscriptions traitées',
    date: 'Janvier 2026',
  },
  {
    id: 'risextrades',
    author: 'Alexandre K.',
    role: 'Fondateur & CEO',
    company: 'RiseXtrades',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    content: "Un travail remarquable tant sur le branding que sur le développement de risextrades.com. Le flyer promotionnel et l'architecture web inspirent une confiance absolue à nos investisseurs internationaux dès la première visite.",
    projectTitle: 'Plateforme Crypto & Branding risextrades.com',
    category: 'web',
    metric: 'Conversion d’accueil x2.8',
    date: 'Novembre 2025',
  },
  {
    id: 'dizitopup',
    author: 'Sarah D.',
    role: 'Directrice des Opérations',
    company: 'DiZi TOPUP',
    avatarBg: 'bg-amber-600',
    rating: 5,
    content: "Le système de rechargement en direct sur dizitopup.com est un modèle d'efficacité. Parcours d'achat sans friction, design épuré et intégration instantanée. Nos clients apprécient énormément la clarté du service.",
    projectTitle: 'Plateforme E-commerce & Recharge dizitopup.com',
    category: 'web',
    metric: 'Transactions en moins de 45s',
    date: 'Décembre 2025',
  },
  {
    id: 'b2b-corporate',
    author: 'Marc-Antoine B.',
    role: 'Directeur Général',
    company: 'Cabinet Conseil Stratégique',
    avatarBg: 'bg-neutral-800',
    rating: 5,
    content: "Nous souhaitions une image prestigieuse pour nos clients institutionnels. L'équipe a su capter nos attentes dès la première séance. L'acompte de 60% investi en toute transparence a abouti à une livraison impeccable et dans les temps.",
    projectTitle: 'Site Web Business & Identité Corporate',
    category: 'web',
    metric: '4 nouveaux mandats B2B signés',
    date: 'Octobre 2025',
  },
  {
    id: 'events-flyer',
    author: 'Élodie M.',
    role: 'Responsable Événementiel',
    company: 'Agence Pulse Events',
    avatarBg: 'bg-violet-600',
    rating: 5,
    content: "Des créations graphiques percutantes et modernes ! Les flyers conçus pour nos grands lancements ont suscité un vif engagement sur les réseaux et une impression haute fidélité irréprochable.",
    projectTitle: 'Série de Flyers Promotionnels & Affiches',
    category: 'design',
    metric: '+85% d’engagement visuel',
    date: 'Janvier 2026',
  },
  {
    id: 'marketing-acquisition',
    author: 'Laurent P.',
    role: 'Directeur Marketing Digital',
    company: 'Scale Growth',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    content: "Une synergie parfaite entre visuels percutants et ergonomie web. Nos campagnes sponsorisées ont vu leur coût par acquisition baisser drastiquement grâce aux visuels et aux landing pages livrés par l'agence.",
    projectTitle: 'Campagnes Publicitaires & Refonte Visuelle',
    category: 'marketing',
    metric: '-40% de coût par acquisition',
    date: 'Février 2026',
  },
];

