'use client';

import { useState, useEffect } from 'react';
import styles from './LiveViewersToast.module.css';

export default function LiveViewersToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    // Generate a believable random number of people currently on the page
    const initialViewers = Math.floor(Math.random() * (75 - 25 + 1)) + 25;
    setViewers(initialViewers);

    // Wait 4 seconds before showing the toast, so it catches attention after initial read
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Make the number fluctuate slightly to seem more realistic/live
    const fluctuateTimer = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(14, prev + change); // Ensure it doesn't drop to an unbelievably low number
      });
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(fluctuateTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.toast}>
      <div className={styles.pulseIndicator}>
        <div className={styles.pulseDot}></div>
      </div>
      <div className={styles.content}>
        <span className={styles.number}>{viewers}</span> pessoas estão visualizando esta página agora.
      </div>
      <button 
        className={styles.closeBtn} 
        onClick={() => setIsVisible(false)}
        aria-label="Fechar notificação"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
