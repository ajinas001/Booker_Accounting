import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on Booker Accounting & Consulting.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white font-sans">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center z-10">
          <p className="text-teal-400 font-semibold text-lg tracking-wider uppercase mb-2">
            Error 404
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold transition-all duration-200 shadow-lg shadow-teal-500/20"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-200 border border-gray-700"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/80">
            <p className="text-sm text-gray-400 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-teal-400">
              <Link href="/accounting-bookkeeping" className="hover:underline">
                Accounting & Bookkeeping
              </Link>
              <Link href="/taxation" className="hover:underline">
                Taxation & VAT
              </Link>
              <Link href="/audit-assurance" className="hover:underline">
                Audit & Assurance
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
