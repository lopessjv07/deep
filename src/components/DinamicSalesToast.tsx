'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Gift } from 'lucide-react';
import styles from './SalesToast.module.css';

interface BuyerNotification {
  name: string;
  location: string;
}

const BUYERS: BuyerNotification[] = [
  { name: 'Mariana Costa', location: 'São Paulo - SP' },
  { name: 'Fernanda Oliveira', location: 'Belo Horizonte - MG' },
  { name: 'Camila Rodrigues', location: 'Curitiba - PR' },
  { name: 'Juliana Almeida', location: 'Porto Alegre - RS' },
  { name: 'Patrícia Santos', location: 'Campinas - SP' },
  { name: 'Luciana Ferreira', location: 'Goiânia - GO' },
  { name: 'Renata Lima', location: 'Florianópolis - SC' },
  { name: 'Beatriz Martins', location: 'Rio de Janeiro - RJ' },
  { name: 'Vanessa Rocha', location: 'Ribeirão Preto - SP' },
  { name: 'Aline Barbosa', location: 'Joinville - SC' },
  { name: 'Daniela Gomes', location: 'Uberlândia - MG' },
  { name: 'Carolina Souza', location: 'Londrina - PR' },
  { name: 'Gabriela Ribeiro', location: 'Sorocaba - SP' },
  { name: 'Letícia Cardoso', location: 'Brasília - DF' },
  { name: 'Priscila Monteiro', location: 'Vitória - ES' },
  { name: 'Tatiane Duarte', location: 'Caxias do Sul - RS' },
  { name: 'Amanda Nogueira', location: 'São José dos Campos - SP' },
  { name: 'Débora Moura', location: 'Maringá - PR' },
];

export default function DinamicSalesToast() {
  const [activeNotification, setActiveNotification] = useState<{
    buyer: BuyerNotification;
    timeText: string;
  } | null>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<() => void>(() => {});

  const getFormattedTime = useCallback(() => {
    const now = new Date();
    if (Math.random() > 0.4) {
      const minutesAgo = Math.floor(Math.random() * 8) + 1;
      return `há ${minutesAgo} min`;
    } else {
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${mins}`;
    }
  }, []);

  const triggerNextNotification = useCallback(() => {
    if (isDismissed) return;

    const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
    const timeText = getFormattedTime();

    setIsAnimatingOut(false);
    setActiveNotification({ buyer: randomBuyer, timeText });

    hideTimerRef.current = setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setActiveNotification(null);
        setIsAnimatingOut(false);

        const nextInterval = Math.floor(Math.random() * 10000) + 12000;
        timerRef.current = setTimeout(() => {
          triggerRef.current();
        }, nextInterval);
      }, 400);
    }, 6000);
  }, [isDismissed, getFormattedTime]);

  useEffect(() => {
    triggerRef.current = triggerNextNotification;
  }, [triggerNextNotification]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      triggerRef.current();
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!activeNotification || isDismissed) return null;

  const { buyer, timeText } = activeNotification;

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${isAnimatingOut ? styles.slideOut : styles.slideIn}`}>
        <div className={styles.iconWrapper}>
          <Gift size={20} />
        </div>

        <div className={styles.content}>
          <div className={styles.headerRow}>
            <span className={styles.buyerName}>
              {buyer.name}
            </span>
            <span className={styles.time}>{timeText}</span>
          </div>

          <p className={styles.actionText}>
            garantiu o <strong>Kit Amigo Secreto Sem Climão</strong>
          </p>

          <span className={styles.locationText}>
            📍 {buyer.location}
          </span>
        </div>

        <button
          className={styles.closeBtn}
          onClick={() => {
            setIsDismissed(true);
            setActiveNotification(null);
          }}
          aria-label="Fechar notificação"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

