import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AURA",
  description:
    "Review the terms and conditions governing your use of AURA's website and services.",
};

const sections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    content: [
      {
        text: 'By accessing or using the AURA website (aura-studio.com), mobile applications, or any of our services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you must not access or use our Services.',
      },
      {
        text: "These Terms constitute a legally binding agreement between you and AURA Studios (\"AURA\", \"we\", \"us\", or \"our\"). We reserve the right to update or modify these Terms at any time, and your continued use of the Services following any changes constitutes your acceptance of the updated Terms.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: [
      {
        text: "You must be at least 16 years of age to use our Services. By using our Services, you represent and warrant that you are at least 16 years old and have the legal capacity to enter into these Terms. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
      },
    ],
  },
  {
    id: "account-registration",
    title: "3. Account Registration",
    content: [
      {
        text: "To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:",
        list: [
          "Provide accurate, current, and complete information during registration",
          "Maintain and promptly update your account information to keep it accurate",
          "Maintain the security of your password and accept all risks of unauthorized access",
          "Notify us immediately if you discover any unauthorized use of your account",
          "Accept responsibility for all activities that occur under your account",
        ],
      },
      {
        text: "We reserve the right to suspend or terminate your account if any information provided is found to be inaccurate, misleading, or in violation of these Terms.",
      },
    ],
  },
  {
    id: "products-and-orders",
    title: "4. Products & Orders",
    content: [
      {
        subtitle: "Product Information",
        text: "We strive to display our products as accurately as possible. However, we do not guarantee that product descriptions, images, pricing, or other content on our website are accurate, complete, or error-free. Colors may appear differently depending on your display settings.",
      },
      {
        subtitle: "Pricing",
        text: "All prices are listed in the applicable currency and are subject to change without notice. Prices do not include applicable taxes and shipping charges, which will be calculated and displayed at checkout. We reserve the right to correct any errors in pricing, even after an order has been placed.",
      },
      {
        subtitle: "Order Acceptance",
        text: "Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order for any reason, including but not limited to product availability, pricing errors, or suspected fraudulent activity. An order is confirmed only when you receive an order confirmation email from us.",
      },
      {
        subtitle: "Payment",
        text: "We accept various payment methods as indicated on our website. By providing payment information, you represent that you are authorized to use the payment method and authorize us to charge the applicable amount. All payments are processed securely through trusted third-party payment processors.",
      },
    ],
  },
  {
    id: "shipping-and-delivery",
    title: "5. Shipping & Delivery",
    content: [
      {
        text: "We offer shipping to select locations as indicated during checkout. Estimated delivery times are provided as guidance and are not guaranteed. We are not liable for delays caused by carriers, customs processing, natural disasters, or other events beyond our reasonable control.",
      },
      {
        text: "Risk of loss and title for items purchased pass to you upon delivery to the carrier. You are responsible for inspecting your order upon receipt and reporting any damage or discrepancies within 48 hours of delivery.",
      },
    ],
  },
  {
    id: "returns-and-exchanges",
    title: "6. Returns & Exchanges",
    content: [
      {
        text: "We want you to love every AURA piece. If you are not completely satisfied, you may return eligible items within 30 days of delivery, subject to the following conditions:",
        list: [
          "Items must be unworn, unwashed, and in their original condition with all tags attached",
          "Sale items and items marked as final sale are not eligible for return",
          "Gift cards are non-refundable and non-transferable",
          "Shipping costs for returns are the responsibility of the customer unless the return is due to our error",
          "Refunds will be processed to the original payment method within 7–10 business days of receiving the returned item",
        ],
      },
      {
        text: "For exchanges, please initiate a return for the original item and place a new order for the desired item to ensure availability.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    content: [
      {
        text: "All content on our website — including but not limited to text, graphics, logos, images, product designs, trademarks, and software — is the property of AURA Studios or its licensors and is protected by applicable intellectual property laws.",
      },
      {
        text: "You may not reproduce, distribute, modify, display, or create derivative works from any content on our website without our prior written consent. Limited personal, non-commercial use is permitted (e.g., saving product images for personal reference), provided you do not remove any copyright or proprietary notices.",
      },
    ],
  },
  {
    id: "prohibited-conduct",
    title: "8. Prohibited Conduct",
    content: [
      {
        text: "When using our Services, you agree not to:",
        list: [
          "Use the Services for any unlawful purpose or in violation of any applicable laws",
          "Interfere with or disrupt the integrity or performance of the Services",
          "Attempt to gain unauthorized access to any portion of the Services or related systems",
          "Use automated tools (bots, scrapers, crawlers) to access or collect data from our website",
          "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
          "Submit false, misleading, or fraudulent orders or information",
          "Engage in any activity that could damage, disable, or impair our Services",
          "Harvest or collect email addresses or personal information of other users",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "9. Limitation of Liability",
    content: [
      {
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AURA STUDIOS AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
      {
        text: "Our total liability to you for all claims arising from or related to the Services shall not exceed the amount you paid to us in the 12 months preceding the event giving rise to the claim.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    content: [
      {
        text: "You agree to indemnify, defend, and hold harmless AURA Studios and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising out of or related to your use of the Services, your violation of these Terms, or your violation of any rights of a third party.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Disputes",
    content: [
      {
        text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.",
      },
      {
        text: "Before filing any formal legal action, you agree to attempt to resolve any dispute informally by contacting us at legal@aura-studio.com. We will attempt to resolve the dispute within 30 days of receiving notice.",
      },
    ],
  },
  {
    id: "miscellaneous",
    title: "12. Miscellaneous",
    content: [
      {
        subtitle: "Entire Agreement",
        text: "These Terms, together with our Privacy Policy and any other legal notices published on our website, constitute the entire agreement between you and AURA relating to your use of the Services.",
      },
      {
        subtitle: "Severability",
        text: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.",
      },
      {
        subtitle: "Waiver",
        text: "Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights. Any waiver must be in writing and signed by an authorized representative of AURA.",
      },
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: [
      {
        text: "If you have any questions about these Terms of Service, please contact us:",
        list: [
          "Email: legal@aura-studio.com",
          "Address: AURA Studios, 42 Fashion Avenue, Mumbai, Maharashtra 400001, India",
          "Phone: +91 22 1234 5678",
        ],
      },
    ],
  },
];

export default function TermsOfServicePage() {
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
              <FileText className="w-5 h-5 text-zinc-300" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Please read these terms carefully before using our website and
            services. By using AURA, you agree to these terms.
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
              {/* Quick Summary Banner */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-sm p-6 mb-12">
                <h3 className="text-sm font-medium text-zinc-900 mb-2">
                  Quick Summary
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  These terms govern your use of the AURA website and services,
                  including account registration, purchases, returns, and
                  intellectual property. By using our platform, you agree to
                  comply with these terms. For questions, contact
                  legal@aura-studio.com.
                </p>
              </div>

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

              {/* Cross-reference */}
              <div className="mt-20 pt-10 border-t border-zinc-100">
                <div className="bg-zinc-50 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900 mb-1">
                      Related Policies
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Please also review our Privacy Policy to understand how we
                      handle your personal data.
                    </p>
                  </div>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-zinc-900 text-white rounded-sm hover:bg-zinc-800 transition-colors flex-shrink-0"
                  >
                    Read Privacy Policy
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
