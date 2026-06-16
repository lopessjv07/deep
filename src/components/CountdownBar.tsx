'use client';
import { useEffect, useState } from 'react';
import { Hourglass } from 'lucide-react';
import styles from './CountdownBar.module.css';

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const STORAGE_KEY = 'neurosoma_countdown_target';
    const now = Date.now();
    const storedTarget = localStorage.getItem(STORAGE_KEY);

    if (storedTarget) {
      const targetTime = parseInt(storedTarget, 10);
      if (targetTime > now) {
        setTimeLeft(Math.floor((targetTime - now) / 1000));
        return;
      }
    }

    // Generate a random time between 10 minutes (600s) and 20 minutes (1200s)
    const randomSeconds = Math.floor(Math.random() * (1200 - 600 + 1)) + 600;
    const newTarget = now + randomSeconds * 1000;
    localStorage.setItem(STORAGE_KEY, newTarget.toString());
    setTimeLeft(randomSeconds);
  }, []);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Render an empty banner to prevent layout shift before hydration
  if (timeLeft === null) {
    return <div className={styles.banner}></div>;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.banner}>
      <Hourglass size={16} className={styles.icon} />
      <span className={styles.text}>Acesso ao Kit com desconto encerra em:</span>
      <span className={styles.timer}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
