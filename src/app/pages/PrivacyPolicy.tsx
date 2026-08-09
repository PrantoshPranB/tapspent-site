import { DocPage, type DocSection } from "../components/DocPage";
import { tapspent } from "../products";

const sections: DocSection[] = [
  {
    heading: "Data Collection",
    body: "TapSpent does not collect, transmit, or share any personal data. All expense and income records you create are stored exclusively on your device using Apple's SwiftData framework.",
  },
  {
    heading: "Local Storage Only",
    body: "Your financial data never leaves your device. There are no analytics, tracking, advertising, or behavioral profiling embedded in TapSpent. We believe your spending habits are your business alone.",
  },
  {
    heading: "Camera & Photo Library",
    body: "TapSpent requests camera and photo library access only when you choose to scan a bill, receipt, or bank statement. The captured image or selected photo is processed on your device and is never uploaded anywhere. You can revoke either permission at any time in iOS Settings → TapSpent.",
  },
  {
    heading: "Apple Intelligence & On-Device Recognition",
    body: "Scan with Apple Intelligence uses Apple's on-device Foundation Models and the Vision framework to read amounts, dates, and merchants from your documents. All recognition happens locally on your iPhone — the image, the extracted text, and the parsed result are not sent to TapSpent's servers, Apple's servers, or any third party.",
  },
  {
    heading: "Currency Exchange Rates",
    body: "If you change the display currency, TapSpent fetches public exchange rates from api.frankfurter.app (a free, anonymous rates API run by the European Central Bank). This request contains no personal data and no information about your expenses — only a request for the latest rates. Rates are then cached on your device.",
  },
  {
    heading: "Notifications",
    body: "TapSpent can schedule local notifications for salary credit reminders and monthly reflection prompts. These are scheduled entirely on your device by iOS; no push servers or remote services are involved. You can disable notifications at any time in iOS Settings → TapSpent → Notifications.",
  },
  {
    heading: "Backup & Export",
    body: "When you use the backup feature, a CSV file is generated locally on your device. You control where this file is saved or shared. TapSpent does not upload backups to any server.",
  },
  {
    heading: "No Account Required",
    body: "TapSpent works entirely offline (apart from the optional exchange-rate refresh) and does not require you to create an account, sign in, or provide any personal information.",
  },
  {
    heading: "In-App Purchases",
    body: "TapSpent offers an optional Pro upgrade through the App Store. All purchase transactions are processed securely by Apple. TapSpent does not collect or store any payment information.",
  },
  {
    heading: "Changes to This Policy",
    body: "If we make changes to this privacy policy, we will update it within the app and on our website. Since we do not collect any personal data, changes are likely to be minor.",
  },
];

export default function PrivacyPolicy() {
  return (
    <DocPage
      product={tapspent}
      title="Privacy Policy"
      description="TapSpent Privacy Policy. Learn how we protect your data and respect your privacy."
      sections={sections}
      lastUpdated="July 2026"
    />
  );
}
