'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingBag } from 'lucide-react';
import styles from './CoursesSalesToast.module.css';

interface BuyerNotification {
  name: string;
  role: string;
  location: string;
}

const BUYERS: BuyerNotification[] = [
  { name: 'Lucas Ferreira', role: 'Concurso Caixa', location: 'São Paulo - SP' },
  { name: 'Mariana Azevedo', role: 'Concurso INSS', location: 'Rio de Janeiro - RJ' },
  { name: 'Rodrigo Medeiros', role: 'CNU Bloco 7', location: 'Belo Horizonte - MG' },
  { name: 'Camila Guimarães', role: 'Área Policial', location: 'Curitiba - PR' },
  { name: 'Gabriel Pires', role: 'Tribunais (TRE/TRT)', location: 'Brasília - DF' },
  { name: 'Beatriz Vasconcelos', role: 'Concurso Correios', location: 'Recife - PE' },
  { name: 'Juliana Sampaio', role: 'Área Fiscal', location: 'Porto Alegre - RS' },
  { name: 'Fernando Antunes', role: 'Concurso Banco do Brasil', location: 'Salvador - BA' },
  { name: 'Patrícia Nogueira', role: 'Carreiras Administrativas', location: 'Goiânia - GO' },
  { name: 'Thiago Castilho', role: 'Concurso Caixa', location: 'Campinas - SP' },
  { name: 'Larissa Albuquerque', role: 'CNU Bloco 4', location: 'Fortaleza - CE' },
  { name: 'Vinícius Ramos', role: 'Tribunais', location: 'Florianópolis - SC' },
  { name: 'Carolina Mendonça', role: 'Concurso INSS', location: 'Manaus - AM' },
  { name: 'Renato Tavares', role: 'Carreiras Policiais', location: 'Belém - PA' },
  { name: 'Vanessa Fonseca', role: 'Concurso Correios', location: 'Vitória - ES' },
];

export default function CoursesSalesToast() {
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
    if (Math.random() > 0.4) {
      const minutesAgo = Math.floor(Math.random() * 8) + 1;
      return `há ${minutesAgo} min`;
    }
    return 'agora mesmo';
  }, []);

  const triggerNext = useCallback(() => {
    if (isDismissed) return;

    // Intervalo aleatório entre notificações (10 a 22 segundos)
    const nextInterval = Math.floor(Math.random() * (22000 - 10000 + 1)) + 10000;

    timerRef.current = setTimeout(() => {
      const randomBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      setActiveNotification({
        buyer: randomBuyer,
        timeText: getFormattedTime(),
      });
      setIsAnimatingOut(false);

      // Exibe por 5 segundos
      hideTimerRef.current = setTimeout(() => {
        setIsAnimatingOut(true);

        setTimeout(() => {
          setActiveNotification(null);
          setIsAnimatingOut(false);
          triggerRef.current();
        }, 400); // Duração da animação de saída
      }, 5000);
    }, nextInterval);
  }, [isDismissed, getFormattedTime]);

  useEffect(() => {
    triggerRef.current = triggerNext;
  }, [triggerNext]);

  useEffect(() => {
    // Primeiro toast após 8 segundos
    const initialTimer = setTimeout(() => {
      const initialBuyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      setActiveNotification({
        buyer: initialBuyer,
        timeText: 'agora mesmo',
      });

      hideTimerRef.current = setTimeout(() => {
        setIsAnimatingOut(true);
        setTimeout(() => {
          setActiveNotification(null);
          setIsAnimatingOut(false);
          triggerRef.current();
        }, 400);
      }, 5000);
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!activeNotification || isDismissed) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${isAnimatingOut ? styles.slideOut : styles.slideIn}`}>
        <div className={styles.iconWrapper}>
          <ShoppingBag size={18} />
        </div>
        <div className={styles.content}>
          <div className={styles.buyerInfo}>
            <span className={styles.buyerName}>{activeNotification.buyer.name}</span>{' '}
            <span className={styles.actionText}>adquiriu o Guia de Pegadinhas</span>
          </div>
          <div className={styles.targetInfo}>
            <span className={styles.role}>{activeNotification.buyer.role}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.location}>{activeNotification.buyer.location}</span>
            <span className={styles.time}>{activeNotification.timeText}</span>
          </div>
        </div>
        <button
          className={styles.closeBtn}
          onClick={() => {
            setIsDismissed(true);
            setActiveNotification(null);
          }}
          aria-label="Fechar notificação"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

