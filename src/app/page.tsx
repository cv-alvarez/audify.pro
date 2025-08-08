import styles from './Home.module.css';
import EmailForm from './components/EmailForm';
import SimulacionDemo from './components/SimulacionDemo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faMicrophone,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';

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
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Convierte tus audios en resúmenes claros con IA
        </h1>
        <p className={styles.subtitle}>
          Sube una clase, reunión o entrevista, y obtén un resumen profesional en segundos.
        </p>
        <EmailForm />

      </section>

      {/* CÓMO FUNCIONA */}
      <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
  <h2 className={styles.sectionTitle}>🎬 Prueba cómo funciona Audify</h2>
  <SimulacionDemo />

      </section>

      {/* CASOS DE USO */}
<section className={styles.paraQuien}>
  <h2 className={styles.sectionTitle}>¿Para quién es Audify?</h2>
  <div className={styles.rolesGrid}>
    <div className={styles.roleCard}>
      <FontAwesomeIcon icon={faGraduationCap} className={styles.roleIcon} />
      <div className={styles.roleTitle}>Estudiantes</div>
      <div className={styles.roleText}>
        Convierte tus clases en resúmenes claros para estudiar mejor.
      </div>
    </div>
    <div className={styles.roleCard}>
      <FontAwesomeIcon icon={faBriefcase} className={styles.roleIcon} />
      <div className={styles.roleTitle}>Profesionales</div>
      <div className={styles.roleText}>
        Actas automáticas de reuniones y llamadas importantes.
      </div>
    </div>
    <div className={styles.roleCard}>
      <FontAwesomeIcon icon={faMicrophone} className={styles.roleIcon} />
      <div className={styles.roleTitle}>Entrevistadores</div>
      <div className={styles.roleText}>
        Transcribe entrevistas y genera insights fácilmente.
      </div>
    </div>
    <div className={styles.roleCard}>
      <FontAwesomeIcon icon={faChalkboardTeacher} className={styles.roleIcon} />
      <div className={styles.roleTitle}>Docentes / Coaches</div>
      <div className={styles.roleText}>
        Genera materiales y resúmenes de tus sesiones grabadas.
      </div>
    </div>
  </div>
</section>




      {/* PLANES */}
      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Planes disponibles</h2>
        <div className={styles.planList}>
          <div className={styles.planBox}>
            <h3>Gratuito</h3>
            <p>Hasta 3 audios por mes</p>
            <p className={styles.price}>$0 / mes</p>
          </div>
          <div className={`${styles.planBox} ${styles.planHighlight}`}>
            <h3>Pro</h3>
            <p>Hasta 50 audios por mes</p>
            <p className={styles.price}>$25 / mes</p>
          </div>
          <div className={styles.planBox}>
            <h3>SuperPro</h3>
            <p>Hasta 200 audios por mes</p>
            <p className={styles.price}>$79 / mes</p>
          </div>
        </div>
        <p className={styles.note}>🎁 Descuento especial para los primeros suscriptores</p>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <strong>¿Qué tipos de audio puedo subir?</strong>
            <p>MP3, WAV, M4A y otros formatos comunes.</p>
          </div>
          <div className={styles.faqItem}>
            <strong>¿Cuánto tarda el procesamiento?</strong>
            <p>Entre 10 segundos y 2 minutos según la duración.</p>
          </div>
          <div className={styles.faqItem}>
            <strong>¿Puedo editar el resumen?</strong>
            <p>Sí. Puedes ajustarlo visualmente antes de guardarlo.</p>
          </div>
          <div className={styles.faqItem}>
            <strong>¿Cuándo estará disponible?</strong>
            <p>En las próximas semanas. Suscríbete para enterarte primero.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Audify. Todos los derechos reservados.
      </footer>
    </main>
  );
}
