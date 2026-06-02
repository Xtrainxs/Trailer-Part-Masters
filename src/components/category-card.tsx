import Link from 'next/link';
import CategoryIcon from './category-icon';

type Props = {
  name: string;
  href: string;
  description?: string;
  icon?: string;
};

export default function CategoryCard({ name, href, description, icon }: Props) {
  return (
    <Link href={href} className="ind-card group">
      {/* Lime corner accent that fills in on hover */}
      <span
        className="absolute top-0 left-0 h-1 w-12 bg-lime transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-sm bg-concrete border border-line text-ink group-hover:bg-ink group-hover:text-lime transition-colors">
          <CategoryIcon name={icon ?? 'default'} className="w-6 h-6" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display uppercase text-lg sm:text-xl text-ink tracking-wide leading-tight">
            {name}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      <p className="mt-5 pt-4 border-t border-line text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-lime-dark transition-colors">
        View products &rarr;
      </p>
    </Link>
  );
}
