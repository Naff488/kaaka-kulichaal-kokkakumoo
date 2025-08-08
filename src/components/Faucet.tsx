import { useState } from 'react';

interface FaucetProps {
  isOn: boolean;
  onToggle: () => void;
  onWaterSound: () => void;
}

export const Faucet = ({ isOn, onToggle, onWaterSound }: FaucetProps) => {
  const handleToggle = () => {
    onToggle();
    if (!isOn) {
      onWaterSound();
    }
  };

  return (
    <div className="relative">
      {/* Faucet */}
      <button
        onClick={handleToggle}
        className="w-20 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg rounded-b-none relative shadow-lg hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">
          {isOn ? 'ON' : 'OFF'}
        </div>
      </button>
      
      {/* Water stream */}
      {isOn && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-24 water-flow opacity-80" />
          {/* Water splash effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bubble w-2 h-2 absolute"
                style={{
                  left: `${(i - 2) * 8}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};