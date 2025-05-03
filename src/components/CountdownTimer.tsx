
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex space-x-2 md:space-x-4 ${className}`}>
      <div className="countdown-section">
        <span className="countdown-amount">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="countdown-period">days</span>
      </div>
      <div className="countdown-section">
        <span className="countdown-amount">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="countdown-period">hours</span>
      </div>
      <div className="countdown-section">
        <span className="countdown-amount">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="countdown-period">mins</span>
      </div>
      <div className="countdown-section">
        <span className="countdown-amount">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="countdown-period">secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
