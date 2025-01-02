import { useEffect, useState } from 'react'

interface TimerProps {
  initialTime: number; // in seconds
  onTimeEnd: () => void;
}

export function Timer({ initialTime, onTimeEnd }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeEnd]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 border">
      <div className="text-lg font-mono">
        {`${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`}
      </div>
    </div>
  );
}

