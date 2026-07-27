import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Samenwerken met Concess",
  description:
    "Wil je samenwerken met Concess, Enzo Knol, Myron Koops of De Bennies? Neem contact op met ons social agency voor influencer campagnes, brand partnerships en content productie.",
  keywords: [
    "contact Concess",
    "samenwerken Enzo Knol",
    "samenwerken Myron Koops",
    "influencer samenwerking aanvragen",
    "brand partnership influencer Nederland",
    "boeken social agency",
  ],
  alternates: { canonical: "https://concess.nl/contact" },
  openGraph: {
    title: "Contact | Samenwerken met Concess",
    description:
      "Neem contact op voor influencer campagnes, brand partnerships en content productie.",
    url: "https://concess.nl/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
