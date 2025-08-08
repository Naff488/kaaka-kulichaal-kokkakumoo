import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface GameModalProps {
  onAnswer: (answer: boolean) => void;
}

export const GameModal = ({ onAnswer }: GameModalProps) => {
  const [showQuestion, setShowQuestion] = useState(true);

  if (!showQuestion) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
              onClick={() => {
                setShowQuestion(false);
                onAnswer(true);
              }}
              className="game-button bg-accent hover:bg-accent/80"
            >
              Yes! 🦢
            </Button>
            <Button 
              onClick={() => {
                setShowQuestion(false);
                onAnswer(false);
              }}
              className="game-button bg-destructive hover:bg-destructive/80"
            >
              No! 🐦‍⬛
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};