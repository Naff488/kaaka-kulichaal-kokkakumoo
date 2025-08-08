import { useState, useEffect } from 'react';
import { GameModal } from '@/components/GameModal';
import { GameOverModal } from '@/components/GameOverModal';
import { Crow } from '@/components/Crow';
import { Faucet } from '@/components/Faucet';
import { Soap } from '@/components/Soap';
import { GameStats } from '@/components/GameStats';
import bathroomBg from '@/assets/bathroom-bg.png';

const Index = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameOver'>('intro');
  const [scrubCount, setScrubCount] = useState(0);
  const [isWaterOn, setIsWaterOn] = useState(false);
  const [isCrowUpset, setIsCrowUpset] = useState(false);
  const [isBeautiful, setIsBeautiful] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setIsCrowUpset(true);
    setTimeout(() => {
      setGameState('gameOver');
    }, 1500);
  };

  const handleSoapDrag = () => {
    if (gameState === 'playing' && !isCrowUpset) {
      setScrubCount(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setScrubCount(0);
    setIsWaterOn(false);
    setIsCrowUpset(false);
    setIsBeautiful(false);
  };

  useEffect(() => {
    if (scrubCount >= 10) {
      setIsBeautiful(true);
    }
  }, [scrubCount]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bathroom-tile"
        style={{
          backgroundImage: `url(${bathroomBg})`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Game Area */}
      <div className="relative z-10 min-h-screen p-4">
        {gameState === 'playing' && (
          <>
            <GameStats scrubCount={scrubCount} isBeautiful={isBeautiful} />
            
            {/* Main game area */}
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              
              {/* Faucet */}
              <div className="mb-8">
                <Faucet isOn={isWaterOn} onToggle={() => setIsWaterOn(!isWaterOn)} />
              </div>
              
              {/* Bathtub area with crow */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-b from-white/20 to-water/30 rounded-3xl border-4 border-white/40 backdrop-blur-sm shadow-xl">
                
                {/* Bubbles background */}
                {isWaterOn && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="bubble"
                        style={{
                          width: `${Math.random() * 20 + 10}px`,
                          height: `${Math.random() * 20 + 10}px`,
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Crow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crow 
                    isBeautiful={isBeautiful}
                    isUpset={isCrowUpset}
                    scrubCount={scrubCount}
                  />
                </div>
                
                {/* Soap */}
                <Soap onDrag={handleSoapDrag} />
              </div>
              
              {/* Instructions */}
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold">
                  {isBeautiful ? 
                    "✨ Your crow is now beautiful! ✨" : 
                    "Drag the soap to scrub your crow!"
                  }
                </p>
                <p className="text-sm text-muted-foreground">
                  Turn on the faucet and drag the soap around to clean your crow
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      {gameState === 'intro' && (
        <GameModal onAnswer={(answer) => {
          handleAnswer(answer);
          setGameState('playing');
        }} />
      )}
      
      {gameState === 'gameOver' && (
        <GameOverModal onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Index;