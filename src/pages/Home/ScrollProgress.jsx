import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));

    
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const circleCircumference = 2 * Math.PI * 40;  
  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  const goToTop = () => {
    window.scrollTo({ top: 25, behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-16 right-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-20'
      }`}
    >
      <div 
        className="relative w-24 h-24 cursor-pointer hover:scale-110 transition-transform"
        onClick={goToTop}
      >
      
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#1AB69D"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circleCircumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.1s ease-in-out'
            }}
          />
        </svg>
        
        {/* Up arrow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg 
            className="w-6 h-6 text-gray-600" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;