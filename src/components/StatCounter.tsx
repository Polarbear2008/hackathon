
import { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const StatCounter = ({ 
  end, 
  label, 
  suffix = '', 
  duration = 2000,
  className = ''
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={counterRef} className={`text-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-white animate-count-up">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/70 mt-2">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
