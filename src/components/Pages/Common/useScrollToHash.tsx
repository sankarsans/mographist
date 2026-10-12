// src/hooks/useScrollToHash.js (or inside App.jsx / ScrollToTop.jsx)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Small timeout ensures the DOM element has rendered if navigating across pages
    const timer = setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // If Lenis is active on window, let Lenis smoothly scroll to it
        if (window.__lenis) {
          window.__lenis.scrollTo(element, { offset: -80 }); // adjust offset for your navbar height
        } else {
          // Native fallback
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);
}
