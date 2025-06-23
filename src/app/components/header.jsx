"use client";

import css from "./header.module.css";

import Image from "next/image";

import phoneSvg from "../public/phone.svg"

export default function Header() {
  const phoneNumber = "+7 (900) 076-44-38";

  async function numberHand() {
    await navigator.clipboard.writeText(phoneNumber);
  }

  return (
    <div className={css.header}>
      <button>Все услуги</button>
      <button>Контакты</button>
      <div className={css.numberDiv}>
          <Image src={phoneSvg} alt="phone.svg"/>
        <p
          onClick={numberHand}
          className={css.number}
          title="Нажмите для копирования"
        >
          {phoneNumber}
        </p>
      </div>
    </div>
  );
}
