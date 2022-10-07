import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
export default function Onas() {
  return (
    <div className="mt-28">
      <div className="w-full relative">
        <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src={bgVideo} type="video/mp4"></source>
        </video>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-3xl pb-8 text-center">O NÁS</h1>
          <p className=" w-[360px] h-[360] pl-8 pr-8 pt-4 pb-4 text-justify border-4 border-white">
            Sme novootvorený barbershop v krásnom tichom prostredí mesta Žilina,
            kde panuje dobrá náladička a pohoda. Služby ktoré ponúkame sú luxusné
            pánske strihy, úpravy brady, voskovanie, farbenie vlasov a mnoho
            ďalších detailov. V cene z ponúkaných služieb si môžeš dopriať kávičku
            alebo ak si nechal doma auto tak kvalitný alkohol pre chlapa. Aktuálne
            máme obsadené jedno kreslo s Villiz Barberom. Druhé kreslo comming
            soon.{" "}
          </p>
          </div>
      </div>
    </div>
  );
}
