"use client";

import styles from "./page.module.css";

// components
import Header from "./components/header";
import Service from "./components/service";
// components

// images
import build_garages from "./static/build_garages.jpg";
import visualisation from "./static/visualisation.jpg";

import bridge from "@vkontakte/vk-bridge";

import { useEffect } from "react";

const OWNER_ID = "-196122987";
const APP_ID = 53788374;
const SERVICE_TOKEN =
  "800be978800be978800be97865833f57fb8800b800be978e85c207754e413e1e1c3af70";

export default function Home() {
  useEffect(() => {
    const initVK = async () => {
      try {
        await bridge.send("VKWebAppInit");

        const tokenData = await bridge
          .send("VKWebAppGetAuthToken", {
            app_id: APP_ID,
            scope: "market, video",
          })

        console.log(tokenData)

          if (tokenData.access_token) {
            localStorage.setItem("vk_token", tokenData.access_token)
            console.log("token:", tokenData.access_token)
          }
      } catch (err) {
        console.log("vk init error:", err)
      }
    };

    initVK()
    console.log("init vk")
  }, []);

  async function getWall(access_token : any) {
    await fetch(
      `https://api.vk.com/method/wall.get?owner_id=${OWNER_ID}&access_token=800be978800be978800be97865833f57fb8800b800be978e85c207754e413e1e1c3af70&v=5.199`
    ).then(async (data) => {
      const wallJson = await data.json();

      console.log(wallJson["response"]);
    });
  }

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
