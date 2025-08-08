import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface GameModalProps {
  onStart: () => void;
}

export const GameModal = ({ onStart }: GameModalProps) => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showLetsSee, setShowLetsSee] = useState(false);

  if (!showQuestion && !showLetsSee) return null;

  const handleAnswer = () => {
    setShowQuestion(false);
    setShowLetsSee(true);
    setTimeout(() => {
      setShowLetsSee(false);
      onStart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {showQuestion && (
        <Card className="w-full max-w-md mx-auto text-center animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Welcome to BathingCrow! 🐦‍⬛
            </CardTitle>
            <CardDescription className="text-lg">
              A mysterious question appears...
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-xl font-semibold text-foreground">
              "Will this crow turn out to be a swan?"
            </div>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleAnswer}
                className="game-button bg-accent hover:bg-accent/80"
              >
                Yes! 🦢
              </Button>
              <Button 
                onClick={handleAnswer}
                className="game-button bg-destructive hover:bg-destructive/80"
              >
                No! 🐦‍⬛
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {showLetsSee && (
        <Card className="w-full max-w-md mx-auto text-center animate-scale-in">
          <CardContent className="p-8">
            <div className="text-3xl font-bold text-primary animate-pulse">
              Let's see... 🤔
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};