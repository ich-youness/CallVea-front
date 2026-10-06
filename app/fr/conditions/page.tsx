import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { ROUTES } from "@/lib/legal/constants";
import { termsFr } from "@/lib/legal/terms-fr";

export const metadata: Metadata = {
  title: "Conditions d’utilisation | Callvea",
  description: termsFr.description,
  alternates: {
    canonical: ROUTES.terms.fr,
    languages: { "en-CA": ROUTES.terms.en, "fr-CA": ROUTES.terms.fr },
  },
};

export default function ConditionsPage() {
  return <LegalPage doc={termsFr} />;
}
