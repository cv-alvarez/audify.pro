// src/app/page.tsx
import Image from "next/image";
import styles from "./Home.module.css";
import EmailForm from "./components/EmailForm";

export const metadata = {
  title: 'Audify: Convierte audios en resúmenes claros',
  description: 'Sube grabaciones de reuniones, clases o entrevistas y obtén un resumen preciso, organizado y fácil de entender.',
  keywords: ['Audify', 'resúmenes de audio', 'IA', 'entrevistas', 'grabaciones', 'transcripción'],
  robots: 'index, follow',
  openGraph: {
    title: 'Audify: Convierte audios en resúmenes claros',
    description: 'Convierte tus grabaciones en textos claros y estructurados usando IA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Audify resumen de audios'
      }
    ],
    type: 'website'
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Audify: Convierte audios en resúmenes claros</h1>
        <p className={styles.subtitle}>
          Sube grabaciones de reuniones, clases o entrevistas y obtén un resumen preciso, organizado y fácil de entender.
        </p>
      </section>

      <div className={styles.imagePlaceholder}>
        <span className={styles.imageText}>[Imagen del producto aquí]</span>
      </div>

      <div className={styles.banner}>
        🚧 Proyecto en construcción 🚧 ¡Lanzamiento pronto!
      </div>

      <EmailForm />

      <section>
        <h2 className={styles.sectionTitle}>Beneficios clave</h2>
        <div className={styles.featuresGrid}>
          <div>
            <h3 className={styles.featureTitle}>🎯 Resúmenes precisos</h3>
            <p className={styles.description}>
              Aprovecha inteligencia artificial para obtener resúmenes claros y bien estructurados.
            </p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>🔊 Soporte para audio largo</h3>
            <p className={styles.description}>
              Procesa grabaciones extensas sin límites ridículos de tiempo.
            </p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>🔒 Privacidad garantizada</h3>
            <p className={styles.description}>
              Tus audios no se comparten. Solo tú accedes a tus archivos y resúmenes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Planes</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Gratuito</h3>
            <p className={styles.price}>$0 / mes</p>
            <p className={styles.description}>Hasta 3 audios por mes.</p>
          </div>
          <div className={`${styles.pricingCard} ${styles.highlight}`}>
            <h3>Pro</h3>
            <p className={styles.price}>$25 / mes</p>
            <p className={styles.description}>Hasta 50 audios por mes.</p>
          </div>
          <div className={styles.pricingCard}>
            <h3>SuperPro</h3>
            <p className={styles.price}>$79 / mes</p>
            <p className={styles.description}>Hasta 200 audios por mes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
        <div className={styles.featuresGrid}>
          <div>
            <h4 className={styles.question}>¿Necesito una cuenta para usar Audify?</h4>
            <p className={styles.answer}>No. Puedes probar sin registrarte. Solo necesitas subir tu audio.</p>
          </div>
          <div>
            <h4 className={styles.question}>¿Puedo usarlo en móvil?</h4>
            <p className={styles.answer}>Sí. Está diseñado para funcionar perfectamente en dispositivos móviles.</p>
          </div>
          <div>
            <h4 className={styles.question}>¿Mis archivos son privados?</h4>
            <p className={styles.answer}>
              Absolutamente. Nadie más puede ver o acceder a tus grabaciones o resúmenes.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Audify. Todos los derechos reservados.
      </footer>
    </main>
  );
}
