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
export const projects = [
  {
    brand: "L'Oréal Paris",
    creator: "Myron Koops",
    views: "18M+",
    type: "Partnerships",
    img: "/images/Vrouwmishow_Concess.png",
    gradient: "from-stone-700 to-stone-950",
  },
  {
    brand: "Revolut",
    creator: "Enzo Knol",
    views: "15M+",
    type: "Partnerships",
    img: "/images/EnzoKnol_Concess.png",
    gradient: "from-zinc-700 to-zinc-950",
  },
  {
    brand: "Berg",
    creator: "Enzo Knol",
    views: "12M+",
    type: "Video",
    img: "/images/402-AutoMotive-x-Enzo-Knol-1.png",
    gradient: "from-stone-600 to-stone-900",
  },
  {
    brand: "Garmin",
    creator: "Myron",
    views: "10M+",
    type: "Partnerships",
    img: "/images/De-bennies-concess.jpg",
    gradient: "from-neutral-700 to-neutral-950",
  },
  {
    brand: "Air Up",
    creator: "De Bennies",
    views: "8M+",
    type: "Partnerships",
    img: "/images/Bennies-x-Air-up.png",
    gradient: "from-zinc-600 to-zinc-900",
  },
  {
    brand: "BookBeat",
    creator: "Enzo Knol",
    views: "6M+",
    type: "Partnerships",
    img: "/images/Bookbeattest-1.png",
    gradient: "from-stone-600 to-stone-900",
  },
  {
    brand: "Emma",
    creator: "De Bennies",
    views: "5M+",
    type: "Video",
    img: "/images/Snuggstest-1.png",
    gradient: "from-neutral-800 to-neutral-950",
  },
  {
    brand: "Bud Holland",
    creator: "Myron",
    views: "4M+",
    type: "Partnerships",
    img: "/images/Verraderstest-1.png",
    gradient: "from-zinc-700 to-zinc-950",
  },
  {
    brand: "Legends of Gaming",
    creator: "Enzo Knol",
    views: "3M+",
    type: "Events",
    img: "/images/LOGtest-1.png",
    gradient: "from-neutral-700 to-zinc-900",
  },
  {
    brand: "Subway Festival",
    creator: "Concess",
    views: "",
    type: "Events",
    img: "/images/Vrouwmibo-x-Subway.png",
    gradient: "from-stone-700 to-stone-950",
  },
  {
    brand: "Vrouwmibo",
    creator: "Concess",
    views: "",
    type: "Fotografie",
    img: "/images/Vrouwmibo-concess-1024x756.jpg",
    gradient: "from-stone-600 to-stone-950",
  },
  {
    brand: "402 Automotive",
    creator: "Concess",
    views: "",
    type: "Fotografie",
    img: "/images/402-AutoMotive-x-Enzo-Knol-1.png",
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    brand: "StukTV",
    creator: "Concess",
    views: "",
    type: "Fotografie",
    img: "/images/Thumbnail-StukTV.jpg",
    gradient: "from-neutral-600 to-neutral-900",
  },
  {
    brand: "Tantoe Muzikaal",
    creator: "Concess",
    views: "",
    type: "Video",
    img: "/images/Tantoe-Muzikaal-thumbnail-concess.jpg",
    gradient: "from-stone-700 to-stone-900",
  },
  {
    brand: "De Bennies Podcast",
    creator: "De Bennies",
    views: "2M+",
    type: "Podcasts",
    img: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg",
    gradient: "from-zinc-800 to-zinc-950",
  },
];

// De eerste 5 projecten worden uitgelicht op de homepage en partnerships pagina
export const featuredProjects = projects.slice(0, 5);

// ------------------------------------------------------------
//  CREATORS
// ------------------------------------------------------------
export const creators = [
  {
    name: "Enzo Knol",
    handle: "@enzoknol",
    title: "Content creator & vlogger",
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
    work: [
      { brand: "L'Oréal Paris", creator: "Enzo Knol", views: "18M+", type: "Partnerships", gradient: "from-stone-800 to-stone-950", img: undefined, slug: undefined },
      { brand: "Revolut",       creator: "Enzo Knol", views: "15M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950",  img: undefined, slug: undefined },
      { brand: "Berg",          creator: "Enzo Knol", views: "12M+", type: "Video",        gradient: "from-stone-600 to-stone-900", img: undefined, slug: undefined },
      { brand: "BookBeat",      creator: "Enzo Knol", views: "6M+",  type: "Partnerships", gradient: "from-neutral-700 to-neutral-950", img: undefined, slug: undefined },
    ],
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
    work: [
      { brand: "L'Oréal Paris", creator: "Myron Koops", views: "18M+", type: "Partnerships", gradient: "from-stone-700 to-stone-950", img: undefined, slug: undefined },
      { brand: "Garmin",        creator: "Myron",        views: "10M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-900", img: undefined, slug: undefined },
      { brand: "Bud Holland",   creator: "Myron",        views: "4M+",  type: "Partnerships", gradient: "from-zinc-700 to-zinc-950", img: undefined, slug: undefined },
    ],
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
      { brand: "Podimo", creator: "De Bennies", type: "Podcast Partnership", gradient: "from-pink-900 to-zinc-950", img: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg", slug: "podimo-de-bennies" },
      { brand: "Air Up", creator: "De Bennies", type: "Brand Partnership",   gradient: "from-blue-900 to-zinc-950", img: "/images/Partnerships/de-bennies/air-up/cover.png" },
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
  slug: string;
  brand: string;
  creator: string;
  category: string;
  year: string;
  cover: string;
  hoverVideo?: string;
  alwaysPlay?: boolean;
  gradient: string;
  tagline?: string;           // korte pakkende zin boven de titel
  description: string;
  services: string[];
  stats?: CaseStat[];         // resultaten / kerncijfers
  platformLink?: string;      // link naar het platform (bijv. Podimo)
  platformLinkLabel?: string; // label voor de knop
  creatorProfiles?: { name: string; role: string; img: string }[];
  guests?: { name: string; img?: string }[];   // seizoensgasten — img optioneel
  gallery: GalleryItem[];
};

export const partnershipCases: PartnershipCase[] = [
  {
    slug: "podimo-de-bennies",
    brand: "Podimo",
    creator: "De Bennies",
    category: "Podcast Partnership",
    year: "2025 – 2026",
    cover: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg",
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
    slug: "air-up-de-bennies",
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
];

// ------------------------------------------------------------
//  STUDIO CASES (klikbare producties op de studio pagina)
// ------------------------------------------------------------
export type StudioCase = {
  slug: string;
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
  gallery: GalleryItem[];
};

export const studioCases: StudioCase[] = [
  {
    slug: "de-bennies-podcast",
    title: "De Bennies Podcast",
    subtitle: "Productie van begin tot eind",
    tags: ["Podcasts", "Graphic Design", "Marketing & Social"],
    year: "2022 – 2026",
    cover: "/images/Partnerships/de-bennies/podimo-s2/artwork.jpg",
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
