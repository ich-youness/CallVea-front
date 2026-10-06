import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { ROUTES } from "@/lib/legal/constants";
import { privacyFr } from "@/lib/legal/privacy-fr";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Callvea",
  description: privacyFr.description,
  alternates: {
    canonical: ROUTES.privacy.fr,
    languages: { "en-CA": ROUTES.privacy.en, "fr-CA": ROUTES.privacy.fr },
  },
};

export default function ConfidentialitePage() {
  return <LegalPage doc={privacyFr} />;
}
