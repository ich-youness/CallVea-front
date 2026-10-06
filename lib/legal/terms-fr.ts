import type { LegalDoc } from "@/components/legal/legal-page";
import { CONTACT_EMAIL, DEMO_HOST, EFFECTIVE, PHONE, RECORDING_RETENTION_DAYS, ROUTES } from "./constants";

const NB = " "; // espace insécable avant les deux-points et dans les guillemets

export const termsFr: LegalDoc = {
  lang: "fr",
  title: "Conditions d’utilisation",
  description:
    "Les conditions qui régissent l’utilisation de callvea.com, de la démonstration en direct de Callvea et de ses services de réceptionniste IA. Régies par les lois de l’Ontario, Canada.",
  badges: ["Conditions d’utilisation", "Canada · Lois de l’Ontario"],
  meta: [`En vigueur${NB}: ${EFFECTIVE.fr}`, `S’applique à${NB}: callvea.com, ${DEMO_HOST} et nos services`],
  intro:
    `Les présentes conditions d’utilisation («${NB}Conditions${NB}») régissent votre utilisation de callvea.com, de notre démonstration en direct sur ${DEMO_HOST} et des services de réceptionniste IA fournis par Callvea («${NB}Callvea${NB}», «${NB}nous${NB}»), une entreprise établie en Ontario, au Canada. En utilisant notre site Web, notre démonstration ou nos services, vous acceptez les présentes Conditions. Si vous avez accepté une soumission écrite ou signé une entente de services avec nous, ce document l’emporte sur les présentes Conditions en cas de divergence.`,
  highlightsTitle: "En bref",
  highlights: [
    `**Pour les entreprises.** Nos services sont conçus pour les entreprises, et non pour les consommateurs.`,
    `**L’IA peut se tromper.** Vérifiez les renseignements importants${NB}; les réponses de l’IA ne constituent pas des engagements.`,
    `**Soumissions sur mesure, facturation directe.** Prix en dollars canadiens, taxes applicables en sus.`,
    `**Droit ontarien.** Les présentes Conditions sont régies par les lois de l’Ontario et du Canada.`,
  ],
  sections: [
    {
      title: "Nos services",
      blocks: [
        {
          type: "p",
          text: "Callvea conçoit et exploite des réceptionnistes vocales IA qui répondent aux appels, répondent aux questions, qualifient les appelants et facilitent la prise de rendez-vous pour les entreprises. Les fonctionnalités, la configuration et le prix de chaque service sont précisés dans une soumission écrite ou une entente de services. Notre démonstration en direct vous permet d’essayer une réceptionniste IA de Callvea et est offerte à des fins d’évaluation seulement.",
        },
      ],
    },
    {
      title: "Admissibilité",
      blocks: [
        {
          type: "p",
          text: "Nos services sont destinés aux entreprises. Vous devez avoir au moins 18 ans et, si vous agissez au nom d’une organisation, être autorisé à accepter les présentes Conditions pour elle.",
        },
      ],
    },
    {
      title: "Utilisation acceptable",
      blocks: [
        { type: "p", text: `Vous vous engagez à ne pas${NB}:` },
        {
          type: "list",
          items: [
            "utiliser notre site Web, notre démonstration ou nos services à des fins illégales, frauduleuses ou trompeuses;",
            "faire des appels de télémarketing non sollicités ou envoyer des messages non sollicités en contravention des Règles sur les télécommunications non sollicitées du CRTC, des règles de la Liste nationale de numéros de télécommunication exclus ou de la Loi canadienne anti-pourriel (LCAP);",
            "usurper l’identité d’une personne ou d’une organisation, ou falsifier l’affichage du numéro de l’appelant;",
            "tenter d’extraire les instructions de nos agents d’IA, de faire de l’ingénierie inverse de nos systèmes ou de copier nos agents;",
            "surcharger, perturber ou contourner les limites de notre site Web ou de notre démonstration, par exemple au moyen d’appels ou de scripts automatisés;",
            "utiliser du contenu offensant, harcelant ou abusif.",
          ],
        },
        {
          type: "p",
          text: "Les appels de démonstration sont limités en durée et en nombre. Nous pouvons bloquer l’accès à la démonstration ou à nos services en cas d’abus.",
        },
      ],
    },
    {
      title: "Réponses générées par l’IA",
      blocks: [
        {
          type: "p",
          text: "Nos réceptionnistes sont propulsées par l’intelligence artificielle. Leurs réponses sont générées automatiquement et peuvent être incomplètes ou inexactes; elles ne constituent pas des conseils juridiques, médicaux, financiers ou autres conseils professionnels. Les renseignements fournis par une réceptionniste IA, notamment au sujet des prix, ne constituent pas une offre ni un engagement liant Callvea, sauf confirmation écrite de notre part.",
        },
      ],
    },
    {
      title: "Soumissions, facturation et paiement",
      blocks: [
        {
          type: "list",
          items: [
            "Les prix sont établis par soumission sur mesure, selon vos besoins et votre volume d’appels.",
            "Les prix sont en dollars canadiens (CAD), taxes de vente applicables en sus (comme la TPS/TVH ou la TVQ) lorsque nous sommes tenus de les percevoir.",
            "Nous facturons directement nos clients. Les factures sont payables par virement Interac, virement bancaire, chèque ou tout autre mode convenu, dans le délai indiqué sur la facture.",
            "Les coûts d’utilisation de tiers, comme les numéros de téléphone ou les minutes d’appel, sont facturés selon votre soumission.",
            "Nous pouvons suspendre les services si une facture demeure impayée après un avis.",
            "Les montants payés ne sont pas remboursables, sauf indication contraire dans votre soumission ou si la loi l’exige.",
          ],
        },
      ],
    },
    {
      title: "Vos responsabilités en tant que client",
      blocks: [
        {
          type: "list",
          items: [
            "Fournir des renseignements exacts sur votre entreprise (heures d’ouverture, services, foire aux questions) et les tenir à jour. Les réponses de votre réceptionniste IA en dépendent.",
            "Utiliser nos services conformément aux lois applicables, notamment en matière de protection des renseignements personnels, de télémarketing et de pourriels.",
            `Informer vos appelants que les appels sont traités par une réceptionniste IA et peuvent être enregistrés, et pourquoi. En vertu des lois canadiennes sur la protection des renseignements personnels (LPRPDE et lois provinciales équivalentes), les appelants doivent être informés de l’enregistrement et de son but. Votre message d’accueil peut dire, par exemple${NB}: «${NB}Cet appel est traité par une assistante IA et peut être enregistré afin de mieux vous servir.${NB}»`,
            "Obtenir tout consentement requis pour les appels ou messages texte sortants, conformément aux règles du CRTC et à la LCAP.",
          ],
        },
      ],
    },
    {
      title: "Enregistrements et données",
      blocks: [
        {
          type: "p",
          text: `Vous êtes propriétaire des données de votre entreprise et des renseignements de vos appelants. Nous les traitons pour votre compte afin de fournir les services, comme le décrit notre Politique de confidentialité. Les enregistrements et transcriptions d’appels sont conservés ${RECORDING_RETENTION_DAYS}${NB}jours, puis supprimés, sauf entente écrite contraire. À la fin des services, nous supprimons vos données dans un délai de 30${NB}jours, à moins que vous ne demandiez d’abord leur exportation ou que la loi ne nous oblige à les conserver.`,
        },
      ],
    },
    {
      title: "Services de tiers",
      blocks: [
        {
          type: "p",
          text: "Nos services reposent sur des tiers, comme des plateformes d’IA vocale, des fournisseurs de téléphonie, des hébergeurs et des services de calendrier. Nous ne sommes pas responsables de leurs pannes, modifications ou défaillances, mais nous nous efforcerons de rétablir le service rapidement.",
        },
      ],
    },
    {
      title: "Disponibilité",
      blocks: [
        {
          type: "p",
          text: "Nous visons à maintenir nos services disponibles en tout temps, mais ne garantissons pas un fonctionnement ininterrompu ou exempt d’erreurs. Nous pouvons effectuer de l’entretien, avec un préavis lorsque c’est possible.",
        },
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        {
          type: "p",
          text: "Notre site Web, les configurations et instructions de nos agents d’IA, nos conceptions ainsi que le nom et le logo Callvea appartiennent à Callvea. Vous ne pouvez pas les copier ni les réutiliser sans notre autorisation. Vous conservez tous les droits sur votre contenu et nous accordez le droit de l’utiliser uniquement pour vous fournir nos services.",
        },
      ],
    },
    {
      title: "Exclusion de garanties",
      blocks: [
        {
          type: "p",
          text: `Notre site Web et notre démonstration en direct sont fournis «${NB}tels quels${NB}». Dans la mesure permise par la loi, nous n’offrons aucune garantie autre que celles expressément prévues dans votre soumission ou votre entente de services.`,
        },
      ],
    },
    {
      title: "Limitation de responsabilité",
      blocks: [
        {
          type: "p",
          text: "Dans la mesure permise par la loi, Callvea n’est pas responsable des dommages indirects, spéciaux ou consécutifs, y compris la perte de profits, les appels manqués ou les occasions d’affaires perdues. Notre responsabilité totale pour toute réclamation liée à nos services est limitée aux sommes que vous nous avez versées au cours des 12 mois précédant la réclamation. Aucune disposition des présentes Conditions ne limite une responsabilité qui ne peut l’être en vertu de la loi applicable, comme la responsabilité pour faute intentionnelle ou faute lourde.",
        },
      ],
    },
    {
      title: "Indemnisation",
      blocks: [
        {
          type: "p",
          text: "Vous acceptez d’indemniser Callvea de toute perte découlant d’une utilisation illégale de nos services de votre part, par exemple des appels ou des messages faits en contravention des lois sur le télémarketing ou les pourriels.",
        },
      ],
    },
    {
      title: "Suspension et résiliation",
      blocks: [
        {
          type: "p",
          text: "Chaque partie peut mettre fin aux services selon les modalités de votre soumission ou de votre entente de services. Nous pouvons suspendre ou résilier votre accès immédiatement si vous enfreignez les présentes Conditions, utilisez nos services illégalement ou ne payez pas.",
        },
      ],
    },
    {
      title: "Droit applicable",
      blocks: [
        {
          type: "p",
          text: "Les présentes Conditions sont régies par les lois de la province de l’Ontario et les lois fédérales du Canada qui s’y appliquent. Les tribunaux de l’Ontario ont compétence pour tout différend, sous réserve des droits impératifs que vous pourriez avoir en vertu des lois de votre province.",
        },
      ],
    },
    {
      title: "Langue",
      blocks: [
        {
          type: "p",
          text: "Les présentes Conditions sont offertes en français et en anglais. Les deux versions ont la même valeur.",
        },
      ],
    },
    {
      title: "Modifications des présentes Conditions",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour les présentes Conditions. La version en vigueur se trouve toujours sur cette page avec sa date d’entrée en vigueur. Les modifications ne touchent pas les soumissions ni les ententes déjà acceptées, sauf si vous y consentez.",
        },
      ],
    },
    {
      title: "Nous joindre",
      blocks: [
        {
          type: "list",
          items: [`**Courriel${NB}:** ${CONTACT_EMAIL}`, `**Téléphone${NB}:** ${PHONE}`, `**Emplacement${NB}:** Ontario, Canada`],
        },
      ],
    },
  ],
  backLabel: "Retour à l’accueil",
  alternate: { href: ROUTES.terms.en, label: "English version" },
};
