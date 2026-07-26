// ============================================================
//  CONCESS — Centrale content
//  Pas hier alles aan: projecten, creators, merken, teksten
//  Foto's zet je in /public/images/ en verwijs je aan als "/images/bestandsnaam.jpg"
// ============================================================

// ------------------------------------------------------------
//  PROJECTEN
//  type: "Partnerships" | "Video" | "Fotografie" | "Events" | "Design"
//  img:  pad naar foto in /public/images/ (of weglaten voor donkere gradient)
// ------------------------------------------------------------
export const projects: {
  brand: string; creator: string; views: string; type: string; img?: string; gradient: string;
}[] = [];

// De eerste 5 projecten worden uitgelicht op de homepage en partnerships pagina
export const featuredProjects = projects.slice(0, 5);

// ------------------------------------------------------------
//  HOMEPAGE — Recente projecten (1 groot + 4 klein)
//  Pas deze lijst aan om andere projecten uit te lichten.
//  slug: link naar /partnerships/[slug] of /studio/[slug]
//  type: "partnership" | "studio" (bepaalt de link prefix)
// ------------------------------------------------------------
export const homepageFeatured = [
  {
    brand: "Vrouwmibo",
    creator: "de podcast",
    img: "/images/Tegels/Vrouwmibo - tegel v2.png",
    gradient: "from-stone-700 to-stone-950",
    slug: "vrouwmibo-podcast",
    type: "studio" as const,
  },
  {
    brand: "De Bennies",
    creator: "× Podimo",
    img: "/images/Tegels/De Bennies - tegel.png",
    gradient: "from-neutral-700 to-neutral-950",
    slug: "podimo-de-bennies",
    type: "partnership" as const,
  },
  {
    brand: "'t Zusje",
    creator: "× Vrouwmibo",
    img: "/images/Partnerships/vrouwmibo/zusje x vrouwmibo.jpg",
    gradient: "from-amber-900 to-stone-950",
    slug: "zusje-vrouwmibo",
    type: "partnership" as const,
  },
  {
    brand: "Vrouwmishow",
    creator: "Nog één keer: All-In",
    img: "/images/Tegels/Vrouwmishow 2.png",
    gradient: "from-amber-900 to-stone-950",
    slug: undefined,
    type: "studio" as const,
  },
  {
    brand: "De Bennies",
    creator: "Podcast",
    img: "/images/Tegels/De Bennies - tegel.png",
    gradient: "from-neutral-700 to-neutral-950",
    slug: "de-bennies-podcast",
    type: "studio" as const,
  },
];

// ------------------------------------------------------------
//  CREATORS
// ------------------------------------------------------------
type CreatorWork = { brand: string; creator: string; views?: string; type: string; gradient: string; img?: string; slug?: string };

export const creators = [
  {
    name: "Enzo Knol",
    handle: "@enzoknol",
    title: "Content creator",
    followers: "7,9M+",
    bio: "Enzo is een Nederlandse vlogger die bekend staat om zijn energieke persoonlijkheid, positiviteit en het vermogen om zijn publiek te vermaken. In 2013 begon hij met het maken van dagelijkse video's op YouTube en heeft sindsdien meer dan 2,9 miljoen abonnees opgebouwd. Zijn video's bevatten de gekste avonturen waarmee hij zijn kijkers elke dag weet te entertainen. Naast zijn succesvolle YouTube-kanaal heeft Enzo een eigen merchandise-lijn en is hij actief op verschillende social media platformen. Hij is een van de bekendste YouTubers van Nederland en wordt gezien als een pionier in de Nederlandse vlog-scene.",
    platforms: ["YouTube", "Instagram", "TikTok", "Snapchat"],
    platformStats: [
      { platform: "YouTube", followers: "2,97M", url: "https://www.youtube.com/@EnzoKnol" },
      { platform: "YouTube Gaming", followers: "762K", url: "https://www.youtube.com/@EnzoKnol2" },
      { platform: "Instagram", followers: "2,1M", url: "https://www.instagram.com/enzoknol/" },
      { platform: "TikTok", followers: "1,5M", url: "https://www.tiktok.com/@enzoknol" },
      { platform: "Snapchat", followers: "568K", url: "https://www.snapchat.com/add/enzoknol" },
    ],
    gradient: "from-stone-700 via-stone-800 to-stone-950",
    accentColor: "#C9B99A",
    img: "/images/creators/enzo_banner.png",
    work: [] as CreatorWork[],
  },
  {
    name: "Myron Koops",
    handle: "@myronkoops",
    title: "Lifestyle & sport content creator",
    followers: "2,1M+",
    bio: "Myron was in haar jeugd een talentvolle schaatsster en nam deel aan verschillende kampioenschappen. Na een lange blessure besloot ze haar wedstrijdcarrière te beëindigen en zich te richten op een opleiding tot Personal Trainer. Samen met haar partner Enzo Knol heeft Myron de succesvolle sportlijn en het platform KP Active opgezet. Hier combineert ze haar passie voor sporten met het creëren van inspirerende content. Dagelijks probeert ze haar volgers te inspireren met haar sportvideo's en lifestyle content.",
    platforms: ["YouTube", "Instagram", "TikTok", "Snapchat"],
    platformStats: [
      { platform: "YouTube", followers: "142K", url: "https://www.youtube.com/@kpactive" },
      { platform: "Instagram", followers: "591K", url: "https://www.instagram.com/MyronKoops/" },
      { platform: "TikTok", followers: "1M", url: "https://www.tiktok.com/@myronkoops" },
      { platform: "Snapchat", followers: "427K", url: "https://www.snapchat.com/@myronkoops" },
    ],
    gradient: "from-zinc-600 via-zinc-800 to-zinc-950",
    accentColor: "#B8A488",
    img: "/images/creators/Myron_banner.png",
    work: [] as CreatorWork[],
  },
  {
    name: "De Bennies",
    handle: "@debennies",
    title: "Podcast creators & entertainers",
    followers: "373K+",
    bio: "De Bennies zijn het entertainmenttrio bestaande uit Noël, Thijs en Enzo. Met hun humor, spontane energie en sterke onderlinge chemie weten ze altijd hun publiek te vermaken. Of het nu gaat om podcasts, online formats of andere creatieve projecten, hun open gesprekken, herkenbare verhalen en onverwachte momenten zorgen keer op keer voor leuke interacties. Authentiek, toegankelijk en altijd met een flinke dosis gezelligheid.",
    platforms: ["Instagram", "TikTok", "Podimo", "Spotify"],
    platformStats: [
      { platform: "Instagram", followers: "76,5K", url: "https://www.instagram.com/debennies/" },
      { platform: "TikTok", followers: "186K", url: "https://www.tiktok.com/@debennies" },
      { platform: "Podimo", followers: "30K", url: "https://podimo.com/nl/shows/de-bennies-2" },
      { platform: "Spotify", followers: "62K", url: "https://open.spotify.com/show/3oiLRw0TiQySEInqNus2ik" },
    ],
    gradient: "from-neutral-600 via-neutral-800 to-neutral-950",
    accentColor: "#9E8B72",
    img: "/images/creators/bennies_banner.png",
    work: [
    ],
  },
];

// ------------------------------------------------------------
//  PARTNERSHIP CASES (klikbare projecten met gallery)
//  Voeg hier echte campagnes toe — ze verschijnen op de partnerships pagina
// ------------------------------------------------------------
export type GalleryItem = { type: "image"; src: string; alt?: string } | { type: "video"; src: string; poster?: string };

export type CaseStat = { value: string; label: string };

export type PartnershipCase = {
  slug?: string;
  brand: string;
  creator: string;
  category: string;
  year: string;
  cover?: string;
  hoverVideo?: string;
  alwaysPlay?: boolean;
  gradient: string;
  tagline?: string;           // korte pakkende zin boven de titel
  description: string;
  services: string[];
  stats?: CaseStat[];         // resultaten / kerncijfers
  featured?: boolean;          // grote tile in collage (col-span-2, liggend)
  platformLink?: string;      // link naar het platform (bijv. Podimo)
  platformLinkLabel?: string; // label voor de knop
  creatorProfiles?: { name: string; role: string; img: string }[];
  guests?: { name: string; img?: string }[];   // seizoensgasten — img optioneel
  instagramEmbed?: string;
  gallery: GalleryItem[];
};

export const partnershipCases: PartnershipCase[] = [
  {
    slug: "podimo-de-bennies",
    featured: true,
    brand: "Podimo",
    creator: "De Bennies",
    category: "Podcast Partnership",
    year: "2025 – 2026",
    cover: "/images/Tegels/De Bennies - tegel.png",
    hoverVideo: "https://www.youtube.com/watch?v=hUpePaNRUc0",
    gradient: "from-pink-900 to-zinc-950",
    tagline: "Exclusief op Podimo",
    description: "Concess verzorgde van het begin af aan de volledige productie van de De Bennies podcast. Na het succes van het eerste seizoen gingen we een exclusieve partnership aan met Podimo voor seizoen 2, 3 en 4. Het entertainmenttrio Noël, Thijs en Enzo groeide uit tot een van de populairste podcast-formats van Nederland. Concess begeleidde elk seizoen volledig: van contentstrategie en productieplanning tot de promotiecampagne, lancering en social media.",
    services: ["Podcast Productie", "Contentstrategie", "Brand Partnership", "Promotie & Marketing"],
    stats: [
      { value: "1M+", label: "Streams" },
      { value: "#1", label: "Podimo NL charts" },
      { value: "3", label: "Seizoenen geproduceerd" },
      { value: "62K+", label: "Spotify volgers" },
    ],
    platformLink: "https://podimo.com/nl/shows/de-bennies-2",
    platformLinkLabel: "Luister op Podimo",
    creatorProfiles: [
      { name: "Enzo Knol", role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/enzo.jpg" },
      { name: "Thijs van Woerkum", role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/thijs.jpg" },
      { name: "Noël Dekkers", role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/noel.jpg" },
    ],
    guests: [
      // Seizoen 2 — geen gasten
      // Seizoen 3
      { name: "Qucee", img: "/images/Partnerships/De Bennies/Gasten de bennies/qucee.jpeg.webp" },
      { name: "Bram Krikke", img: "/images/Partnerships/De Bennies/Gasten de bennies/bram.jpg" },
      { name: "Raoul de Graaf", img: "/images/Partnerships/De Bennies/Gasten de bennies/raoul.jpg" },
      // Seizoen 4
      { name: "Bas Reijgwart", img: "/images/Partnerships/De Bennies/Gasten de bennies/bas.jpg" },
      { name: "Acid (Nathan Vandergunst)", img: "/images/Partnerships/De Bennies/Gasten de bennies/nathan.jpg" },
      { name: "Robbie van de Graaf", img: "/images/Partnerships/De Bennies/Gasten de bennies/robbie.jpg" },
    ],
    gallery: [
      { type: "image", src: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg", alt: "Podimo x De Bennies artwork" },
    ],
  },
  {
    slug: "zusje-vrouwmibo",
    brand: "'t Zusje",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2024",
    cover: "/images/Partnerships/vrouwmibo/zusje x vrouwmibo.jpg",
    gradient: "from-amber-900 to-stone-950",
    description: "Een langdurige samenwerking tussen Vrouwmibo en 't Zusje waarbij de meiden hun eigen signature cocktail op de menukaart kregen. De samenwerking werd afgetrapt met een ballonvaart en resulteerde in een covershoot voor het 't Zusje Magazine. Daarnaast waren ze aanwezig bij de theatershow, wat voor een bijzondere aanwezigheid zorgde.",
    services: ["Brand Partnership", "Content Creatie", "Magazine Cover"],
    hoverVideo: "https://www.youtube.com/watch?v=QssvsnBD_8Y",
    instagramEmbed: "https://www.instagram.com/p/DClm74Ft0YU/",
    gallery: [],
  },
  {
    brand: "MTV: Ex on the Beach",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/vrouwmibo/EOTB x Vrouwmibo.png",
    gradient: "from-orange-900 to-zinc-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Subway Festival",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/vrouwmibo/Vrouwmibo x Subway.png",
    gradient: "from-yellow-900 to-zinc-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Air up",
    creator: "De Bennies",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/de-bennies/air-up/cover.png",
    hoverVideo: "https://www.tiktok.com/@debennies/video/7232297966965378330",
    gradient: "from-blue-900 to-zinc-950",
    description: "Een authentieke samenwerking tussen Air up en De Bennies waarbij het trio de smaakdopjes op hun eigen humoristische manier introduceerde aan hun publiek. De campagne resulteerde in een organische integratie die perfect aansloot bij de stijl van De Bennies.",
    services: ["Brand Partnership", "Content Creatie", "Social Media"],
    gallery: [
      { type: "image", src: "/images/Partnerships/de-bennies/air-up/cover.png", alt: "Air up x De Bennies" },
    ],
  },
  {
    brand: "L'Oréal Paris",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/L'Oréal Paris x Vrouwmibo.jpg",
    gradient: "from-orange-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "MyJewellery",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/Vrouwmibo x MyJewellery.jpg",
    gradient: "from-yellow-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "NA-KD",
    creator: "Vrouwmibo",
    category: "Brand Partnership",
    year: "2023",
    cover: "/images/Partnerships/Vrouwmibo x NA-KD.jpg",
    gradient: "from-rose-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Body & Fit",
    creator: "Nesim el Ahmadi",
    category: "Brand Partnership",
    year: "2020",
    cover: "/images/Partnerships/Body-Fit-x-Nesim.gif",
    gradient: "from-neutral-800 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Shoeby",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/Shoeby x Dylan Haegens 1.mp4",
    gradient: "from-blue-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Shoeby",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2022",
    cover: "/images/Partnerships/Shoeby x Dylan Haegens 2.mp4",
    gradient: "from-blue-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Veilig op Weg",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/Veilig op Weg x Dylan Haegens.png",
    gradient: "from-blue-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Pokémon Celebrations",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/Pokemon x Dylan Haegens.jpg",
    gradient: "from-yellow-800 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Netflix – The Mitchells vs. The Machines",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/Netflix x Dylan Haegens.mp4",
    gradient: "from-red-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "JBC",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/JBC x Dylan Haegens.mp4",
    gradient: "from-yellow-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Ministerie van Financiën",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/Ministerie van Financiën x Dylan Haegens.mp4",
    gradient: "from-sky-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "VanReusel",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/VanReusel x Dylan Haegens.png",
    gradient: "from-green-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Kinderpostzegelactie",
    creator: "Dylan Haegens",
    category: "Brand Partnership",
    year: "2021",
    cover: "https://img.youtube.com/vi/zYEERVvzOsI/maxresdefault.jpg",
    gradient: "from-orange-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Kinderpostzegelactie",
    creator: "Pieter Valley",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/KINDERPOSTZEGELACTIE x Piete Valley.mp4",
    gradient: "from-orange-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Kinderpostzegelactie",
    creator: "Lisanne Dijkstra",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/KINDERPOSTZEGELACTIE x Lisanne Dijkstra .mp4",
    gradient: "from-orange-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
  {
    brand: "Kinderpostzegelactie",
    creator: "Meester Jesper",
    category: "Brand Partnership",
    year: "2021",
    cover: "/images/Partnerships/KINDERPOSTZEGELACTIE x Meester Jesper.mp4",
    gradient: "from-orange-900 to-neutral-950",
    description: "",
    services: ["Brand Partnership", "Content Creatie"],
    gallery: [],
  },
];

// ------------------------------------------------------------
//  STUDIO CASES (klikbare producties op de studio pagina)
// ------------------------------------------------------------
export type StudioCase = {
  slug?: string;
  title: string;
  subtitle?: string;
  tags: string[];
  year: string;
  cover: string;
  gradient: string;
  tagline?: string;
  description: string;
  stats?: CaseStat[];
  hoverVideo?: string;
  platformLink?: string;
  platformLinkLabel?: string;
  platformLink2?: string;
  platformLinkLabel2?: string;
  socials?: { platform: string; handle: string; url: string }[];
  creatorProfiles?: { name: string; role: string; img: string }[];
  guests?: { name: string; img?: string }[];
  milestoneImg?: string;
  milestoneText?: string;
  posters?: string[];
  postersText?: string;
  instagramEmbed?: string;
  coverFit?: "cover" | "contain";
  heroImage?: string;
  tileTitle?: string;
  videos?: string[];
  photos?: string[];
  photosLabel?: string;
  photosFit?: "cover" | "contain";
  trailerLabel?: string;
  extraSections?: {
    label: string;
    title?: string;
    text?: string;
    photos: string[];
  }[];
  gallery: GalleryItem[];
};

export const studioCases: StudioCase[] = [
  // ── 2022 – heden ─────────────────────────────────────────
  {
    slug: "de-bennies-podcast",
    title: "De Bennies Podcast",
    subtitle: "Productie van begin tot eind",
    tileTitle: "De Bennies Podcast",
    tags: ["Podcasts", "Graphic Design", "Marketing & Social", "Fotografie"],
    year: "2022 – 2026",
    cover: "/images/Tegels/De Bennies - tegel.png",
    hoverVideo: "https://www.youtube.com/watch?v=hUpePaNRUc0",
    gradient: "from-pink-900 to-zinc-950",
    tagline: "Concess Studio",
    description: "Van seizoen 1 tot en met 4 verzorgde Concess de volledige productie van de De Bennies podcast. Audio-opnames, videomontage, artwork, social media en distributiestrategie, alles onder één dak. De podcast groeide uit tot een van de meest beluisterde podcasts van Nederland en België.",
    stats: [
      { value: "#1",   label: "Spotify NL charts bij lancering" },
      { value: "#2",   label: "Spotify BE charts bij lancering" },
      { value: "4",    label: "Seizoenen geproduceerd" },
    ],
    platformLink: "https://open.spotify.com/show/3oiLRw0TiQySEInqNus2ik",
    platformLinkLabel: "Luister op Spotify",
    platformLink2: "https://podimo.com/nl/shows/de-bennies-2",
    platformLinkLabel2: "Luister op Podimo",
    socials: [
      { platform: "Instagram", handle: "@debennies", url: "https://www.instagram.com/debennies/" },
      { platform: "TikTok",    handle: "@debennies",  url: "https://www.tiktok.com/@debennies" },
      { platform: "Spotify",   handle: "De Bennies Podcast", url: "https://open.spotify.com/show/3oiLRw0TiQySEInqNus2ik" },
      { platform: "Podimo",    handle: "De Bennies Podcast", url: "https://podimo.com/nl/shows/de-bennies-2" },
    ],
    creatorProfiles: [
      { name: "Enzo Knol",        role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/enzo.jpg" },
      { name: "Thijs van Woerkum",role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/thijs.jpg" },
      { name: "Noël Dekkers",     role: "Host", img: "/images/Partnerships/de-bennies/podimo-s2/noel.jpg" },
    ],
    guests: [
      { name: "Qucee",                    img: "/images/Partnerships/De Bennies/Gasten de bennies/qucee.jpeg.webp" },
      { name: "Bram Krikke",              img: "/images/Partnerships/De Bennies/Gasten de bennies/bram.jpg" },
      { name: "Raoul de Graaf",           img: "/images/Partnerships/De Bennies/Gasten de bennies/raoul.jpg" },
      { name: "Bas Reijgwart",            img: "/images/Partnerships/De Bennies/Gasten de bennies/bas.jpg" },
      { name: "Acid (Nathan Vandergunst)",img: "/images/Partnerships/De Bennies/Gasten de bennies/nathan.jpg" },
      { name: "Robbie van de Graaf",      img: "/images/Partnerships/De Bennies/Gasten de bennies/robbie.jpg" },
    ],
    milestoneImg: "/images/Partnerships/de-bennies/podimo-s2/miljoen.jpg",
    milestoneText: "De Bennies podcast stond bij de lancering direct op #1 in de Nederlandse Spotify charts en op #2 in de Belgische Spotify charts. Binnen 5 afleveringen had de podcast al 1 miljoen streams bereikt. Met video op Spotify als een van de eersten in Nederland bleven we maanden in de top 5.",
    gallery: [
      { type: "image", src: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg", alt: "De Bennies artwork" },
    ],
  },
  // ── 2024 ─────────────────────────────────────────────────
  {
    title: "Vrouwmishow",
    subtitle: "Nog één keer: All-In",
    tags: ["Graphic Design"],
    year: "2024",
    cover: "/images/Tegels/Vrouwmishow 2.png",
    gradient: "from-amber-900 to-stone-950",
    tagline: "Concess Studio",
    description: "Voor de Vrouwmishow, een volwaardige theatertour langs zalen als DeLaMar Amsterdam, World Forum Den Haag en Oude Luxor Rotterdam, verzorgde Concess het artwork.",
    gallery: [],
  },
  // ── 2023 ─────────────────────────────────────────────────
  {
    title: "The Right Place",
    tags: ["Graphic Design", "Web Design"],
    year: "2023",
    cover: "/images/studio/The Right Place/Tegel The Right Place.png",
    coverFit: "contain",
    gradient: "from-neutral-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor The Right Place verzorgde Concess het logo ontwerp en de volledige website. Van huisstijl tot online aanwezigheid — alles onder één dak.",
    photosLabel: "Website Design & Graphic Design",
    photos: [
      "/images/studio/The Right Place/Logo-2-1920x880.png",
      "/images/studio/The Right Place/Webdesign-TRP-1920x798.png",
      "/images/studio/The Right Place/trp_2-1920x798.png",
    ],
    gallery: [],
  },
  // ── Fotografie ───────────────────────────────────────────
  {
    slug: "kp-active-fotografie",
    title: "KP Active",
    subtitle: "fotografie",
    tileTitle: "KP Active",
    tags: ["Fotografie"],
    year: "2026",
    cover: "/images/Tegels/KP active Fotografie.jpg",
    gradient: "from-stone-700 to-stone-950",
    tagline: "Concess Studio",
    description: "Campagnebeelden en contentfotografie voor KP Active.",
    photos: [
      "/images/studio/KP Active fotografie/DSC02502 V2.jpg",
      "/images/studio/KP Active fotografie/instasave.website_567114569_17962950986989048_4375552415413974260_n.jpg",
      "/images/studio/KP Active fotografie/instasave.website_568355484_17963316740989048_2806702618017743612_n.jpg",
      "/images/studio/KP Active fotografie/instasave.website_570364021_17963474759989048_2306078750872651062_n.jpg",
      "/images/studio/KP Active fotografie/instasave.website_722637781_17991479600989048_1816018501316560386_n.jpg",
    ],
    gallery: [],
  },
  {
    slug: "fotografie",
    title: "Fotografie",
    subtitle: "shoots & campagnes",
    tileTitle: "Fotografie",
    tags: ["Fotografie"],
    year: "2020 – heden",
    cover: "/images/studio/fotografie.jpg",
    gradient: "from-stone-700 to-stone-950",
    tagline: "Concess Studio",
    description: "Van persshots tot campagnebeelden, een verzameling van fotografie die Concess door de jaren heen verzorgd heeft. Losse shoots, contentdagen en alles daartussenin.",
    photos: [
      "/images/Fotografie/img-2411_orig.jpg",
      "/images/Fotografie/img-9379_orig.jpg",
      "/images/Fotografie/jviwfivi_orig.jpeg",
      "/images/Fotografie/QC_ERA_11-1920x2880-1-scaled.jpg",
      "/images/Fotografie/img-4761_orig.jpg",
      "/images/Fotografie/famke_orig.jpg",
      "/images/Fotografie/img-2546_1_orig.jpg",
      "/images/Fotografie/f835216f-de4d-4ff7-b49d-b35a4d9c1a3b-3.jpg",
      "/images/Fotografie/img-1046-3_orig.jpg",
      "/images/Fotografie/1dd607db-f3e9-45c0-b681-fe8f7579be42-2_orig.jpg",
      "/images/Fotografie/fb55d53c-7c86-4930-a00d-3cf15b39f2c4-2_orig.jpg",
      "/images/Fotografie/2130bb6d-5728-4b1b-a493-26a6a672ce05-2.jpg",
      "/images/Fotografie/img-3730_orig.jpg",
      "/images/Fotografie/monica_orig.jpg",
      "/images/Fotografie/img-8216_orig.jpg",
      "/images/Fotografie/vonneke-bewerkt_orig.jpg",
      "/images/Fotografie/img-4857_orig.jpg",
      "/images/Fotografie/kleine_orig.jpg",
      "/images/Fotografie/img-2557_2_orig.jpg",
      "/images/Fotografie/7583912640-img-8427-2_orig.jpg",
      "/images/Fotografie/img-0707_orig.jpg",
      "/images/Fotografie/95d2b2d3-9517-4ee6-8a4c-a34f9f77a1ec-2_2_orig.jpg",
      "/images/Fotografie/img-0857_2.jpg",
      "/images/Fotografie/img-0705.jpg",
      "/images/Fotografie/img-5019_orig-1.jpg",
      "/images/Fotografie/ronnie_orig.jpg",
      "/images/Fotografie/onilqzp8_orig.jpeg",
      "/images/Fotografie/IMG_6633-kopie.png",
      "/images/Fotografie/img-4726_orig.jpg",
      "/images/Fotografie/img-4327_orig.jpg",
      "/images/Fotografie/img-2593.jpg",
      "/images/Fotografie/a6c0cd64-8b56-4488-a64b-8e7c7efa393b-2_orig.jpg",
      "/images/Fotografie/img-10501-2_orig.jpg",
      "/images/Fotografie/fc9856c9-86cf-4663-9563-966e1b9e2710.jpg",
      "/images/Fotografie/img-0702-2.jpg",
      "/images/Fotografie/dddba34f-5ba6-4328-b524-e213d15fcff1-2.jpg",
    ],
    gallery: [],
  },
  // ── 2022 – 2024 ──────────────────────────────────────────
  {
    slug: "vrouwmibo-podcast",
    title: "Vrouwmibo",
    subtitle: "de podcast",
    tags: ["Podcasts", "Marketing & Social"],
    year: "2022 – 2024",
    cover: "/images/Tegels/Vrouwmibo - tegel v2.png",
    gradient: "from-rose-800 to-stone-950",
    tagline: "Concess Studio",
    description: "Het is vrijdag, dus trek die fles maar open. Je bent aangekomen bij de gezelligste vrijdagmiddagborrel van Podimo! Elke week bespreken Nina Warink, Iris Enthoven en Sophie Milzink de week met op de borrelplank enkel ongefilterde meningen en ongegeneerde verhalen. Pak een glas en schuif aan bij de Vrouwmibo!",
    platformLink: "https://open.spotify.com/show/7BDsOLrwQCnCcKsJsmrogY",
    platformLinkLabel: "Luister op Spotify",
    platformLink2: "https://podimo.com/nl/shows/vrouwmibo",
    platformLinkLabel2: "Luister op Podimo",
    creatorProfiles: [
      { name: "Nina Warink",    role: "Host", img: "/images/Projecten/Vrouwmibo/nina.jpg" },
      { name: "Iris Enthoven",  role: "Host", img: "/images/Projecten/Vrouwmibo/iris.jpg" },
      { name: "Sophie Milzink", role: "Host", img: "/images/Projecten/Vrouwmibo/sophie.jpg" },
    ],
    socials: [
      { platform: "Instagram", handle: "@vrouwmibo", url: "https://www.instagram.com/vrouwmibo/" },
      { platform: "TikTok",    handle: "@vrouwmibo", url: "https://www.tiktok.com/@vrouwmibo" },
      { platform: "Spotify",   handle: "Vrouwmibo",  url: "https://open.spotify.com/show/7BDsOLrwQCnCcKsJsmrogY" },
      { platform: "Podimo",    handle: "Vrouwmibo",  url: "https://podimo.com/nl/shows/vrouwmibo" },
    ],
    posters: [
      "/images/Projecten/Vrouwmibo/Poster - Vrouwmishow 1.jpg",
      "/images/Projecten/Vrouwmibo/Poster - Vrouwmishow 2.png",
    ],
    postersText: "Naast de podcast mochten we de meiden het theater in begeleiden. Bij de eerste Vrouwmishow in Tivoli verzorgde Concess de volledige productie: van concept en creatieve begeleiding tot planning, artwork en uitvoering. Voor de tweede show, All In, een volwaardige tour langs zalen als DeLaMar Amsterdam, World Forum Den Haag en Oude Luxor Rotterdam, mochten we het artwork verzorgen.",
    instagramEmbed: "https://www.instagram.com/p/C8HqOqbt9JV/",
    gallery: [],
  },
  // ── 2022 ─────────────────────────────────────────────────
  {
    title: "Moordcast",
    tags: ["Podcasts", "Graphic Design", "Marketing & Social"],
    year: "2022",
    cover: "/images/Tegels/Moordcast.png",
    gradient: "from-neutral-800 to-neutral-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
  {
    title: "Morning Aftertalk",
    tags: ["Podcasts", "Fotografie"],
    year: "2021 – 2022",
    cover: "/images/Tegels/Morning Aftertalk met Gaby Blaaser.jpg",
    gradient: "from-stone-700 to-stone-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
  {
    title: "Effe Relativeren",
    tags: ["Podcasts"],
    year: "2022",
    cover: "/images/Tegels/Effe Relativeren.jpg",
    gradient: "from-stone-700 to-stone-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
  {
    title: "146 Podcast",
    tags: ["Podcasts", "Marketing & Social"],
    year: "2022",
    cover: "/images/Tegels/146 podcast.jpg",
    gradient: "from-zinc-700 to-zinc-950",
    tagline: "Concess Studio",
    photos: [
      "/images/studio/146 Podcast/146-socials.png",
    ],
    photosLabel: "Social Media",
    description: "In samenwerking met FunX maakten we een vervolg op de ADF Podcast. In de 146 Podcast praten Cartiez en zijn co-host Lips je wekelijks bij over de actualiteit — samen met bekende gasten én afwisselende hosts als Ronnie Flex, Jack $hirak, Kid de Blits, DJ Dylan, Maximilli, Caza Kimpeman en Rollan. Elke week ontvangt het duo een artiest voor een live optreden in de studio. Naast de podcast verzorgde Concess ook de social media: dagelijkse fragmenten, challenges en interactie met de fans op Instagram en TikTok.",
    socials: [
      { platform: "Spotify", handle: "146 Podcast", url: "https://open.spotify.com/show/146podcast" },
      { platform: "Instagram", handle: "@146podcast", url: "https://www.instagram.com/146podcast" },
      { platform: "TikTok", handle: "@146podcast", url: "https://www.tiktok.com/@146podcast" },
      { platform: "YouTube", handle: "FunX", url: "https://www.youtube.com/@FunX" },
    ],
    gallery: [],
  },
  // ── 2022 – Social Media ───────────────────────────────────
  {
    slug: "lash-paris",
    title: "Lash Paris",
    tags: ["Marketing & Social", "Fotografie"],
    year: "2022",
    cover: "/images/studio/Lash Paris /Lash-Paris-thumbnail-concess.jpg",
    gradient: "from-pink-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Lash Paris verzorgde Concess de volledige social media — van productfoto's en modelshoot tot grafische posts en video's. Het doel: een exclusieve, unieke en moderne uitstraling op Instagram. Daarnaast produceerden we een commercial voor de academy van Lash Paris.",
    hoverVideo: "https://www.youtube.com/watch?v=CWrj6EXGl3g",
    photos: [
      "/images/studio/Lash Paris /Lash-Paris-Socials.png",
      "/images/studio/Lash Paris /ZOE-1.png",
      "/images/studio/Lash Paris /VIENNA-3.png",
      "/images/studio/Lash Paris /Fast-Volume-2.jpg",
      "/images/studio/Lash Paris /Lift-adhesive-2.jpg",
      "/images/studio/Lash Paris /Tweezers.jpg",
      "/images/studio/Lash Paris /Schermafbeelding-2021-06-14-om-14.30.23-2.png",
    ],
    photosLabel: "Social Media",
    trailerLabel: "Commercial",
    socials: [
      { platform: "Instagram", handle: "@lashparisofficial", url: "https://www.instagram.com/lashparisofficial" },
    ],
    gallery: [],
  },
  // ── 2021 – Marketing ─────────────────────────────────────
  {
    slug: "bootje-antoon-paul-sinha",
    title: "Bootje",
    subtitle: "Antoon & Paul Sinha",
    tileTitle: "Bootje – Antoon & Paul",
    tags: ["Marketing & Social"],
    year: "2021",
    cover: "/images/studio/Bootje/Bootje tegel V2.jpg",
    gradient: "from-blue-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Antoon & Paul Sinha verzorgde Concess de online marketing van hun top 50 hit 'Bootje'. Het nummer behaalde 1 miljoen streams in minder dan één maand op Spotify en was veel te horen op TikTok. Concess creëerde de short-form content strategie rondom de release.",
    hoverVideo: "https://www.youtube.com/watch?v=pz_2LcuAI6A",
    trailerLabel: "Bootje",
    videos: [
      "/images/studio/Bootje/STORY-2_Teaser-Bootje_OUT-NOW.mp4",
      "/images/studio/Bootje/OutNow_PaulTijn2.mp4",
      "/images/studio/Bootje/TikTok-meme.mp4",
      "/images/studio/Bootje/48650bab28234d4bb61a1511a9fb78ab.mov",
    ],
    stats: [
      { value: "1M+", label: "Streams in < 1 maand op Spotify" },
      { value: "Top 50", label: "Nederlandse hitlijst" },
    ],
    gallery: [],
  },
  // ── 2020 – Social Media ───────────────────────────────────
  {
    slug: "paul-sinha",
    title: "Paul Sinha",
    tags: ["Marketing & Social", "Fotografie", "AR Filters"],
    year: "2020",
    cover: "/images/studio/Paul Sinha/Paul-Sinha-thumbnail-concess.jpg",
    gradient: "from-indigo-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Paul Sinha verzorgde Concess de social media — foto's, marketingacties, video's en releases. We ontwikkelden zijn eerste IGTV-format 'Paul's Pokoe Presentatie', waarin hij het proces achter zijn muziek deelt. Als aanvulling op zijn release 'Dans Met Mij' ft. Numidia bedachten en creëerden we een marketingactie in samenwerking met T-Mobile: een TikTok challenge én een Instagram AR filter waarmee fans kans maakten op een intiem concert.",
    extraSections: [
      {
        label: "Marketingactie",
        title: "Dans met mij",
        text: "Als aanvulling op Paul Sinha zijn release 'Dans Met Mij' ft. Numidia en zijn samenwerking met T-Mobile hebben we een leuke marketingactie mogen bedenken en creëren! Door mee te doen met de 'Dans Met Mij challenge' via TikTok of via Paul zijn Instagram AR filter maak je kans op een intiem concert van Paul én op een OPPO Reno 4 Pro (5G)!",
        photos: [
          "/images/studio/Paul Sinha/Dans-met-mij-filter.png",
          "/images/studio/Paul Sinha/Post_TmobilexPaul-1536x1536-1.png",
        ],
      },
      {
        label: "Fotografie",
        photos: [
          "/images/studio/Paul Sinha/DSC01221-scaled-e1625167805414.jpg",
          "/images/studio/Paul Sinha/DSC09385-scaled-e1625167840118.jpg",
          "/images/studio/Paul Sinha/Schermafbeelding-2021-07-01-om-21.32.26.png",
        ],
      },
    ],
    socials: [
      { platform: "Instagram", handle: "@paulsinha", url: "https://www.instagram.com/paulsinha" },
      { platform: "TikTok", handle: "@paulsinha", url: "https://www.tiktok.com/@paulsinha" },
    ],
    gallery: [],
  },
  // ── 2021 ─────────────────────────────────────────────────
  {
    slug: "taboe-nesim",
    title: "Taboe",
    subtitle: "Nesim el Ahmadi",
    tags: ["Video & Productie", "Graphic Design", "Web Design"],
    year: "2021",
    cover: "/images/Tegels/Taboe.jpg",
    coverFit: "contain",
    gradient: "from-neutral-800 to-neutral-950",
    tagline: "Concess Studio",
    description: "YouTuber en presentator Nesim el Ahmadi gaat het theater in met zijn allereerste cabaretvoorstelling! In zijn eerste voorstelling Taboe! bespreekt Nesim taboes en verhalen die voor hem belangrijk zijn. Hij vertelt over hoe het is om de zoon van een vluchteling te zijn, over zijn zoektocht naar zijn geloof en over het op jonge leeftijd trouwen met een christelijke vrouw. Daarnaast komen onder andere haartransplantaties, de ontvoering van zijn vrouw en vastzitten in de cel aan bod. Een vlammende, komische avond, waarin niets taboe is!",
    hoverVideo: "https://www.youtube.com/watch?v=dUr9SGzSRLk",
    photos: [
      "/images/studio/Taboe_2.png",
    ],
    photosLabel: "Website Design",
    photosFit: "contain",
    gallery: [],
  },
  // ── 2020 – 2021 ──────────────────────────────────────────
  {
    title: "Monica's Podcast",
    tags: ["Podcasts"],
    year: "2021",
    cover: "/images/Tegels/Monica's Podcast.jpg",
    gradient: "from-neutral-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
  {
    slug: "kinderpostzegelactie",
    title: "Kinderpostzegelactie",
    subtitle: "Dylan Haegens",
    tileTitle: "Kinderpostzegelactie",
    tags: ["Marketing & Social", "Conceptontwikkeling", "Videoproductie", "Productie"],
    year: "2021",
    cover: "/images/studio/Kinderpostzegels-Dylan-Haegens-1thumbnail-concess.jpg",
    hoverVideo: "https://www.youtube.com/watch?v=zYEERVvzOsI",
    gradient: "from-orange-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor de Kinderpostzegelactie 2021 heeft Haegens Media de spel- en conceptontwikkeling en videoproducties mogen verzorgen. De actie was gericht op de gevolgen van corona op kinderen, die misschien voor het eerst te maken krijgen met een onveilig thuis of mentale problematiek. Daarom is gekozen voor het thema: 'Geef meer kracht'. De kinderen hebben massaal meegedaan aan de actie, waardoor er meer dan 300.000 digitale bestellingen zijn opgehaald.\n\nNaast de video's en conceptontwikkeling heeft Haegens Media zich ook bezig gehouden met het ontwerpen van online 'breingames'. Om de doelgroep te bereiken op TikTok is er een samenwerking geweest met TikTokkers Pieter Valley, Meester Jesper en Lisanne Dijkstra. De actie is afgesloten met een livestream waar zeker 40.000 klassen naar hebben gekeken.\n\nIn opdracht van Haegens Media heeft Concess het projectmanagement mogen verzorgen en betrokken mogen zijn bij het volledige proces.",
    stats: [
      { value: "300.000+", label: "Digitale bestellingen" },
      { value: "€8.526.365", label: "Totale opbrengst" },
      { value: "40.000", label: "Klassen bij de livestream" },
    ],
    videos: [
      "/images/Partnerships/KINDERPOSTZEGELACTIE x Piete Valley.mp4",
      "/images/Partnerships/KINDERPOSTZEGELACTIE x Lisanne Dijkstra .mp4",
      "/images/Partnerships/KINDERPOSTZEGELACTIE x Meester Jesper.mp4",
    ],
    gallery: [],
  },
  {
    slug: "milans-throwback-thursday",
    title: "Milan's Throwback Thursday",
    tags: ["Productie"],
    year: "2021",
    cover: "/images/studio/milans-throwback-thursday-thumbnail-concess.png",
    hoverVideo: "https://www.youtube.com/watch?v=kGNR7kBYHEo",
    gradient: "from-neutral-800 to-neutral-950",
    tagline: "Concess Studio",
    description: "In Milan's Throwback Thursday gaat Milan Carvalho met influencers en BN'ers terugblikken op de meest gênante, leukste en grappigste momenten uit hun YouTube/TV carrière. Naast het terugblikken op de beelden zal Milan een interview doen met zijn gasten. Hadden ze ooit verwacht dat ze op dit punt zouden komen? Wat vinden ze van de beelden? Wat doen ze nu anders? Waar willen ze over 10 jaar op terug kijken? Milan komt het allemaal te weten in Milan's Throwback Thursday.",
    platformLink: "https://www.youtube.com/channel/UCLWh30BP8g_j8Khcis_FtSw",
    platformLinkLabel: "Bekijk op YouTube",
    gallery: [],
  },
  {
    slug: "whip-my-hair",
    title: "Whip My Hair",
    tags: ["Productie", "AR Filters"],
    year: "2021",
    cover: "/images/studio/Whip My Hair/whip-my-hair-thumbnail-concess.png",
    heroImage: "/images/studio/Whip My Hair/Whip-my-hair-filter.png",
    hoverVideo: "https://www.youtube.com/watch?v=dKfOPNmYDoU",
    gradient: "from-violet-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "In Whip my Hair verrast haarinfluencer Randy van Rijsbergen acht verschillende influencers/BN'ers met een nieuwe hair-look. In deze serie neemt Randy je mee in het hele make-over-proces terwijl hij een gezellig gesprek heeft met de gast. Daarnaast geeft Randy ook de beste tips & tricks op het gebied van haar om thuis uit te proberen.\n\nMede mogelijk gemaakt door L'Oréal Professionnel.",
    platformLink: "https://www.youtube.com/channel/UCiAN9M50bGpQzfcbYBXuiGw",
    platformLinkLabel: "Bekijk op YouTube",
    photos: [
      "/images/studio/Whip My Hair/WMH-Daphne.jpg",
      "/images/studio/Whip My Hair/WMH-Jessie.jpg",
      "/images/studio/Whip My Hair/WMH-Victoria.jpg",
    ],
    extraSections: [
      {
        label: "AR Filters",
        title: "Whip My Hair Filter",
        text: "Met de 'Whip My Hair' AR Filter kan je meedoen aan de winacties in samenwerking met L'Oréal Professionnel! Klik op het scherm zodat het rad begint te draaien. Het product waarop het rad eindigt kan jij winnen door de story te plaatsen en Randy hierin te taggen.",
        photos: ["/images/studio/Whip My Hair/Whip-my-hair-filter.png"],
      },
    ],
    gallery: [],
  },
  {
    slug: "kes-van-den-broek",
    title: "Kes van den Broek",
    tags: ["Content Management", "Productie"],
    year: "2020",
    cover: "/images/studio/kes_tegel.jpg",
    hoverVideo: "https://www.youtube.com/watch?v=qbC3T6FZddY",
    gradient: "from-rose-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Kes van den Broek heeft in 2020 meegedaan aan het RTL-programma 'The Voice of Holland'. Haar battle 'Menak Wla Meni Verleden Tijd' met Ayoub Maach heeft meer dan 600.000 views gehaald op YouTube en meer dan 3 miljoen streams op Spotify. Nadat Kes in de halve finale het programma heeft verlaten, heeft ze met Ayoub Maach en Ali B. een nummer uitgebracht genaamd 'Zina'. Dit nummer heeft 1,9 miljoen views op YouTube en meer dan 2 miljoen streams op Spotify.\n\nVoor Kes van den Broek heeft Concess haar totale content management verzorgd van maart tot december 2020. Dit houdt in dat wij Kes hebben geholpen bij het bedenken, produceren, filmen en editen van haar YouTube video's, samenwerkingen voor social media en heeft Concess haar vormgeving verzorgt.",
    gallery: [],
  },
  {
    slug: "getekend-voor-het-leven",
    title: "Getekend voor het Leven",
    tags: ["Social Content", "Productie"],
    year: "2021",
    cover: "/images/studio/Goedvolk x WarChild.jpg",
    hoverVideo: "https://www.youtube.com/watch?v=JhgCpGPt4ik",
    gradient: "from-neutral-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "In Getekend voor het Leven laat Quinty Misiedjan zien wat er met kinderen gebeurt op het moment dat ze gevlucht zijn, hoe dit voelt door de ogen van het kind maar vooral, hoe zij in hemelsnaam kind blijven.\n\nVoor dit project heeft Concess de behind the scenes mogen vastleggen.\n\nMede mogelijk gemaakt door War Child.",
    platformLink: "https://www.youtube.com/watch?v=JhgCpGPt4ik",
    platformLinkLabel: "Bekijk video",
    gallery: [],
  },
  {
    slug: "the-roast-of-dutch-performante",
    title: "The Roast of Dutch Performante",
    tags: ["Productie"],
    year: "2021",
    cover: "/images/studio/Thumbnail The Roast of Dutch Performante - Concess.jpg",
    hoverVideo: "https://www.youtube.com/watch?v=CZVeq-reJMc",
    gradient: "from-neutral-800 to-neutral-950",
    tagline: "Concess Studio",
    description: "Chahid Charrak (online vooral bekend als Dutch Performante) weet zijn volgers altijd te vermaken met mooie gebaren. Bovendien is hij een echte weldoener die altijd klaar staat om zowel vrienden als volslagen vreemden een gunst te verlenen. Naast al deze mooie gebaren is het toch echt tijd om Chahid eens aan te pakken in 'The Roast of Dutch Performante'. In deze YouTube roast zal Chahid geroast worden door YouTubers Milan Knol, Don de Jong, Mees Dix en Quin van der Zeeuw. Uiteraard zal Chahid ook terug roasten en is er een klein live publiek van vrienden en familie aanwezig.\n\n© Fotografie: Edwin Smulders.",
    platformLink: "https://www.youtube.com/watch?v=CZVeq-reJMc",
    platformLinkLabel: "Bekijk video",
    gallery: [],
  },
  {
    slug: "youtune",
    title: "YouTune",
    tags: ["Productie", "AR Filters"],
    year: "2021",
    cover: "/images/studio/YouTune/YouTune-thumbnail-concess.jpg",
    heroImage: "/images/studio/YouTune/YouTune-filter.png",
    hoverVideo: "https://www.youtube.com/watch?v=8c0sTg0lfIk",
    gradient: "from-sky-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "In YouTune gaat Kes van den Broek de strijd aan met haar gasten om erachter te komen wie het meeste af weet van muziek. Om deze vraag te beantwoorden zullen zij 3 rondes moeten spelen; in ronde 1 zijn er bestaande hits in 'reverse' gedraaid en moeten de deelnemers raden welk nummer het is en wie de artiest is. In ronde 2 moeten de deelnemers aan de hand van hints erachter komen over welke artiest of welk nummer de hints gaan. In de laatste ronde speelt de live band bestaande hits in een ander jasje. Degene die na deze rondes de meeste punten heeft behaald, wint de aflevering.\n\nMede mogelijk gemaakt door Lucardi Juwelier & Guts & Gusto.",
    platformLink: "https://www.youtube.com/watch?v=8c0sTg0lfIk",
    platformLinkLabel: "Bekijk trailer",
    photos: [
      "/images/studio/YouTune/Kes-🎵-@felizzphotos-38.jpg",
      "/images/studio/YouTune/Kes-🎵-@felizzphotos-59.jpg",
      "/images/studio/YouTune/Kes-🎵-@felizzphotos-68-1.jpg",
      "/images/studio/YouTune/Kes-🎵-@felizzphotos-97-1-1536x1025-1.jpg",
    ],
    extraSections: [
      {
        label: "AR Filters",
        title: "YouTune Filter",
        text: "Met de 'YouTune' AR Filter kan je het spel YouTune zelf spelen! Je krijgt 5 woorden die een artiest omschrijven of 1 hint en een stukje van de lyrics die een nummer omschrijven. Raad zo snel mogelijk wie de artiest is of over welk nummer de hints gaan!",
        photos: ["/images/studio/YouTune/YouTune-filter.png"],
      },
    ],
    gallery: [],
  },
  {
    slug: "grote-jongens",
    title: "Grote Jongens",
    tags: ["Productie", "AR Filters"],
    year: "2021",
    cover: "/images/studio/Grote jongens/Grote-Jongens-thumbnail-concess.jpg",
    heroImage: "/images/studio/Grote jongens/Grote-jongens-filters.png",
    hoverVideo: "https://www.youtube.com/watch?v=WtlE2O9PBY4",
    gradient: "from-emerald-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Nesim el Ahmadi wordt dagelijks geconfronteerd op social media met beelden van 'grote' fitness jongens. In 'Grote Jongens' duikt hij in de wereld van het fitnessen. Nesim gaat in 5 afleveringen bij de grootste jongens in Nederland langs om een kijkje te nemen in hun sport, eet- en leefschema. Wat moet je er voor over hebben om een grote jongen te zijn en gaat het hem lukken om het lichaam te krijgen waar hij momenteel dagelijks mee geconfronteerd wordt?\n\nMede mogelijk gemaakt door Body & Fit.",
    platformLink: "https://www.youtube.com/watch?v=WtlE2O9PBY4",
    platformLinkLabel: "Bekijk aflevering 1",
    photos: [
      "/images/studio/Grote jongens/GJ-Nesim.jpg",
      "/images/studio/Grote jongens/GJ-BTS.jpg",
      "/images/studio/Grote jongens/GJ.jpg",
    ],
    extraSections: [
      {
        label: "AR Filters",
        title: "Grote Jongens Filter",
        text: "Met de 'Grote Jongens' AR Filter krijg je een sportieve opdracht om thuis uit te voeren. Hiermee willen we de fans van Nesim motiveren thuis fit te blijven. Met de 'Muscle Meter' AR Filter meet Instagram het percentage van je spieren.",
        photos: ["/images/studio/Grote jongens/Grote-jongens-filters.png"],
      },
    ],
    gallery: [],
  },
  {
    slug: "snelle-in-mn-bloed",
    title: "Snelle",
    subtitle: "In M'n Bloed",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Snelle - In m'n bloed/Tegel_snelle_inmnbloed.png",
    heroImage: "/images/studio/AR Filters/Snelle - In m'n bloed/Snelle-In-mn-bloed-filter-concess.png",
    gradient: "from-red-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Ter promotie van Snelle zijn single 'In M'n Bloed' hebben wij een AR filter mogen maken voor Instagram en Snapchat. In dit filter spiegelen wij zijn videoclip, waarin te zien is dat hij ouder wordt. Dit kan je in het filter zelf ook doen waarbij je het nummer 'In M'n Bloed' op de achtergrond hoort.",
    gallery: [],
  },
  {
    slug: "nina-warink-wazig",
    title: "Nina Warink",
    subtitle: "Wazig",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Nina Warink - Wazig/nina-warink-wazig-tegel.jpg",
    heroImage: "/images/studio/AR Filters/Nina Warink - Wazig/Nina-warink-adoa-wazig-filters.png",
    gradient: "from-neutral-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "Ter promotie van Nina Warink haar documentaire 'WAZIG – Leven met ADOA' heeft Concess 2 Instagram AR filters mogen maken. Wanneer je het filter 'Leven met ADOA' gebruikt, kan je zien hoe het zicht is van een persoon met deze aandoening van de oogzenuw. Voor het filter 'Wazig' hebben we de poster van deze documentaire omgezet in een filter.",
    gallery: [],
  },
  {
    slug: "nick-simon-waarom",
    title: "Nick & Simon",
    subtitle: "Waarom",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Nick & Simon - Waarom/Nick-simon-thumbnail-concess.jpg",
    heroImage: "/images/studio/AR Filters/Nick & Simon - Waarom/nick-en-simon-waarom-filter-concess.png",
    gradient: "from-zinc-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "Ter promotie van de release van Nick & Simon 'Waarom' hebben wij een AR filter mogen creëren waarin de linkerhelft van het scherm een 'fake' beeld laat zien met filter en botox. Aan de rechterkant van het scherm zie je een 'reality' beeld zonder filters en botox. De audio van het nummer is te horen wanneer je een filmpje maakt met het filter.",
    gallery: [],
  },
  {
    slug: "miljuschka-magazine",
    title: "Miljuschka Magazine",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Miljuschka Magazine/Miljuschka-Magazine-thumbnail-concess.jpg",
    heroImage: "/images/studio/AR Filters/Miljuschka Magazine/Miljuschka-Magazine-Miljuschka-Witzenhausen-AR-filters.png",
    gradient: "from-orange-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Miljuschka Witzenhausen heeft Concess 3 Instagram AR Filters mogen maken. De eerste is gemaakt ter promotie van haar Magazine. Daarnaast hebben we een Cheesecake spelelement gemaakt met de vraag 'Welke cheesecake maak jij vandaag?' waarna alle cheesecake recepten van Miljuschka te zien zijn. Ook hebben we een filter gemaakt met het logo van Miljuschka.",
    gallery: [],
  },
  {
    slug: "nina-warink-simpel-sexy",
    title: "Nina Warink",
    subtitle: "Simpel & Sexy",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Nina Warink - Simpel & Sexy/Nina-Warink-Simpel-En-Sexy-thumbnail-concess.jpg",
    heroImage: "/images/studio/AR Filters/Nina Warink - Simpel & Sexy/Nina-Warink-Simpel-Sexy.png",
    gradient: "from-pink-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Ter promotie van Nina Warink haar 2e kookboek 'Simpel & Sexy' heeft Concess 4 Instagram AR Filters mogen maken. Naast het rad 'Welk borrelhapje?', waarin je verschillende borrelhapjes uit haar boek kan zien, hebben we ook het logo van het boek in verschillende filters verwerkt.",
    gallery: [],
  },
  {
    slug: "nina-warink-mijn-tweede-liefde",
    title: "Nina Warink",
    subtitle: "Mijn Tweede Liefde",
    tags: ["AR Filters"],
    year: "2021",
    cover: "/images/studio/AR Filters/Nina Warink - Mijn tweede liefde/Mijn-Tweede-liefde-nina-warink-thumbnail-concess.jpg",
    heroImage: "/images/studio/AR Filters/Nina Warink - Mijn tweede liefde/Nina-Warink-Simpel-Sexy.png",
    gradient: "from-rose-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Nina Warink heeft Concess 3 Instagram AR Filters mogen maken. De 3 filters zijn gemaakt ter promotie van haar eigen kookboek; 'Mijn Tweede Liefde'. We hebben de gerechten en snacks uit het boek verwerkt in een randomizer boven het hoofd. Daarnaast hebben we in een filter het logo van het boek rond het hoofd laten vliegen.",
    gallery: [],
  },
  {
    slug: "mollenstreken-lavezzi-rutjes",
    title: "Mollenstreken",
    subtitle: "Lavezzi Rutjes",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Mollenstreken - Lavezzi Rutjes/Mollenstreken-Lavezzi-Rutjes-thumbnail-concess.jpg",
    heroImage: "/images/studio/AR Filters/Mollenstreken - Lavezzi Rutjes/Mollenstreken-Lavezzi-Rutjes.png",
    gradient: "from-yellow-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor Lavezzi Rutjes heeft Concess 2 Instagram AR Filters mogen maken. De filters zijn gemaakt ter promotie van zijn eigen TV-programma; Mollenstreken.",
    gallery: [],
  },
  {
    slug: "viral-festival-amsterdam",
    title: "Viral Festival Amsterdam",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/Viral Festival/Viral-Festival-Concess-Thumbnail.png",
    heroImage: "/images/studio/AR Filters/Viral Festival/Viral-Festival-1.png",
    gradient: "from-purple-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor het evenement 'Viral Festival' heeft Concess 2 Instagram AR Filters mogen maken. De filters worden gebruikt ter promotie van het festival.",
    gallery: [],
  },
  {
    slug: "the-wardrobe-organizer",
    title: "The Wardrobe Organizer",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/The Wardrobe Organizer/The-Wardrobe-Organizer-Filter-Concess.png",
    heroImage: "/images/studio/AR Filters/The Wardrobe Organizer/Filters-The-Wardrobe-Organizer.png",
    gradient: "from-teal-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor The Wardrobe Organizer heeft Concess 2 Instagram AR Filters mogen maken. Het eerste filter hebben we gemaakt met het logo van The Wardrobe Organizer. Daarnaast hebben we een spelelement gemaakt met de vraag 'Welke organizer ben jij?' waarna verschillende soorten organizers te zien zijn.",
    gallery: [],
  },
  {
    slug: "wout",
    title: "WOUT",
    tags: ["AR Filters"],
    year: "2022",
    cover: "/images/studio/AR Filters/WOUT/Wout-Filters-Concess.png",
    heroImage: "/images/studio/AR Filters/WOUT/Filter-WOUT.png",
    gradient: "from-green-900 to-neutral-950",
    tagline: "Concess Studio",
    description: "Voor online planten toko WOUT heeft Concess een Instagram AR Filter mogen ontwerpen. Met dit filter kan je erachter komen welke WOUT plant jij bent. Door de vallende blaadjes en het logo van WOUT te verwerken in het filter hebben wij de branding van het merk zo goed mogelijk naar voren laten komen. Aan het filter zat een win-actie gekoppeld waarbij je door gebruik van het filter kans maakt op een WOUT plant.",
    gallery: [],
  },
  {
    title: "Met Z'n Allen",
    tags: ["Podcasts"],
    year: "2020 – 2021",
    cover: "/images/Tegels/Metznallen V2. jpg.jpg",
    gradient: "from-zinc-800 to-zinc-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
  {
    title: "ADF Podcast",
    tags: ["Podcasts", "Marketing & Social"],
    year: "2020 – 2021",
    cover: "/images/Tegels/ADF podcast.jpg",
    gradient: "from-neutral-700 to-neutral-950",
    tagline: "Concess Studio",
    description: "",
    gallery: [],
  },
];

// ------------------------------------------------------------
//  MERKEN (logo ticker + partnerships pagina)
// ------------------------------------------------------------
export const brands = [
  "L'Oréal Paris",
  "Garmin",
  "Air Up",
  "Revolut",
  "BookBeat",
  "Berg",
  "Emma",
  "Bud Holland",
  "Legends of Gaming",
  "Subway Festival",
];

// ------------------------------------------------------------
//  GLOBALE STATS (hero, partnerships, creators pagina)
// ------------------------------------------------------------
export const stats = {
  totalViews:    "150M+",
  totalDeals:    "85+",
  totalCreators: "3",
  engagementRate: "8.2%",
  combinedFollowers: "39M+",
};

// ------------------------------------------------------------
//  OVER ONS — teksten
// ------------------------------------------------------------
export const aboutText = {
  heroTitle: "Wij zijn",
  heroTitleItalic: "Concess.",
  storyTitle: "Niet de meeste campagnes, de beste.",
  storyParagraphs: [
    "Concess begon met één simpele overtuiging: de beste campagnes zijn niet de luidste, maar de meest authentieke. Wij verbinden merken aan creators die écht passen en zorgen dat die samenwerking voelt als echte content, niet als advertentie.",
    "Vanuit Nederland werken wij samen met de grootste creators van het land. Van exclusief creator management tot full-service brand partnerships en studio productie: wij zijn de verbindende schakel tussen talent en merken die willen groeien.",
    "Geen tussenpersonen. Geen overhead. Gewoon mensen die geloven in wat ze maken.",
  ],
  numbers: [
    { value: "50+",  label: "Brand deals" },
    { value: "150M+", label: "Totale views" },
    { value: "3",    label: "Exclusieve creators" },
    { value: "10+",  label: "Jaar ervaring" },
  ],
};
