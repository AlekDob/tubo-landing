import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tubo",
  description: "Privacy Policy for Tubo, the native YouTube player for macOS.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-neutral-400 mb-12">Last updated: November 25, 2026</p>

      <div className="space-y-8 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
          <p>
            Tubo is a native macOS application that provides a browser-like
            wrapper for YouTube using Apple&apos;s WKWebView. Your privacy is
            important to us. This policy explains what data the Tubo app collects
            (or rather, does not collect), and the anonymous statistics this
            website uses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Data Collection in the App
          </h2>
          <p>
            The Tubo app does <strong>not</strong> collect, store, or transmit any
            personal data. Specifically:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>No analytics or tracking SDKs are included</li>
            <li>No personal information is collected</li>
            <li>No usage data is sent to our servers</li>
            <li>No cookies are set by Tubo itself</li>
            <li>No third-party advertising frameworks are used</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            This Website
          </h2>
          <p>
            The website tubo.you (not the app) uses OpenPanel, a privacy-friendly
            analytics tool, to count visits and Download button clicks. It runs
            on our own server in the European Union.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>No cookies are used, and there is no cookie banner to accept</li>
            <li>Analytics never collect your name or email</li>
            <li>Statistics are aggregated: pages viewed, referrer, country, browser and device type</li>
            <li>The data is not sold or shared with advertisers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Newsletter and Waitlists
          </h2>
          <p>
            When you download Tubo from this website you can leave your email.
            What happens to it depends on what you choose:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              If you tick &quot;Send me Tubo news&quot;, your email joins the Tubo
              newsletter. We use it only to tell you about Tubo: updates and new
              versions.
            </li>
            <li>
              If you join the Linux or Windows waitlist, we use your email only to
              tell you when Tubo is available for that platform.
            </li>
            <li>
              If you leave the box unticked, your email is not added to any list.
              We receive a one-off notification of the download and nothing else.
            </li>
          </ul>
          <p className="mt-3">
            Emails are stored with{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 underline hover:text-red-300"
            >
              Resend
            </a>
            , the service we use to send them, together with the platform you
            chose, the signup date and that you signed up on tubo.you. We never
            sell or share them. Every email has an unsubscribe link, and you can
            ask us to delete your data at any time by writing to{" "}
            <a
              href="mailto:gmail@alekdob.com"
              className="text-red-400 underline hover:text-red-300"
            >
              gmail@alekdob.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Third-Party Content
          </h2>
          <p>
            Tubo displays content from YouTube (youtube.com and
            music.youtube.com) through WKWebView. When you use Tubo, you
            interact directly with YouTube&apos;s website. YouTube may collect
            data according to its own privacy policy. We recommend reviewing{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 underline hover:text-red-300"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Local Storage
          </h2>
          <p>
            Tubo stores your tab state and preferences locally on your device
            using macOS UserDefaults. This data never leaves your computer and
            is not accessible to us or any third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at{" "}
            <a
              href="mailto:alekdobrohotov@gmail.com"
              className="text-red-400 underline hover:text-red-300"
            >
              alekdobrohotov@gmail.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-neutral-800 text-neutral-500 text-sm">
        <Link href="/" className="hover:text-white transition-colors">
          Back to Tubo
        </Link>
      </div>
    </main>
  );
}
