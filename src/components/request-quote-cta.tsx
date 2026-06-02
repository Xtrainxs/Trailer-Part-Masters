import Link from 'next/link';

type Props = {
  partLabel: string;
};

export default function RequestQuoteCTA({ partLabel }: Props) {
  const href = `/request-form?part=${encodeURIComponent(partLabel)}`;
  return (
    <section className="mt-12 mb-4 bg-ink text-white rounded-sm p-7 sm:p-9 text-center relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 hazard-stripe h-1.5" aria-hidden="true" />
      <h3 className="font-display uppercase text-xl sm:text-2xl tracking-wide mb-2">
        Need pricing for {partLabel}?
      </h3>
      <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl mx-auto leading-relaxed">
        Tell us your specs and quantity. We&apos;ll match you with the right
        manufacturer and send a quote within 1&ndash;2 business days.
      </p>
      <Link href={href} className="btn-lime">
        Request a Quote
      </Link>
    </section>
  );
}
