import { Clock } from 'lucide-react';

interface InsightCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export function InsightCard({ category, title, excerpt, date, readTime }: InsightCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[var(--light-gray-border)] hover:border-[var(--electric-iris)] transition-all duration-250 cursor-pointer group">
      {/* Category Tag */}
      <span className="inline-block px-3 py-1 rounded-sm bg-[var(--electric-iris)]/10 text-[var(--electric-iris)] border border-[var(--electric-iris)]/20 text-xs tracking-wider uppercase mb-4">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-[var(--deep-navy)] mb-3 group-hover:text-[var(--electric-iris)] transition-colors duration-150">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-[var(--cool-gray-text)] mb-6">
        {excerpt}
      </p>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-[var(--cool-gray-text)]">
        <span>{date}</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
