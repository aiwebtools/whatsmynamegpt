
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CyberButton from "@/components/CyberButton";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-darkest relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-pink/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl -z-10"></div>
      
      <div className="glass-panel rounded-lg p-8 border border-neon-pink/30 max-w-md w-full text-center">
        <div className="mb-6 flex flex-col items-center">
          <AlertTriangle className="h-16 w-16 text-neon-pink mb-4" />
          <h1 className="text-4xl font-cyber font-bold neon-text-pink mb-2">404</h1>
          <p className="text-white text-xl mb-6">Oops! Page not found</p>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
        </div>
        
        <div className="flex justify-center">
          <CyberButton
            variant="default"
            size="lg"
            href="/"
            glowing
          >
            Return to Home
          </CyberButton>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
