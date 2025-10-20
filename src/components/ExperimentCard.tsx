import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperimentCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  darkMode?: boolean;
}

export function ExperimentCard({ 
  image, 
  category, 
  title, 
  description, 
  tags,
  darkMode = false 
}: ExperimentCardProps) {
  const cardBg = darkMode ? 'bg-white/10 border-white/20' : 'bg-white border-[var(--light-gray-border)]';
  const textColor = darkMode ? 'text-white' : 'text-[var(--deep-navy)]';
  const descColor = darkMode ? 'text-white/70' : 'text-[var(--cool-gray-text)]';
  const hoverShadow = darkMode ? 'hover:bg-white/20' : 'hover:shadow-[var(--shadow-2)]';

  return (
    <div 
      className={`${cardBg} rounded-2xl overflow-hidden border transition-all duration-250 ${hoverShadow} hover:-translate-y-1 group cursor-pointer`}
    >
      {/* Image Container */}
      <div className="aspect-[16/9] overflow-hidden bg-[var(--warm-gray-bg)]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Category Tag */}
        <span className={`inline-block px-3 py-1 rounded text-xs tracking-wider uppercase mb-4 ${
          darkMode 
            ? 'bg-white/10 text-white border border-white/20' 
            : 'bg-[var(--warm-gray-bg)] text-[var(--deep-navy)]'
        }`}>
          {category}
        </span>

        {/* Title */}
        <h3 className={`${textColor} mb-3`}>{title}</h3>

        {/* Description */}
        <p className={`${descColor} mb-6`}>{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-sm text-xs ${
                  darkMode 
                    ? 'bg-white/5 text-white/60' 
                    : 'bg-[var(--warm-gray-bg)] text-[var(--cool-gray-text)]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Link */}
        <div className={`flex items-center gap-2 ${
          darkMode ? 'text-white' : 'text-[var(--electric-iris)]'
        } group-hover:gap-3 transition-all duration-150`}>
          <span>View Project</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
