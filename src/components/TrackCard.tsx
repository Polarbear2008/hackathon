
import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TrackCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  className?: string;
  detailedDescription?: string;
  requirements?: string[];
}

const TrackCard = ({ 
  title, 
  icon, 
  description, 
  className = '',
  detailedDescription = 'More information about this track coming soon.',
  requirements = ['Open to all skill levels', 'Teams of 2-5 people']
}: TrackCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`perspective-1000 h-[250px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Front Card */}
        <div className="card-gradient p-6 rounded-xl absolute inset-0 backface-hidden border border-white/10">
          <div className="bg-gradient-to-br from-hackathon-purple/20 to-hackathon-cyan/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-hackathon-purple">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
          <div className="absolute bottom-4 right-4 text-xs text-white/50 flex items-center gap-1">
            <span>Click to flip</span>
            <ChevronRight className="h-3 w-3" />
          </div>
          
          {/* Subtle glow effect when hovered */}
          {isHovered && (
            <motion.div 
              className="absolute inset-0 rounded-xl opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'radial-gradient(circle at center, rgba(155, 135, 245, 0.3) 0%, transparent 70%)',
                filter: 'blur(15px)',
                zIndex: -1
              }}
            />
          )}
        </div>
        
        {/* Back Card */}
        <div className="card-gradient p-6 rounded-xl absolute inset-0 rotate-y-180 backface-hidden bg-hackathon-navy/80 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2 border-b border-white/20 pb-2">{title} Details</h3>
          <p className="text-white/80 text-sm mb-4">{detailedDescription}</p>
          <h4 className="text-hackathon-cyan text-sm font-bold mb-1">Requirements:</h4>
          <ul className="text-white/70 text-sm space-y-1 pl-4">
            {requirements.map((req, idx) => (
              <li key={idx} className="list-disc">{req}</li>
            ))}
          </ul>
          <div className="absolute bottom-4 right-4 text-xs text-white/50 flex items-center gap-1">
            <span>Click to flip back</span>
            <ChevronRight className="h-3 w-3 rotate-180" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrackCard;
