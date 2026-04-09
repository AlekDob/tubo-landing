import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Tubo",
  description: "Privacy Policy for Tubo, the native YouTube player for macOS.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-neutral-400 mb-12">Last updated: April 9, 2026</p>

      <div className="space-y-8 text-neutral-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
          <p>
            Tubo is a native macOS application that provides a browser-like
            wrapper for YouTube using Apple&apos;s WKWebView. Your privacy is
            important to us. This policy explains what data Tubo collects (or
            rather, does not collect).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Data Collection
          </h2>
          <p>
            Tubo does <strong>not</strong> collect, store, or transmit any
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
        <a href="/" className="hover:text-white transition-colors">
          Back to Tubo
        </a>
      </div>
    </main>
  );
}
