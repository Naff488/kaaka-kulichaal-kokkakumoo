import { useState, useEffect } from 'react';
import crowNormal from '@/assets/crow-normal.png';
import crowBeautiful from '@/assets/crow-beautiful.png';

interface CrowProps {
  isBeautiful: boolean;
  isUpset: boolean;
  scrubCount: number;
}

export const Crow = ({ isBeautiful, isUpset, scrubCount }: CrowProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (scrubCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [scrubCount]);

  const getClassName = () => {
    let baseClass = "w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-500 drop-shadow-lg";
    
    if (isUpset) {
      baseClass += " crow-upset";
    } else if (isAnimating) {
      baseClass += " crow-happy";
    }
    
    if (isBeautiful) {
      baseClass += " magical";
    }
    
    return baseClass;
  };

  return (
    <div className="relative">
      <img 
        src={isBeautiful ? crowBeautiful : crowNormal}
        alt="Crow"
        className={getClassName()}
      />
      {isBeautiful && (
        <>
          {/* Sparkle effects */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </>
      )}
    </div>
  );
};