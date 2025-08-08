interface GameStatsProps {
  scrubCount: number;
  isBeautiful: boolean;
}

export const GameStats = ({ scrubCount, isBeautiful }: GameStatsProps) => {
  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Scrubs:</span>
            <span className="text-lg font-bold text-primary">{scrubCount}/10</span>
          </div>
          {scrubCount < 10 && (
            <div className="text-xs text-muted-foreground">
              Keep scrubbing to make the crow beautiful!
            </div>
          )}
          {isBeautiful && (
            <div className="text-sm font-semibold text-crow-beautiful animate-pulse">
              ✨ Beautiful! ✨
            </div>
          )}
        </div>
      </div>
    </div>
  );
};