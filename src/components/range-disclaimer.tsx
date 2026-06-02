type Props = {
  intro: string;
  items: string[];
};

export default function RangeDisclaimer({ intro, items }: Props) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-5 mb-8">
      <p className="text-sm font-semibold text-[#05203C] mb-3">{intro}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs sm:text-sm text-slate-700 font-medium shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-xs text-slate-500 border-t border-slate-200 pt-3 mt-1">
        Don&apos;t see what you need?{' '}
        <a href="/request-form" className="text-sky-700 hover:underline font-medium">
          Request a quote
        </a>{' '}
        and we&apos;ll source it for you.
      </p>
    </div>
  );
}
