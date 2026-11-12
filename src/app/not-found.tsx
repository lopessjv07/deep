import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>Erro 404</span>
        </div>

        <div className={styles.errorCode}>404</div>

        <h1 className={styles.title}>Página não encontrada</h1>

        <p className={styles.description}>
          O conteúdo que você está procurando não existe, foi desativado ou o endereço digitado está incorreto.
        </p>

        <Link href="/" className={styles.button}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}

