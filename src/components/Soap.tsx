import { useState, useCallback } from 'react';
import soapImage from '@/assets/soap.png';

interface SoapProps {
  onDrag: () => void;
}

export const Soap = ({ onDrag }: SoapProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    onDrag();
  }, [onDrag]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      const rect = e.currentTarget.parentElement?.getBoundingClientRect();
      if (rect) {
        setPosition({
          x: Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)),
          y: Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100))
        });
      }
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      className="absolute w-16 h-16 soap-draggable"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img 
        src={soapImage}
        alt="Soap"
        className="w-full h-full object-contain drop-shadow-md"
        style={{
          filter: isDragging ? 'brightness(1.2)' : 'brightness(1)'
        }}
      />
      {isDragging && (
        <>
          {/* Bubble trail */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bubble w-3 h-3 absolute -z-10"
              style={{
                left: `${-10 + i * 5}px`,
                top: `${-10 + i * 5}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};