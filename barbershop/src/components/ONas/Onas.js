import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
export default function Onas() {
  return (
    <div className="mt-28">
      Onas
      <div className="w-full relative">
        <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src={bgVideo} type="video/mp4"></source>
        </video>

          <p className="text-white w-1/2 absolute m-auto top-1/2 left-0 right-0">
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
  );
}
