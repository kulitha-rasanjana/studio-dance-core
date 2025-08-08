// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern way to scroll to top.
    // It's more reliable than "window.scrollTo" in some contexts.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' for animation, 'instant' for immediate jump
    });
    // You could also use:
    // window.scrollTo(0, 0);
    // For smooth scroll:
    // window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pathname]); // Re-run this effect whenever the pathname changes

  return null; // This component doesn't render any UI
}

export default ScrollToTop;