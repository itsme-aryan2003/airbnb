import { useEffect, useState } from 'react';
const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setShowHeader(false);
      } else if (window.scrollY === 0) {
        // User is back to the top
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);