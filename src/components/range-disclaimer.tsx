type Props = {
  intro: string;
  items: string[];
};

export default function RangeDisclaimer({ intro, items }: Props) {
  return (
    <div className="bg-white border border-line rounded-sm px-6 py-5 mb-8 border-l-4 border-l-lime">
      <p className="font-display uppercase text-sm tracking-wide text-ink mb-3">{intro}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block bg-concrete border border-line rounded-sm px-3 py-1.5 text-xs sm:text-sm text-slate-700 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-xs text-slate-500 border-t border-line pt-3 mt-1">
        Don&apos;t see what you need?{' '}
        <a href="/request-form" className="text-lime-dark hover:underline font-semibold">
          Request a quote
        </a>{' '}
        and we&apos;ll source it for you.
      </p>
    </div>
  );
}
