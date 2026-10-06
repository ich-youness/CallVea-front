import type { LegalDoc } from "@/components/legal/legal-page";
import { CONTACT_EMAIL, DEMO_HOST, EFFECTIVE, PHONE, PRIVACY_EMAIL, RECORDING_RETENTION_DAYS, ROUTES } from "./constants";

export const privacyEn: LegalDoc = {
  lang: "en",
  title: "Privacy Policy",
  description:
    "How Callvea collects, uses, stores and protects personal information, and your rights under Canadian privacy law (PIPEDA and Quebec Law 25).",
  badges: ["Legal & Privacy", "Canada · PIPEDA & Quebec Law 25"],
  meta: [`Effective: ${EFFECTIVE.en}`, `Applies to: callvea.com and ${DEMO_HOST}`],
  intro:
    `Callvea (“Callvea”, “we”, “us”) builds AI voice receptionists for businesses and is based in Ontario, Canada. This policy explains what personal information we collect through callvea.com, our live demo at ${DEMO_HOST} and our services; how we use, store and protect it; and your rights under Canadian privacy law, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and, for Quebec residents, the Act respecting the protection of personal information in the private sector (Law 25).`,
  highlightsTitle: "At a glance",
  highlights: [
    "**We never sell your information.** We do not sell, rent or trade personal information.",
    `**Calls are recorded and handled by AI.** Before a demo call starts, the page tells you it is recorded and transcribed.`,
    `**Recordings are deleted after ${RECORDING_RETENTION_DAYS} days.** Call recordings and transcripts are not kept longer.`,
    "**Some data is processed in the United States.** Our hosting and AI providers are located there (see section 6).",
  ],
  sections: [
    {
      title: "Who is responsible",
      blocks: [
        {
          type: "p",
          text: `Callvea is responsible for the personal information under its control. We have designated a **Privacy Officer** who is accountable for our compliance with this policy and with Canadian privacy law. You can reach the Privacy Officer at ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      title: "Information we collect",
      blocks: [
        {
          type: "list",
          items: [
            "**Demo and quote requests:** when you fill in the form on callvea.com, your name, work email, phone number, company name, website, industry, monthly call volume, the needs you select and any notes you add.",
            `**Live demo calls:** when you talk to our AI receptionist at ${DEMO_HOST}, the audio of the call, a recording, a written transcript and the details the AI extracts from the conversation (for example your name, business, email, call volume and whether you would like a follow-up call). We also keep technical details such as the time and length of the call.`,
            "**Client services:** when we set up an AI receptionist for your business, your business information (hours, services, frequently asked questions, contact details) and the calls your receptionist handles, including recordings, transcripts, caller phone numbers and the details callers provide.",
            "**Technical information:** our servers log basic technical data such as your IP address, browser type and the pages requested. We use it to keep our services secure, prevent abuse (for example, limiting the number of demo calls per visitor) and fix problems.",
            "**Business and payment records:** we invoice our clients directly. We keep invoices and payment records, but we never collect or store credit card numbers.",
          ],
        },
      ],
    },
    {
      title: "How we use your information",
      blocks: [
        {
          type: "list",
          items: [
            "To answer your questions, prepare quotes and follow up on demo requests.",
            "To run our live demo and deliver our AI receptionist services.",
            "To produce call summaries and lead details for you or for the business you called.",
            "To review transcripts and improve the accuracy of our AI receptionists.",
            "To keep our services secure and prevent fraud and abuse.",
            "For invoicing, accounting and our legal obligations.",
          ],
        },
        {
          type: "p",
          text: "We only use your information for these purposes. If we want to use it for a new purpose, we will ask for your consent first.",
        },
        {
          type: "p",
          text: "We only send commercial electronic messages, such as promotional emails, with your consent, as required by Canada’s Anti-Spam Legislation (CASL). Every such message includes a simple way to unsubscribe.",
        },
      ],
    },
    {
      title: "Consent",
      blocks: [
        {
          type: "p",
          text: "We collect personal information with your consent. By submitting our form, or by starting a demo call after the recording notice, you consent to the collection and use described in this policy. You may withdraw your consent at any time by contacting us, subject to legal or contractual restrictions. Withdrawing consent may mean we can no longer provide some services.",
        },
      ],
    },
    {
      title: "AI and automated processing",
      blocks: [
        {
          type: "p",
          text: "Our receptionists are AI agents: the voice you hear on a demo or client call is generated by software, and its answers are produced by an AI language model. AI can make mistakes. We do not use automated processing alone to make decisions about you that have legal or similarly significant effects.",
        },
      ],
    },
    {
      title: "Service providers and storage outside Canada",
      blocks: [
        {
          type: "p",
          text: "We rely on the following service providers to operate Callvea. They may only use your information to provide services to us and are required to protect it.",
        },
        {
          type: "list",
          items: [
            "**Hostinger:** hosts our website and live demo (servers in the United States).",
            "**Retell AI:** the voice AI platform that runs our receptionists; processes call audio, recordings and transcripts (United States).",
            "**Anthropic:** provides the AI language model that generates our receptionists’ responses, through Retell AI (United States).",
            "**Web3Forms:** delivers the submissions of our website form to our inbox (outside Canada).",
            "**Telephony providers, such as Twilio:** connect phone lines to our AI receptionists, when a phone line is set up for a client (United States).",
            "**Our email provider:** hosts our business email.",
          ],
        },
        {
          type: "notice",
          text: "**Your information may be stored and processed outside Canada,** mainly in the United States. While there, it is subject to the laws of that country and may be accessible to its courts, law enforcement and national security authorities. Before communicating the personal information of Quebec residents outside Quebec, we assess whether it will be adequately protected, as required by Law 25.",
        },
        {
          type: "p",
          text: "We may also disclose personal information where required or permitted by law, for example in response to a court order. We do not sell, rent or trade personal information.",
        },
      ],
    },
    {
      title: "Information we handle for our clients",
      blocks: [
        {
          type: "p",
          text: "When Callvea answers calls for a business, that business is responsible for its callers’ personal information, and we process it on the business’s behalf and according to its instructions. If you called a business that uses Callvea, please contact that business about your information. Our clients are responsible for telling their callers that calls are handled by an AI receptionist and may be recorded.",
        },
      ],
    },
    {
      title: "How long we keep information",
      blocks: [
        {
          type: "list",
          items: [
            `**Call recordings and transcripts** (demo and client calls): ${RECORDING_RETENTION_DAYS} days, then deleted.`,
            "**Lead details** from demo calls and form submissions: as long as needed to follow up with you, and no longer than 24 months after our last contact.",
            "**Client business information:** for as long as we provide services, then deleted within 30 days after the service ends, unless the client asks for earlier deletion.",
            "**Invoices and accounting records:** 6 years, as required by Canadian tax law.",
            "**Server logs:** only as long as needed for security and troubleshooting.",
          ],
        },
      ],
    },
    {
      title: "How we protect information",
      blocks: [
        {
          type: "p",
          text: "We use safeguards appropriate to the sensitivity of the information, including:",
        },
        {
          type: "list",
          items: [
            "Encrypted connections (HTTPS) for our website, live demo and services.",
            "Secret keys and credentials kept on our servers, never in your browser.",
            "Access to recordings, transcripts and client accounts limited to the people who need it.",
            "Usage limits on our live demo to prevent abuse.",
          ],
        },
        {
          type: "p",
          text: "No method of transmission or storage is completely secure, but we work to protect your information and review our practices regularly.",
        },
      ],
    },
    {
      title: "Privacy incidents",
      blocks: [
        {
          type: "p",
          text: "If a breach of security safeguards involving your personal information creates a real risk of significant harm, we will notify you and report it to the Office of the Privacy Commissioner of Canada, as required by PIPEDA. For Quebec residents, we also notify the Commission d’accès à l’information du Québec when a confidentiality incident presents a risk of serious injury. We keep a record of all privacy incidents.",
        },
      ],
    },
    {
      title: "Your rights",
      blocks: [
        {
          type: "list",
          items: [
            "**Access:** ask whether we hold personal information about you and obtain a copy.",
            "**Correction:** ask us to correct inaccurate or incomplete information.",
            "**Withdrawal of consent:** withdraw your consent to our use of your information.",
            "**Deletion:** ask us to delete your information when we no longer need it.",
            "**Quebec residents** may also request a copy of their information in a structured, commonly used technological format (portability), ask us to stop disseminating or to de-index their information in certain cases, and be informed of any decision based exclusively on automated processing.",
          ],
        },
        {
          type: "p",
          text: `Send your request to ${PRIVACY_EMAIL}. We respond within 30 days, free of charge, and may need to verify your identity first. If we cannot fulfil a request, for example because the law requires us to keep certain records, we will explain why.`,
        },
      ],
    },
    {
      title: "Complaints",
      blocks: [
        {
          type: "p",
          text: "If you have a concern, please contact our Privacy Officer first so we can try to resolve it. You may also file a complaint with the Office of the Privacy Commissioner of Canada (priv.gc.ca) or, if you live in Quebec, with the Commission d’accès à l’information du Québec (cai.gouv.qc.ca).",
        },
      ],
    },
    {
      title: "Cookies",
      blocks: [
        {
          type: "p",
          text: "callvea.com and our live demo do not use advertising or tracking cookies, and we do not use third-party analytics. Your browser may store small technical settings needed for the pages to work.",
        },
      ],
    },
    {
      title: "Children",
      blocks: [
        {
          type: "p",
          text: "Our services are intended for businesses. They are not directed to children, and we do not knowingly collect personal information from anyone under 18.",
        },
      ],
    },
    {
      title: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this policy. The current version is always on this page with its effective date, and we will notify our clients of significant changes.",
        },
      ],
    },
    {
      title: "Contact us",
      blocks: [
        {
          type: "list",
          items: [
            `**Privacy Officer:** ${PRIVACY_EMAIL}`,
            `**General inquiries:** ${CONTACT_EMAIL}`,
            `**Phone:** ${PHONE}`,
            "**Location:** Ontario, Canada",
          ],
        },
      ],
    },
  ],
  backLabel: "Back to Home",
  alternate: { href: ROUTES.privacy.fr, label: "Version française" },
};
