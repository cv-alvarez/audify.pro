import { useRef, useState } from 'react';
import styles from './SimulacionDemo.module.css';

const Collapsible = ({ pregunta, respuesta }: { pregunta: string; respuesta: string }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen(!open);
    if (contentRef.current) {
      const el = contentRef.current;
      el.style.maxHeight = !open ? el.scrollHeight + 'px' : '0px';
    }
  };

  return (
    <div className={`${styles.collapsibleItem} ${open ? styles.open : ''}`}>
      <div className={styles.collapsibleSummary} onClick={toggle}>
        <span className={styles.icon}>{open ? '➖' : '➕'}</span>
        {pregunta}
      </div>
      <div
        className={styles.collapsibleContent}
        ref={contentRef}
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <p>{respuesta}</p>
      </div>
    </div>
  );
};

export default Collapsible;