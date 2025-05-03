
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const NotificationForm = ({ className = '' }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when registration opens.",
      });
      setEmail('');
      setTelegram('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Telegram username (optional)"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full btn-gradient text-white font-semibold"
      >
        {isLoading ? "Subscribing..." : "Notify Me When Registration Opens"}
      </Button>
    </form>
  );
};

export default NotificationForm;
