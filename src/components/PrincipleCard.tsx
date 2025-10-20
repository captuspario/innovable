interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
}

export function PrincipleCard({ number, title, description }: PrincipleCardProps) {
  return (
    <div className="space-y-4">
      {/* Number Badge */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--electric-iris)]/10 text-[var(--electric-iris)]">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-[var(--deep-navy)]">{title}</h3>

      {/* Description */}
      <p className="text-[var(--cool-gray-text)]">{description}</p>
    </div>
  );
}
