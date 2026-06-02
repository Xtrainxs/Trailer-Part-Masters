export const metadata = {
  title: 'Request Received',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          className="w-10 h-10 text-emerald-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h1
        className="text-4xl sm:text-5xl font-bold text-[#05203C] mb-4 tracking-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Request received
      </h1>
      <p className="text-lg text-slate-700 mb-2 leading-relaxed">
        Thanks for reaching out. We&apos;ve got your details and will get back to you
        within 1&ndash;2 business days with pricing and availability.
      </p>
      <p className="text-sm text-slate-500 mb-10">
        If your request is urgent, call us at{' '}
        <a href="tel:+14038755074" className="text-sky-700 hover:underline font-medium">
          +1 403-875-5074
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/categories"
          className="px-8 py-3 bg-[#05203C] text-white rounded-md font-semibold shadow-sm hover:bg-[#0a3460] transition"
        >
          Browse Categories
        </a>
        <a
          href="/"
          className="px-8 py-3 border-2 border-[#05203C] text-[#05203C] rounded-md font-semibold hover:bg-[#05203C] hover:text-white transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
