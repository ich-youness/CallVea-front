import type { LegalDoc } from "@/components/legal/legal-page";
import { CONTACT_EMAIL, DEMO_HOST, EFFECTIVE, PHONE, PRIVACY_EMAIL, RECORDING_RETENTION_DAYS, ROUTES } from "./constants";

const NB = " "; // espace insécable avant les deux-points et dans les guillemets

export const privacyFr: LegalDoc = {
  lang: "fr",
  title: "Politique de confidentialité",
  description:
    "Comment Callvea recueille, utilise, conserve et protège les renseignements personnels, et vos droits en vertu des lois canadiennes (LPRPDE et Loi 25 du Québec).",
  badges: ["Juridique et confidentialité", "Canada · LPRPDE et Loi 25"],
  meta: [`En vigueur${NB}: ${EFFECTIVE.fr}`, `S’applique à${NB}: callvea.com et ${DEMO_HOST}`],
  intro:
    `Callvea («${NB}Callvea${NB}», «${NB}nous${NB}») conçoit des réceptionnistes vocales propulsées par l’intelligence artificielle (IA) pour les entreprises et est établie en Ontario, au Canada. La présente politique explique quels renseignements personnels nous recueillons sur callvea.com, dans notre démonstration en direct sur ${DEMO_HOST} et dans le cadre de nos services, comment nous les utilisons, les conservons et les protégeons, ainsi que vos droits en vertu des lois canadiennes sur la protection des renseignements personnels, notamment la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) et, pour les résidents du Québec, la Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25).`,
  highlightsTitle: "En bref",
  highlights: [
    `**Nous ne vendons jamais vos renseignements.** Nous ne vendons, ne louons ni n’échangeons de renseignements personnels.`,
    `**Les appels sont enregistrés et traités par l’IA.** Avant le début d’un appel de démonstration, la page vous indique qu’il est enregistré et transcrit.`,
    `**Les enregistrements sont supprimés après ${RECORDING_RETENTION_DAYS}${NB}jours.** Les enregistrements et transcriptions d’appels ne sont pas conservés plus longtemps.`,
    `**Certaines données sont traitées aux États-Unis.** Nos fournisseurs d’hébergement et d’IA y sont situés (voir la section 6).`,
  ],
  sections: [
    {
      title: "Personne responsable",
      blocks: [
        {
          type: "p",
          text: `Callvea est responsable des renseignements personnels dont elle a la gestion. Nous avons désigné un **responsable de la protection des renseignements personnels**, qui veille au respect de la présente politique et des lois canadiennes en la matière. Vous pouvez le joindre à l’adresse ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      title: "Renseignements que nous recueillons",
      blocks: [
        {
          type: "list",
          items: [
            `**Demandes de démonstration et de soumission${NB}:** lorsque vous remplissez le formulaire de callvea.com, vos nom, adresse courriel professionnelle, numéro de téléphone, nom d’entreprise, site Web, secteur d’activité, volume d’appels mensuel, les besoins que vous sélectionnez et vos commentaires.`,
            `**Appels de démonstration${NB}:** lorsque vous parlez à notre réceptionniste IA sur ${DEMO_HOST}, l’audio de l’appel, son enregistrement, sa transcription écrite et les renseignements que l’IA en extrait (par exemple vos nom, entreprise, adresse courriel, volume d’appels et votre souhait d’être rappelé). Nous conservons aussi des données techniques comme l’heure et la durée de l’appel.`,
            `**Services aux clients${NB}:** lorsque nous configurons une réceptionniste IA pour votre entreprise, les renseignements sur votre entreprise (heures d’ouverture, services, foire aux questions, coordonnées) et les appels que traite votre réceptionniste, y compris les enregistrements, les transcriptions, les numéros de téléphone des appelants et les renseignements qu’ils fournissent.`,
            `**Renseignements techniques${NB}:** nos serveurs consignent des données techniques de base, comme votre adresse IP, votre type de navigateur et les pages demandées. Nous les utilisons pour assurer la sécurité de nos services, prévenir les abus (par exemple en limitant le nombre d’appels de démonstration par visiteur) et corriger les problèmes.`,
            `**Dossiers commerciaux et de paiement${NB}:** nous facturons directement nos clients. Nous conservons les factures et les dossiers de paiement, mais nous ne recueillons ni ne conservons jamais de numéros de carte de crédit.`,
          ],
        },
      ],
    },
    {
      title: "Utilisation de vos renseignements",
      blocks: [
        {
          type: "list",
          items: [
            "Pour répondre à vos questions, préparer des soumissions et faire le suivi des demandes de démonstration.",
            "Pour offrir notre démonstration en direct et fournir nos services de réceptionniste IA.",
            "Pour produire des résumés d’appels et des renseignements de prospection pour vous ou pour l’entreprise que vous avez appelée.",
            "Pour examiner des transcriptions et améliorer la précision de nos réceptionnistes IA.",
            "Pour assurer la sécurité de nos services et prévenir la fraude et les abus.",
            "Pour la facturation, la comptabilité et le respect de nos obligations légales.",
          ],
        },
        {
          type: "p",
          text: "Nous n’utilisons vos renseignements qu’à ces fins. Si nous souhaitons les utiliser à une nouvelle fin, nous vous demanderons d’abord votre consentement.",
        },
        {
          type: "p",
          text: "Nous n’envoyons de messages électroniques commerciaux, comme des courriels promotionnels, qu’avec votre consentement, conformément à la Loi canadienne anti-pourriel (LCAP). Chacun de ces messages comprend un moyen simple de vous désabonner.",
        },
      ],
    },
    {
      title: "Consentement",
      blocks: [
        {
          type: "p",
          text: "Nous recueillons les renseignements personnels avec votre consentement. En soumettant notre formulaire, ou en commençant un appel de démonstration après l’avis d’enregistrement, vous consentez à la collecte et à l’utilisation décrites dans la présente politique. Vous pouvez retirer votre consentement en tout temps en communiquant avec nous, sous réserve de restrictions légales ou contractuelles. Le retrait de votre consentement peut nous empêcher de fournir certains services.",
        },
      ],
    },
    {
      title: "IA et traitement automatisé",
      blocks: [
        {
          type: "p",
          text: `Nos réceptionnistes sont des agents d’IA${NB}: la voix que vous entendez lors d’un appel de démonstration ou d’un appel client est générée par un logiciel, et ses réponses sont produites par un modèle de langage d’IA. L’IA peut commettre des erreurs. Nous ne prenons aucune décision ayant des effets juridiques ou des effets importants similaires à votre égard fondée exclusivement sur un traitement automatisé.`,
        },
      ],
    },
    {
      title: "Fournisseurs de services et conservation hors du Canada",
      blocks: [
        {
          type: "p",
          text: "Nous faisons appel aux fournisseurs de services suivants pour exploiter Callvea. Ils ne peuvent utiliser vos renseignements que pour nous fournir leurs services et sont tenus de les protéger.",
        },
        {
          type: "list",
          items: [
            `**Hostinger${NB}:** héberge notre site Web et notre démonstration en direct (serveurs aux États-Unis).`,
            `**Retell AI${NB}:** la plateforme d’IA vocale qui fait fonctionner nos réceptionnistes; traite l’audio, les enregistrements et les transcriptions des appels (États-Unis).`,
            `**Anthropic${NB}:** fournit, par l’intermédiaire de Retell AI, le modèle de langage d’IA qui génère les réponses de nos réceptionnistes (États-Unis).`,
            `**Web3Forms${NB}:** achemine les soumissions du formulaire de notre site Web vers notre boîte de réception (hors du Canada).`,
            `**Fournisseurs de téléphonie, comme Twilio${NB}:** relient des lignes téléphoniques à nos réceptionnistes IA lorsqu’une ligne est configurée pour un client (États-Unis).`,
            `**Notre fournisseur de courriel${NB}:** héberge notre courriel d’entreprise.`,
          ],
        },
        {
          type: "notice",
          text: "**Vos renseignements peuvent être conservés et traités hors du Canada,** principalement aux États-Unis. Ils y sont alors assujettis aux lois de ce pays et peuvent être accessibles à ses tribunaux, à ses autorités policières et à ses autorités de sécurité nationale. Avant de communiquer les renseignements personnels de résidents du Québec à l’extérieur du Québec, nous évaluons s’ils bénéficieront d’une protection adéquate, comme l’exige la Loi 25.",
        },
        {
          type: "p",
          text: "Nous pouvons aussi communiquer des renseignements personnels lorsque la loi l’exige ou le permet, par exemple en réponse à une ordonnance d’un tribunal. Nous ne vendons, ne louons ni n’échangeons de renseignements personnels.",
        },
      ],
    },
    {
      title: "Renseignements traités pour nos clients",
      blocks: [
        {
          type: "p",
          text: "Lorsque Callvea répond aux appels d’une entreprise, cette entreprise est responsable des renseignements personnels de ses appelants, que nous traitons pour son compte et selon ses instructions. Si vous avez appelé une entreprise qui utilise Callvea, veuillez communiquer avec elle au sujet de vos renseignements. Nos clients doivent informer leurs appelants que les appels sont traités par une réceptionniste IA et peuvent être enregistrés.",
        },
      ],
    },
    {
      title: "Durée de conservation",
      blocks: [
        {
          type: "list",
          items: [
            `**Enregistrements et transcriptions d’appels** (démonstrations et appels clients)${NB}: ${RECORDING_RETENTION_DAYS}${NB}jours, puis suppression.`,
            `**Renseignements de prospection** issus des appels de démonstration et du formulaire${NB}: le temps nécessaire pour faire un suivi avec vous, et au plus 24${NB}mois après notre dernier contact.`,
            `**Renseignements sur les entreprises clientes${NB}:** pendant la durée des services, puis suppression dans les 30${NB}jours suivant la fin des services, à moins que le client ne demande une suppression plus rapide.`,
            `**Factures et dossiers comptables${NB}:** 6${NB}ans, comme l’exigent les lois fiscales canadiennes.`,
            `**Journaux des serveurs${NB}:** seulement le temps nécessaire à la sécurité et au dépannage.`,
          ],
        },
      ],
    },
    {
      title: "Protection des renseignements",
      blocks: [
        {
          type: "p",
          text: `Nous utilisons des mesures de sécurité adaptées à la sensibilité des renseignements, notamment${NB}:`,
        },
        {
          type: "list",
          items: [
            "Des connexions chiffrées (HTTPS) pour notre site Web, notre démonstration et nos services.",
            "Des clés secrètes et identifiants conservés sur nos serveurs, jamais dans votre navigateur.",
            "Un accès aux enregistrements, aux transcriptions et aux comptes clients limité aux personnes qui en ont besoin.",
            "Des limites d’utilisation de notre démonstration pour prévenir les abus.",
          ],
        },
        {
          type: "p",
          text: "Aucune méthode de transmission ou de conservation n’est entièrement sécuritaire, mais nous nous efforçons de protéger vos renseignements et revoyons régulièrement nos pratiques.",
        },
      ],
    },
    {
      title: "Incidents de confidentialité",
      blocks: [
        {
          type: "p",
          text: "Si une atteinte aux mesures de sécurité visant vos renseignements personnels présente un risque réel de préjudice grave, nous vous en aviserons et la signalerons au Commissariat à la protection de la vie privée du Canada, comme l’exige la LPRPDE. Pour les résidents du Québec, nous avisons également la Commission d’accès à l’information du Québec lorsqu’un incident de confidentialité présente un risque qu’un préjudice sérieux soit causé. Nous tenons un registre de tous les incidents de confidentialité.",
        },
      ],
    },
    {
      title: "Vos droits",
      blocks: [
        {
          type: "list",
          items: [
            `**Accès${NB}:** savoir si nous détenons des renseignements personnels à votre sujet et en obtenir une copie.`,
            `**Rectification${NB}:** nous demander de corriger des renseignements inexacts ou incomplets.`,
            `**Retrait du consentement${NB}:** retirer votre consentement à l’utilisation de vos renseignements.`,
            `**Suppression${NB}:** nous demander de supprimer vos renseignements lorsque nous n’en avons plus besoin.`,
            `**Les résidents du Québec** peuvent aussi obtenir une copie de leurs renseignements dans un format technologique structuré et couramment utilisé (portabilité), demander que cesse la diffusion de leurs renseignements ou leur désindexation dans certains cas, et être informés de toute décision fondée exclusivement sur un traitement automatisé.`,
          ],
        },
        {
          type: "p",
          text: `Envoyez votre demande à ${PRIVACY_EMAIL}. Nous y répondons dans un délai de 30${NB}jours, sans frais, et pourrions d’abord devoir vérifier votre identité. Si nous ne pouvons pas donner suite à une demande, par exemple parce que la loi nous oblige à conserver certains dossiers, nous vous en expliquerons la raison.`,
        },
      ],
    },
    {
      title: "Plaintes",
      blocks: [
        {
          type: "p",
          text: "Si vous avez une préoccupation, veuillez d’abord communiquer avec notre responsable de la protection des renseignements personnels afin que nous tentions de la régler. Vous pouvez également déposer une plainte auprès du Commissariat à la protection de la vie privée du Canada (priv.gc.ca) ou, si vous résidez au Québec, auprès de la Commission d’accès à l’information du Québec (cai.gouv.qc.ca).",
        },
      ],
    },
    {
      title: "Témoins (cookies)",
      blocks: [
        {
          type: "p",
          text: "callvea.com et notre démonstration en direct n’utilisent aucun témoin publicitaire ou de suivi, et nous n’utilisons aucun outil d’analyse tiers. Votre navigateur peut conserver de petits paramètres techniques nécessaires au fonctionnement des pages.",
        },
      ],
    },
    {
      title: "Enfants",
      blocks: [
        {
          type: "p",
          text: `Nos services sont destinés aux entreprises. Ils ne s’adressent pas aux enfants, et nous ne recueillons pas sciemment de renseignements personnels auprès de personnes de moins de 18${NB}ans.`,
        },
      ],
    },
    {
      title: "Modifications de la présente politique",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour la présente politique. La version en vigueur se trouve toujours sur cette page avec sa date d’entrée en vigueur, et nous informerons nos clients de tout changement important.",
        },
      ],
    },
    {
      title: "Nous joindre",
      blocks: [
        {
          type: "list",
          items: [
            `**Responsable de la protection des renseignements personnels${NB}:** ${PRIVACY_EMAIL}`,
            `**Renseignements généraux${NB}:** ${CONTACT_EMAIL}`,
            `**Téléphone${NB}:** ${PHONE}`,
            `**Emplacement${NB}:** Ontario, Canada`,
          ],
        },
      ],
    },
  ],
  backLabel: "Retour à l’accueil",
  alternate: { href: ROUTES.privacy.en, label: "English version" },
};
