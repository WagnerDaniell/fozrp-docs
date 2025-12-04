import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

// Componente Header
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <h1 className={styles.logoMain}>FOZ<span className={styles.logoSub}>RP</span></h1>
          </div>
          
          <p className={styles.heroSubtitle}>
            Um universo brutal com três cidades interligadas. 
            Sua reputação é sua única moeda.
          </p>

          <div className={styles.buttons}>
            <Link
              className={styles.btnConnect}
              to="mtasa://189.127.164.145:22919">
              <span>CONECTAR AGORA</span>
            </Link>
            <Link
              className={styles.btnRules}
              to="/regras/servidor">
              <span>REGRAS DO SERVIDOR</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Componente Cidades
function CitiesSection() {
  const cities = [
    {
      name: 'LOS SANTOS',
      icon: '🏙️',
      desc: 'O coração urbano onde negócios, crimes e disputas de poder se misturam.',
    },
    {
      name: 'SAN FIERRO',
      icon: '🌁',
      desc: 'O território das corridas e drift. O asfalto é disputado metro a metro.',
    },
    {
      name: 'LAS VENTURAS',
      icon: '🎰',
      desc: 'Onde o deserto esconde segredos lucrativos e a máfia controla a sorte.',
    }
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          ESCOLHA SEU <span>DESTINO</span>
        </h2>
        <div className={styles.citiesGrid}>
          {cities.map((city, idx) => (
            <div key={idx} className={styles.cityCard}>
              <div className={styles.cityIcon}>{city.icon}</div>
              <h3 className={styles.cityName}>{city.name}</h3>
              <p className={styles.cityDesc}>{city.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Quick Start
function QuickStart() {
  const [copied, setCopied] = useState(false);
  const serverIp = "mtasa://189.127.164.145:22919";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <div className={styles.quickCard}>
          <div className={styles.quickText}>
            <h2>PRONTO PARA A AÇÃO?</h2>
            <p style={{color:'#888'}}>Entre agora e comece sua história.</p>
          </div>
          
          <div className={styles.ipWrapper}>
            <input 
              readOnly 
              value={serverIp} 
              className={styles.ipCode}
              onClick={(e) => e.target.select()}
            />
            <button 
              className={styles.copyBtn}
              onClick={handleCopy}>
              {copied ? 'COPIADO!' : 'COPIAR IP'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Foz Roleplay">
      <HomepageHeader />
      <main>
        <CitiesSection />
        <QuickStart />
      </main>
    </Layout>
  );
}