

import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css"

export const metadata: Metadata = {
  title: "metalpanel",
  description: "metalpanel / Строим из сэндвич панелей под ключ"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="favicon" href="/static/favicon.ico"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
