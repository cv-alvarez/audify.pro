'use client';

import { useState } from 'react';
import styles from '../Home.module.css';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar a Firestore, Mailchimp o tu backend
    setSubmitted(true);
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <p className={styles.confirmation}>
          ✅ ¡Gracias por suscribirte! Te avisaremos muy pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo para enterarte primero"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Notificarme
          </button>
        </form>
      )}
    </div>
  );
}