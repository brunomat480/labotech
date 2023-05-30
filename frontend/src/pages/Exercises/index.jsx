import React from "react";

import aline from "../../assets/images/aline.svg";

export function Exercises() {
  return (
    <div className="bg-background h-screen px-7 container mx-auto">
      <div className="bg-cinza_claro flex items-center rounded-3xl mx-10">
        <img src={aline} alt="Aline" className="w-32 text-white ml-16" />
        <p className="text-white font-normal ml-20 text-xl">
          Quer revisitar sua ficha de anamnese?
          <a
            href="#"
            className="text-orange underline ml-1 hover:text-white"
            id="ficha_anamnese"
          >
            Clique aqui e veja agora
          </a>
          !
        </p>
      </div>
      <div>
        <p className="text-white">
          Lembre de fazer seus
          <br />
          exercícios diários!
        </p>
        <img src={aline} alt="Aline" className="w-40 text-white" />
      </div>
    </div>
  );
}