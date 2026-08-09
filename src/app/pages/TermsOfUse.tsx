import { DocPage, type DocSection } from "../components/DocPage";
import { tapspent } from "../products";

const sections: DocSection[] = [
  {
    heading: "Acceptance of Terms",
    body: "By downloading, installing, or using TapSpent, you agree to these terms. If you do not agree, please do not use the app.",
  },
  {
    heading: "Use of the App",
    body: "TapSpent is a personal finance tracking tool intended for individual use. You are responsible for all data you enter into the app. The app is provided for informational purposes and is not a substitute for professional financial advice.",
  },
  {
    heading: "Scan with Apple Intelligence",
    body: "Scan with Apple Intelligence uses Apple's on-device Foundation Models and the Vision framework to extract details from bills, receipts, and bank statements. Results depend on the quality, language, and layout of the source document and are not guaranteed to be accurate. You are required to review and confirm the parsed amount, date, and category before each expense is saved. TapSpent is not responsible for incorrect expenses created from misread documents.",
  },
  {
    heading: "Data Responsibility",
    body: "Since all data is stored locally on your device, you are responsible for maintaining backups. Uninstalling the app or resetting your device without backing up will result in permanent data loss.",
  },
  {
    heading: "Third-Party Services",
    body: "Exchange-rate conversion uses the public Frankfurter API (api.frankfurter.app). In-app purchases are handled by Apple's App Store. TapSpent has no control over the availability, accuracy, or terms of these services and is not responsible for their outages or changes.",
  },
  {
    heading: "Intellectual Property",
    body: "TapSpent and all its content, features, and functionality are owned by the developer. The app is protected by copyright and other intellectual property laws.",
  },
  {
    heading: "Limitation of Liability",
    body: 'TapSpent is provided "as is" without warranty of any kind. The developer shall not be liable for any damages arising from the use or inability to use the app, including but not limited to data loss, scanning errors, exchange-rate inaccuracies, or financial decisions made based on information in the app.',
  },
  {
    heading: "Changes to Terms",
    body: "We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.",
  },
];

export default function TermsOfUse() {
  return (
    <DocPage
      product={tapspent}
      title="Terms of Use"
      description="TapSpent Terms of Use. Read our terms and conditions for using the platform."
      sections={sections}
      lastUpdated="July 2026"
    />
  );
}
