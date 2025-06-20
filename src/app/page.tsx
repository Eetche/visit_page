import styles from "./page.module.css";

// components
import Header from "./components/header";
import Service from "./components/service";
// components

// images
import build_garages from "./static/build_garages.jpg";
import visualisation from "./static/visualisation.jpg"

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.services}>
        <Service
          name="Строительство гаражей из сендвич-панелей"
          image={build_garages}
          price="5000₽/м2"
        />
        <Service
          name="3D визуализация вашего гаража"
          image={visualisation}
          price="9500₽"
        />
      </div>
    </main>
  );
}
