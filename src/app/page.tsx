"use client";

import styles from "./page.module.css";

// components
import Header from "./components/header";
import Service from "./components/service";
import About from "./components/about"
import Image from "next/image";
// components

import staticFiles from "./components/importStatic";

export default function Home() {
  return (
    <main>
      <Header />
      <About/>
      <div className={styles.clips}>
        <iframe src="https://vk.com/video_ext.php?oid=-196122987&id=456239179&hash=9059459eb2544a67" height={400} frameBorder="0" allowFullScreen={true} allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
        <div className={styles.servicesSection}>
        <h1 className={styles.servicesTitle}>Обзор услуг</h1>

      <div className={styles.services}>
        <Service
          name="Строительство гаражей из сендвич-панелей"
          image={staticFiles.images.build_garages}
          price="5000₽/м2"
        />
        <Service
          name="3D визуализация вашего гаража"
          image={staticFiles.images.visualisation}
          price="9500₽"
        />
        <Service
          name="Строительство домов из сэндвич-панелей"
          image={staticFiles.images.houses}
          price="4500₽/м²"
        />
                <Service
          name="Строительство гаражей из сендвич-панелей"
          image={staticFiles.images.build_garages}
          price="5000₽/м2"
        />
        <Service
          name="3D визуализация вашего гаража"
          image={staticFiles.images.visualisation}
          price="9500₽"
        />
        <Service
          name="Строительство домов из сэндвич-панелей"
          image={staticFiles.images.houses}
          price="4500₽/м²"
        />
                <Service
          name="Строительство гаражей из сендвич-панелей"
          image={staticFiles.images.build_garages}
          price="5000₽/м2"
        />
        <Service
          name="3D визуализация вашего гаража"
          image={staticFiles.images.visualisation}
          price="9500₽"
        />
        <Service
          name="Строительство домов из сэндвич-панелей"
          image={staticFiles.images.houses}
          price="4500₽/м²"
        />
                <Service
          name="Строительство гаражей из сендвич-панелей"
          image={staticFiles.images.build_garages}
          price="5000₽/м2"
        />
        <Service
          name="3D визуализация вашего гаража"
          image={staticFiles.images.visualisation}
          price="9500₽"
        />
        <Service
          name="Строительство домов из сэндвич-панелей"
          image={staticFiles.images.houses}
          price="4500₽/м²"
        />
        </div>
      </div>
    </main>
  );
}
