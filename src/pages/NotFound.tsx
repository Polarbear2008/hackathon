
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4 py-20">
        <h1 className="text-9xl font-bold mb-4 gradient-text">404</h1>
        <div className="h-2 w-20 bg-gradient-to-r from-hackathon-purple to-hackathon-cyan mx-auto my-6"></div>
        <p className="text-2xl font-semibold text-white mb-8">Page not found</p>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-hackathon-purple hover:bg-hackathon-cyan text-white">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
