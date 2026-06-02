import Link from 'next/link';

type Props = {
  partLabel: string;
};

export default function RequestQuoteCTA({ partLabel }: Props) {
  const href = `/request-form?part=${encodeURIComponent(partLabel)}`;
  return (
    <section className="mt-12 mb-4 bg-[#05203C] text-white rounded-xl p-6 sm:p-8 text-center shadow-md">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">
        Need pricing for {partLabel}?
      </h3>
      <p className="text-sm sm:text-base text-sky-100 mb-5 max-w-xl mx-auto leading-relaxed">
        Tell us your specs and quantity. We&apos;ll match you with the right
        manufacturer and send a quote within 1&ndash;2 business days.
      </p>
      <Link
        href={href}
        className="inline-block px-8 py-3 bg-white text-[#05203C] rounded-md font-semibold shadow-sm hover:bg-white transition"
      >
        Request a Quote
      </Link>
    </section>
  );
}
