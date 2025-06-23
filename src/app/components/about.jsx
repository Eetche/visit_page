import css from "./about.module.css";
import Image from "next/image";

import staticFiles from "./importStatic";

export default function About() {
  return (
    <div className={css.about}>
      <Image src={staticFiles.images.logo}
        width={300}
        height={300}
        alt="image.jpg"
        className={css.logo}
      ></Image>
      <ul className={css.markers}>
        <p>metalpanel / Строим из сэндвич панелей под ключ</p>
        <p>🔹Визуализируем Вашу задумку в 3-х-мерной проекции👩‍💻</p>
        <p>🔹Составим "актуальную" смету на материалы🧮</p>
        <p>🔹С "0" под ключ построим Вам помещение🧱</p>
      </ul>
    </div>
  );
}
