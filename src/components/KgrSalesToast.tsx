'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Tractor } from 'lucide-react';
import styles from './SalesToast.module.css';

interface BuyerNotification {
  name: string;
  role: string;
  location: string;
}

const BUYERS: BuyerNotification[] = [
  { name: 'João Silva', role: 'Produtor de Soja', location: 'Sorriso - MT' },
  { name: 'Maria Santos', role: 'Produtora de Milho', location: 'Rio Verde - GO' },
  { name: 'Carlos Oliveira', role: 'Produtor de Café', location: 'Patrícia - MG' },
  { name: 'Ana Costa', role: 'Produtora Leiteira', location: 'Castro - PR' },
  { name: 'Pedro Almeida', role: 'Técnico Agrícola', location: 'Cruz Alta - RS' },
  { name: 'Luciana Ferreira', role: 'Produtora de Feijão', location: 'Unaí - MG' },
  { name: 'Roberto Lima', role: 'Produtor de Algodão', location: 'Primavera do Leste - MT' },
  { name: 'Fernanda Rocha', role: 'Extensionista Rural', location: 'Passo Fundo - RS' },
  { name: 'Marcos Pereira', role: 'Produtor de Arroz', location: 'Pelotas - RS' },
  { name: 'Juliana Martins', role: 'Produtora de Hortaliças', location: 'Ibiúna - SP' },
  { name: 'Rafael Souza', role: 'Técnico em Agropecuária', location: 'Dourados - MS' },
  { name: 'Patrícia Gomes', role: 'Produtora de Frutas', location: 'Petrolina - PE' },
  { name: 'Eduardo Ribeiro', role: 'Produtor de Gado de Corte', location: 'Barretos - SP' },
  { name: 'Camila Cardoso', role: 'Engenheira Agrônoma', location: 'Londrina - PR' },
  { name: 'Bruno Nogueira', role: 'Produtor de Mandioca', location: 'Cruz das Almas - BA' },
  { name: 'Aline Barbosa', role: 'Produtora de Mel', location: 'São Miguel do Oeste - SC' },
  { name: 'Thiago Monteiro', role: 'Produtor de Cana', location: 'Ribeirão Preto - SP' },
  { name: 'Vanessa Duarte', role: 'Técnica Agrícola', location: 'Chapadão do Sul - MS' },
  { name: 'Diego Alves', role: 'Produtor de Trigo', location: 'Não-Me-Toque - RS' },
  { name: 'Renata Moura', role: 'Produtora de Ovos', location: 'Bastos - SP' },
];

export default function KgrSalesToast() {
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
          <Tractor size={20} />
        </div>

        <div className={styles.content}>
          <div className={styles.headerRow}>
            <span className={styles.buyerName}>
              {buyer.name}
            </span>
            <span className={styles.time}>{timeText}</span>
          </div>

          <p className={styles.actionText}>
            garantiu o acesso ao <strong>Kit Gestão da Roça</strong>
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