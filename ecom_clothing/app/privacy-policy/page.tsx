import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AURA",
  description:
    "Learn how AURA collects, uses, and protects your personal information. Your privacy is our priority.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you create an account, place an order, or contact us, we may collect your name, email address, phone number, shipping and billing addresses, and payment information. We only collect information that is necessary to fulfill your orders and improve your shopping experience.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and browsing behavior on our site. We use cookies and similar tracking technologies to enhance your experience.",
      },
      {
        subtitle: "Order Information",
        text: "We collect details about the products you purchase, order history, transaction amounts, and delivery preferences to process and fulfill your orders efficiently.",
      },
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect for the following purposes:",
        list: [
          "Processing and fulfilling your orders, including shipping and payment processing",
          "Communicating with you about your orders, account, and customer service inquiries",
          "Personalizing your shopping experience and product recommendations",
          "Sending marketing communications (with your consent), including new arrivals, promotions, and brand stories",
          "Improving our website, products, and services through analytics",
          "Preventing fraud and ensuring the security of our platform",
          "Complying with legal obligations and enforcing our terms",
        ],
      },
    ],
  },
  {
    id: "sharing-your-information",
    title: "3. Sharing Your Information",
    content: [
      {
        text: "We do not sell your personal information. We may share your data with trusted third parties only in the following circumstances:",
        list: [
          "Payment processors (e.g., Stripe, Razorpay) to securely handle transactions",
          "Shipping and logistics partners to deliver your orders",
          "Analytics providers to help us understand website usage and improve our services",
          "Legal authorities when required by law or to protect our rights",
        ],
      },
      {
        text: "All third-party partners are contractually bound to protect your data and use it only for the purposes we specify.",
      },
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      {
        text: "We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for all data transmissions, secure server infrastructure, regular security audits, and access controls. While no method of transmission over the internet is 100% secure, we strive to protect your data using commercially acceptable means.",
      },
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    content: [
      {
        text: "Our website uses cookies and similar technologies to remember your preferences, maintain your session, analyze traffic patterns, and deliver relevant content. You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect the functionality of our website.",
      },
      {
        subtitle: "Types of Cookies We Use",
        list: [
          "Essential cookies — required for the website to function properly (e.g., cart, authentication)",
          "Analytics cookies — help us understand how visitors interact with our website",
          "Marketing cookies — used to deliver relevant advertisements and measure campaign effectiveness",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        text: "Depending on your location, you may have the following rights regarding your personal data:",
        list: [
          "Access — Request a copy of the personal data we hold about you",
          "Correction — Request correction of inaccurate or incomplete data",
          "Deletion — Request deletion of your personal data, subject to legal retention requirements",
          "Portability — Receive your data in a structured, machine-readable format",
          "Opt-out — Unsubscribe from marketing communications at any time",
          "Restriction — Request restriction of processing in certain circumstances",
        ],
      },
      {
        text: 'To exercise any of these rights, please contact us at privacy@aura-studio.com. We will respond to your request within 30 days.',
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    content: [
      {
        text: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "8. Changes to This Policy",
    content: [
      {
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.',
      },
    ],
  },
  {
    id: "contact-us",
    title: "9. Contact Us",
    content: [
      {
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out:",
        list: [
          "Email: privacy@aura-studio.com",
          "Address: AURA Studios, 42 Fashion Avenue, Mumbai, Maharashtra 400001, India",
          "Phone: +91 22 1234 5678",
        ],
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-zinc-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-zinc-700/20 to-transparent rounded-full blur-3xl" />

        <Container className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <Shield className="w-5 h-5 text-zinc-300" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Your privacy matters to us. This policy explains how AURA collects,
            uses, and safeguards your personal information.
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500">
            <span>Last Updated: April 21, 2026</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>Effective: April 21, 2026</span>
          </div>
        </Container>
      </section>

      {/* Table of Contents + Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            {/* Sidebar — Table of Contents */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav className="border border-zinc-100 rounded-sm p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                  On this page
                </h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-zinc-500 hover:text-zinc-900 transition-colors py-1 border-l-2 border-transparent hover:border-zinc-900 pl-3 -ml-px"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <article className="max-w-none">
              <div className="space-y-16">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-6 pb-4 border-b border-zinc-100">
                      {section.title}
                    </h2>
                    <div className="space-y-6">
                      {section.content.map((block, idx) => (
                        <div key={idx}>
                          {block.subtitle && (
                            <h3 className="text-base font-medium text-zinc-800 mb-2">
                              {block.subtitle}
                            </h3>
                          )}
                          {block.text && (
                            <p className="text-sm text-zinc-600 leading-relaxed">
                              {block.text}
                            </p>
                          )}
                          {block.list && (
                            <ul className="mt-3 space-y-2">
                              {block.list.map((item: string, i: number) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-zinc-600"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-1.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 pt-10 border-t border-zinc-100">
                <div className="bg-zinc-50 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900 mb-1">
                      Have questions about your data?
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Our privacy team is here to help. Reach out any time.
                    </p>
                  </div>
                  <a
                    href="mailto:privacy@aura-studio.com"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-zinc-900 text-white rounded-sm hover:bg-zinc-800 transition-colors flex-shrink-0"
                  >
                    Contact Privacy Team
                  </a>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
