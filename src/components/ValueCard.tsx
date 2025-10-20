import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-[var(--warm-gray-bg)] rounded-2xl p-8 transition-all duration-250 hover:shadow-[var(--shadow-2)] hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[var(--electric-iris)]/10 flex items-center justify-center mb-6">
        <Icon size={24} className="text-[var(--electric-iris)]" />
      </div>

      {/* Title */}
      <h3 className="text-[var(--deep-navy)] mb-4">{title}</h3>

      {/* Description */}
      <p className="text-[var(--cool-gray-text)]">{description}</p>
    </div>
  );
}
