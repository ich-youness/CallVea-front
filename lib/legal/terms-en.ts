import type { LegalDoc } from "@/components/legal/legal-page";
import { CONTACT_EMAIL, DEMO_HOST, EFFECTIVE, PHONE, RECORDING_RETENTION_DAYS, ROUTES } from "./constants";

export const termsEn: LegalDoc = {
  lang: "en",
  title: "Terms of Use",
  description:
    "The terms that govern the use of callvea.com, the Callvea live demo and Callvea’s AI receptionist services. Governed by the laws of Ontario, Canada.",
  badges: ["Terms of Use", "Canada · Laws of Ontario"],
  meta: [`Effective: ${EFFECTIVE.en}`, `Applies to: callvea.com, ${DEMO_HOST} and our services`],
  intro:
    `These Terms of Use (“Terms”) govern your use of callvea.com, our live demo at ${DEMO_HOST} and the AI receptionist services provided by Callvea (“Callvea”, “we”, “us”), a business based in Ontario, Canada. By using our website, our demo or our services, you agree to these Terms. If you have accepted a written quote or signed a service agreement with us, that document prevails over these Terms where they differ.`,
  highlightsTitle: "At a glance",
  highlights: [
    "**For businesses.** Our services are designed for businesses, not consumers.",
    "**AI can make mistakes.** Verify important information; AI answers are not binding commitments.",
    "**Custom quotes, direct invoicing.** Prices in Canadian dollars, plus applicable taxes.",
    "**Ontario law.** These Terms are governed by the laws of Ontario and Canada.",
  ],
  sections: [
    {
      title: "Our services",
      blocks: [
        {
          type: "p",
          text: "Callvea designs and operates AI voice receptionists that answer calls, respond to questions, qualify callers and help book appointments for businesses. The features, setup and price of each service are set out in a written quote or service agreement. Our live demo lets you try a Callvea AI receptionist and is provided for evaluation only.",
        },
      ],
    },
    {
      title: "Eligibility",
      blocks: [
        {
          type: "p",
          text: "Our services are intended for businesses. You must be at least 18 years old and, if you act on behalf of an organization, authorized to accept these Terms for it.",
        },
      ],
    },
    {
      title: "Acceptable use",
      blocks: [
        { type: "p", text: "You agree not to:" },
        {
          type: "list",
          items: [
            "use our website, demo or services for any unlawful, fraudulent or deceptive purpose;",
            "make unsolicited telemarketing calls or send unsolicited messages in breach of the CRTC Unsolicited Telecommunications Rules, the National Do Not Call List rules or Canada’s Anti-Spam Legislation (CASL);",
            "impersonate any person or organization, or falsify caller ID information;",
            "try to extract our AI agents’ instructions, reverse engineer our systems or copy our agents;",
            "overload, disrupt or get around the limits of our website or demo, for example with automated calls or scripts;",
            "use offensive, harassing or abusive content.",
          ],
        },
        {
          type: "p",
          text: "Demo calls are limited in length and number. We may block access to the demo or our services in case of abuse.",
        },
      ],
    },
    {
      title: "AI-generated answers",
      blocks: [
        {
          type: "p",
          text: "Our receptionists are powered by artificial intelligence. Their answers are generated automatically and may be incomplete or inaccurate, and they are not legal, medical, financial or other professional advice. Information given by an AI receptionist, in particular about prices, does not create an offer or commitment binding on Callvea unless we confirm it in writing.",
        },
      ],
    },
    {
      title: "Quotes, invoicing and payment",
      blocks: [
        {
          type: "list",
          items: [
            "Pricing is provided by custom quote, based on your needs and call volume.",
            "Prices are in Canadian dollars (CAD), plus applicable sales taxes (such as GST/HST or QST) where we are required to charge them.",
            "We invoice our clients directly. Invoices are payable by Interac e-Transfer, bank transfer, cheque or another method we agree on, within the period stated on the invoice.",
            "Third-party usage costs, such as phone numbers or call minutes, are charged as set out in your quote.",
            "We may suspend services if an invoice remains unpaid after notice.",
            "Amounts paid are non-refundable, except as stated in your quote or required by law.",
          ],
        },
      ],
    },
    {
      title: "Your responsibilities as a client",
      blocks: [
        {
          type: "list",
          items: [
            "Provide accurate business information (hours, services, frequently asked questions) and keep it up to date. Your AI receptionist’s answers depend on it.",
            "Use our services in compliance with applicable law, including privacy, telemarketing and anti-spam laws.",
            "Tell your callers that calls are answered by an AI receptionist and may be recorded, and why. Under Canadian privacy law (PIPEDA and provincial equivalents), callers must be informed of a recording and its purpose. Your greeting can say, for example: “This call is answered by an AI assistant and may be recorded to help us serve you.”",
            "Obtain any consent required for outbound calls or text messages, in accordance with the CRTC rules and CASL.",
          ],
        },
      ],
    },
    {
      title: "Recordings and your data",
      blocks: [
        {
          type: "p",
          text: `You own your business data and your callers’ information. We process it on your behalf to provide the services, as described in our Privacy Policy. Call recordings and transcripts are kept for ${RECORDING_RETENTION_DAYS} days and then deleted, unless agreed otherwise in writing. When a service ends, we delete your data within 30 days, unless you ask us to export it first or the law requires us to keep it.`,
        },
      ],
    },
    {
      title: "Third-party services",
      blocks: [
        {
          type: "p",
          text: "Our services rely on third parties, such as AI voice platforms, telephone carriers, hosting providers and calendar services. We are not responsible for their outages, changes or failures, but we will work to restore service promptly.",
        },
      ],
    },
    {
      title: "Availability",
      blocks: [
        {
          type: "p",
          text: "We aim to keep our services available at all times but do not guarantee uninterrupted or error-free operation. We may carry out maintenance, with notice whenever possible.",
        },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "Our website, the configurations and instructions of our AI agents, our designs and the Callvea name and logo belong to Callvea. You may not copy or reuse them without our permission. You keep all rights to your content and grant us the right to use it only to provide our services to you.",
        },
      ],
    },
    {
      title: "Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Our website and live demo are provided “as is”. To the extent permitted by law, we make no warranties other than those expressly stated in your quote or service agreement.",
        },
      ],
    },
    {
      title: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the extent permitted by law, Callvea is not liable for indirect, special or consequential damages, including lost profits, missed calls or lost business opportunities. Our total liability for any claim relating to our services is limited to the amounts you paid us in the 12 months before the claim. Nothing in these Terms limits liability that cannot be limited under applicable law, such as liability for intentional or gross fault.",
        },
      ],
    },
    {
      title: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "You agree to compensate Callvea for any loss resulting from your unlawful use of our services, for example calls or messages made in breach of telemarketing or anti-spam laws.",
        },
      ],
    },
    {
      title: "Suspension and termination",
      blocks: [
        {
          type: "p",
          text: "Either party may end the services as set out in your quote or service agreement. We may suspend or end your access immediately if you breach these Terms, use our services unlawfully or fail to pay.",
        },
      ],
    },
    {
      title: "Governing law",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there. The courts of Ontario have jurisdiction over any dispute, without prejudice to any mandatory rights you may have under the laws of your province.",
        },
      ],
    },
    {
      title: "Language",
      blocks: [
        {
          type: "p",
          text: "These Terms are available in English and in French. Both versions are equally valid.",
        },
      ],
    },
    {
      title: "Changes to these Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms. The current version is always on this page with its effective date. Changes do not affect quotes or agreements already accepted, unless you agree to them.",
        },
      ],
    },
    {
      title: "Contact us",
      blocks: [
        {
          type: "list",
          items: [`**Email:** ${CONTACT_EMAIL}`, `**Phone:** ${PHONE}`, "**Location:** Ontario, Canada"],
        },
      ],
    },
  ],
  backLabel: "Back to Home",
  alternate: { href: ROUTES.terms.fr, label: "Version française" },
};
