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
    type: "Video",
    img: "/images/De-bennies-concess.jpg",
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
    title: "Nederland's grootste YouTuber",
    followers: "7,9M+",
    bio: "Enzo bereikt dagelijks miljoenen kijkers met authentieke lifestyle content. Van gaming tot family — zijn publiek vertrouwt hem volledig, en dat vertaalt zich in campagneresultaten die voor zich spreken.",
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
    img: "/images/enzo_banner.png",
    work: [
      { brand: "L'Oréal Paris", creator: "Enzo Knol", views: "18M+", type: "Partnerships", gradient: "from-stone-800 to-stone-950" },
      { brand: "Revolut",       creator: "Enzo Knol", views: "15M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950" },
      { brand: "Berg",          creator: "Enzo Knol", views: "12M+", type: "Video",        gradient: "from-stone-600 to-stone-900" },
      { brand: "BookBeat",      creator: "Enzo Knol", views: "6M+",  type: "Partnerships", gradient: "from-neutral-700 to-neutral-950" },
    ],
  },
  {
    name: "Myron Koops",
    handle: "@myronkoops",
    title: "Visueel storyteller & lifestyle creator",
    followers: "2,1M+",
    bio: "Myron combineert lifestyle, mode en travel in een strak visueel verhaal. Zijn content voelt als editorial fotografie — merken die met hem werken stijgen direct in perceptie bij zijn publiek.",
    platforms: ["YouTube", "Instagram", "TikTok", "Snapchat"],
    platformStats: [
      { platform: "YouTube", followers: "142K", url: "https://www.youtube.com/@kpactive" },
      { platform: "Instagram", followers: "591K", url: "https://www.instagram.com/MyronKoops/" },
      { platform: "TikTok", followers: "1M", url: "https://www.tiktok.com/@myronkoops" },
      { platform: "Snapchat", followers: "427K", url: "https://www.snapchat.com/@myronkoops" },
    ],
    gradient: "from-zinc-600 via-zinc-800 to-zinc-950",
    accentColor: "#B8A488",
    img: "/images/Myron_banner.png",
    work: [
      { brand: "L'Oréal Paris", creator: "Myron Koops", views: "18M+", type: "Partnerships", gradient: "from-stone-700 to-stone-950" },
      { brand: "Garmin",        creator: "Myron",        views: "10M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-900" },
      { brand: "Bud Holland",   creator: "Myron",        views: "4M+",  type: "Partnerships", gradient: "from-zinc-700 to-zinc-950" },
    ],
  },
  {
    name: "De Bennies",
    handle: "@debennies",
    title: "Het energiekste duo van NL",
    followers: "373K+",
    bio: "Brett en Joey, beter bekend als De Bennies, zijn het meest herkenbare duo op Nederlands YouTube. Hun loyale fanbase volgt ze op elk platform — en deelt alles wat ze aanraken.",
    platforms: ["Instagram", "TikTok", "Podimo", "Spotify"],
    platformStats: [
      { platform: "Instagram", followers: "76,5K", url: "https://www.instagram.com/debennies/" },
      { platform: "TikTok", followers: "186K", url: "https://www.tiktok.com/@debennies" },
      { platform: "Podimo", followers: "30K", url: "https://podimo.com/nl/shows/de-bennies-2" },
      { platform: "Spotify", followers: "62K", url: "https://open.spotify.com/show/3oiLRw0TiQySEInqNus2ik" },
    ],
    gradient: "from-neutral-600 via-neutral-800 to-neutral-950",
    accentColor: "#9E8B72",
    img: "/images/bennies_banner.png",
    work: [
      { brand: "Air Up",             creator: "De Bennies", views: "8M+", type: "Partnerships", gradient: "from-zinc-600 to-zinc-900" },
      { brand: "Emma",               creator: "De Bennies", views: "5M+", type: "Video",        gradient: "from-neutral-800 to-neutral-950" },
      { brand: "De Bennies Podcast", creator: "De Bennies", views: "2M+", type: "Video",        gradient: "from-zinc-800 to-zinc-950" },
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
  storyTitle: "Niet de meeste campagnes — de beste.",
  storyParagraphs: [
    "Concess begon met één simpele overtuiging: de beste campagnes zijn niet de luidste, maar de meest authentieke. Wij verbinden merken aan creators die écht passen — en zorgen dat die samenwerking voelt als echte content, niet als advertentie.",
    "Vanuit Nederland werken wij samen met de grootste creators van het land. Van exclusief creator management tot full-service brand partnerships en studio productie — wij zijn de verbindende schakel tussen talent en merken die willen groeien.",
    "Geen tussenpersonen. Geen overhead. Gewoon mensen die geloven in wat ze maken.",
  ],
  numbers: [
    { value: "50+",  label: "Brand deals" },
    { value: "150M+", label: "Totale views" },
    { value: "3",    label: "Exclusieve creators" },
    { value: "10+",  label: "Jaar ervaring" },
  ],
};
