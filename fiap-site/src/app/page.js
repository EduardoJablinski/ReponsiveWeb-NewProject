"use client";
import BotaoConhecaPlanos from "../../src/app/components/Button/button";
import CabecalhoPadrao from "../../src/app/components/Header/header";
import RodapePadrao from "../../src/app/components/Footer/footer";

export default function Home() {
  return (
    <main>
      <div>
        <CabecalhoPadrao/>
        <main>{/* Conteúdo da página */}</main>
      </div>
    </main>
  );
}
