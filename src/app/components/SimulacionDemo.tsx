'use client';

import { useState, useEffect } from 'react';
import styles from './SimulacionDemo.module.css';
import Collapsible from './Collapsible';

type Step = 'inicio' | 'transcribiendo' | 'resumiendo' | 'listo';
type Tab = 'resumen' | 'transcripcion' | 'preguntas';

export default function SimulacionDemo() {
  const [step, setStep] = useState<Step>('inicio');
  const [tab, setTab] = useState<Tab>('resumen');

  useEffect(() => {
    if (step === 'transcribiendo') {
      setTimeout(() => setStep('resumiendo'), 2000);
    } else if (step === 'resumiendo') {
      setTimeout(() => setStep('listo'), 2000);
    }
  }, [step]);

  const handleClick = () => {
    if (step === 'inicio') {
      setStep('transcribiendo');
    }
  };

  const renderTabContent = () => {
    switch (tab) {
      case 'resumen':
        return (
          <div className={styles.resultContent}>
            <h3>Resumen general:</h3>
            <p>
              La clase cubre los fundamentos de derivadas, incluyendo definición formal,
              interpretación gráfica, y ejemplos aplicados con funciones reales.
            </p>
            <h4>Sección 1: Introducción</h4>
            <ul>
              <li>¿Qué es una derivada?</li>
              <li>Cómo se interpreta en una gráfica.</li>
            </ul>
            <h4>Sección 2: Ejemplos</h4>
            <ul>
              <li>Función lineal</li>
              <li>Función cuadrática</li>
            </ul>
          </div>
        );
      case 'transcripcion':
        return (
          <div className={styles.resultContent}>
            <h3>Transcripción completa:</h3>
            <p>
              Bienvenidos a la clase de hoy. Vamos a hablar sobre derivadas. Primero, ¿qué es una
              derivada? Es el cambio instantáneo de una función respecto al tiempo o cualquier otra
              variable independiente. Imaginemos una recta tangente que toca una curva en un solo
              punto...
            </p>
            <p>
              Ahora tomemos una función cuadrática como f(x) = x². Su derivada, usando la regla de
              potencias, será f′(x) = 2x. Esto significa que la pendiente cambia dependiendo del
              punto evaluado...
            </p>
            <p>
              También abordaremos cómo usar las derivadas para encontrar máximos, mínimos, y puntos
              de inflexión...
            </p>
          </div>
        );
      case 'preguntas':
          const preguntas = [
    {
      pregunta: '¿Cuál es la definición formal de derivada?',
      respuesta: 'La derivada de una función en un punto es el límite del cociente de los incrementos, representando el cambio instantáneo de la función respecto a una variable.'
    },
    {
      pregunta: '¿Cómo se interpreta la derivada en una gráfica?',
      respuesta: 'Se interpreta como la pendiente de la recta tangente a la curva en un punto determinado.'
    },
    {
      pregunta: '¿Cuál es la derivada de f(x) = x² y cómo se calcula?',
      respuesta: 'Aplicando la regla de potencias, la derivada es f′(x) = 2x.'
    },
    {
      pregunta: '¿Para qué sirven las derivadas en el análisis de funciones?',
      respuesta: 'Ayudan a encontrar máximos, mínimos, puntos de inflexión y entender el comportamiento de una función.'
    }
  ];
  return (
    <div className={styles.resultContent}>
      <h3>Preguntas generadas:</h3>
      <div className={styles.collapsibleContainer}>
        {preguntas.map((item, index) => (
          <Collapsible key={index} pregunta={item.pregunta} respuesta={item.respuesta} />
        ))}
      </div>
    </div>
  );
      default:
        return null;
    }
  };

  return (
    <div className={styles.demoContainer}>
      <h2 className={styles.sectionTitle}>✨ Prueba visual de cómo funciona</h2>
      <div className={styles.uploadBox}>
        <div className={styles.fileFake}>🎧 Clase_matematicas.mp3</div>
        {step === 'inicio' && (
          <button className={styles.button} onClick={handleClick}>
            Generar resumen
          </button>
        )}
        {step === 'transcribiendo' && <p className={styles.loading}>🎧 Transcribiendo audio...</p>}
        {step === 'resumiendo' && <p className={styles.loading}>🧠 Generando resumen...</p>}
      </div>

      {step === 'listo' && (
        <div className={styles.resultBox}>
          <div className={styles.tabs}>
<button
  className={`${styles.tabButton} ${tab === 'resumen' ? styles.activeTab : ''}`}
  onClick={() => setTab('resumen')}
>
  Resumen
</button>

<button
  className={`${styles.tabButton} ${tab === 'transcripcion' ? styles.activeTab : ''}`}
  onClick={() => setTab('transcripcion')}
>
  Transcripción
</button>

<button
  className={`${styles.tabButton} ${tab === 'preguntas' ? styles.activeTab : ''}`}
  onClick={() => setTab('preguntas')}
>
  Preguntas
</button>
          </div>
          {renderTabContent()}
        </div>
      )}
    </div>
  );
}
