"use client";
import React, { useState } from "react";
import WeddingCardsSlider from "./WeddingCardsSlider";
import VideoCards from "./VideoCards";
import SaveTheCards from "./SaveTheCards";
import CardModal from "./CardModal";

function Einvites() {
  const [selectedCard, setSelectedCard] = useState(null);

  
  const weddingCards = [
    { title: "Blooming in Love", img: "https://image.wedmegood.com/e-invite-images/6f72e0ea-ccb0-42a7-aa9f-f806938d1178-cover_(1).JPEG", desc: "Beautiful floral theme wedding card" },
    { title: "Black Garden", img: "https://image.wedmegood.com/e-invite-images/380878c9-0012-4c39-8317-e18b8966efbb-cover.JPEG", desc: "Elegant black theme garden wedding" },
    { title: "Scent of Summer", img: "https://image.wedmegood.com/e-invite-images/ec553b5f-80da-4228-8ff5-7ead0cd50b73-Cover.JPEG", desc: "Bright summer vibes for your wedding" },
  ];

  const videoCards = [
    { title: "Floral Extravaganza", img: "https://image.wedmegood.com/e-invite-images/47b1ab7d-42cd-4355-b82e-a74a11517971-Floral_Extravaganza.JPEG", price: 1799 },
    { title: "We Said Yes", img: "https://image.wedmegood.com/e-invite-images/8d93892e-9f18-4421-a4e6-a4db85fa82cf-We_Said_Yes.JPEG", price: 1999 },
  ];

  const saveCards = [
    { title: "Romantic Bliss", img: "/assets/images/Romantic-Bliss.jpg" },
    { title: "Golden Memories", img: "/assets/images/Golden-Memories.jpg" },
  ];

  return (
    <div className=" mt-16">
      <WeddingCardsSlider cards={weddingCards} onCardClick={setSelectedCard} />
      <VideoCards cards={videoCards} onCardClick={setSelectedCard} />
      <SaveTheCards cards={saveCards} onCardClick={setSelectedCard} />

      {selectedCard && <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </div>
  );
}

export default Einvites;
