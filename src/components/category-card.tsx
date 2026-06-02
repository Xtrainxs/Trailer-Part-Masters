import Link from 'next/link';

type Props = {
  name: string;
  href: string;
  description?: string;
};

export default function CategoryCard({ name, href, description }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 text-center h-full"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#05203C] tracking-tight group-hover:text-sky-700 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
        )}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-sky-700 transition-colors">
        View products &rarr;
      </p>
    </Link>
  );
}
