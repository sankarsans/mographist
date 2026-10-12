import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  // 1. Initialize Lenis once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // Note: 2.2 can feel sluggish on enterprise sites, 1.2–1.6 is recommended
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Reset scroll immediately whenever the URL/route changes
  useEffect(() => {
    if (lenisRef.current) {
      // "immediate: true" bypasses the smooth duration and jumps straight to 0
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Fallback for native window
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}
