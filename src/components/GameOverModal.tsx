import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface GameOverModalProps {
  onRestart: () => void;
}

export const GameOverModal = ({ onRestart }: GameOverModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto text-center animate-scale-in">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-destructive">
            💀 GAME OVER 💀
          </CardTitle>
          <CardDescription className="text-lg">
            The crow was upset by your answer...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-xl text-foreground">
            You have died! 🪦
          </div>
          <div className="text-sm text-muted-foreground">
            The crow didn't appreciate your perspective on swan transformations.
            Perhaps you should have been more diplomatic! 
          </div>
          <Button 
            onClick={onRestart}
            className="game-button bg-primary hover:bg-primary/80"
          >
            Try Again 🔄
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};