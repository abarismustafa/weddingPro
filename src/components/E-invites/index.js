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
    { title: "Vintage Romance", img: "/assets/images/Vintage-Romance.JPG", desc: "Classic vintage style wedding card" },
    { title: "Royal Elegance", img: "/assets/images/Royal-Elegance.JPG", desc: "Luxurious royal-themed wedding invitation" },
    { title: "Garden Bliss", img: "/assets/images/Garden-Bliss.jpg", desc: "Charming garden wedding invite with flowers" },
    { title: "Sunset Love", img: "/assets/images/Sunset-Love.jpg", desc: "Romantic sunset-themed wedding card" },
    { title: "Modern Chic", img: "/assets/images/Modern-Chic.jpg", desc: "Trendy modern wedding invitation" },
    { title: "Rustic Charm", img: "/assets/images/Rustic-Charm.jpg", desc: "Rustic countryside wedding card" },
    { title: "Elegant Gold", img: "https://image.wedmegood.com/e-invite-images/88888888-elegant-gold-cover.JPEG", desc: "Luxury golden themed invite" },
    { title: "Blossom Dreams", img: "https://image.wedmegood.com/e-invite-images/99999999-blossom-dreams-cover.JPEG", desc: "Floral dreamy wedding invitation" },
    { title: "Classic White", img: "https://image.wedmegood.com/e-invite-images/10101010-classic-white-cover.JPEG", desc: "Simple and classy white wedding card" },
  ];

  const videoCards = [
    { title: "Floral Extravaganza", img: "https://image.wedmegood.com/e-invite-images/47b1ab7d-42cd-4355-b82e-a74a11517971-Floral_Extravaganza.JPEG", price: 1799 },
    { title: "We Said Yes", img: "https://image.wedmegood.com/e-invite-images/8d93892e-9f18-4421-a4e6-a4db85fa82cf-We_Said_Yes.JPEG", price: 1999 },
    { title: "Love Story", img: "https://image.wedmegood.com/e-invite-images/23456789-love-story.JPEG", price: 1499 },
    { title: "Forever Together", img: "https://image.wedmegood.com/e-invite-images/98765432-forever-together.JPEG", price: 1899 },
    { title: "Golden Moments", img: "https://image.wedmegood.com/e-invite-images/11111111-golden-moments.JPEG", price: 1599 },
    { title: "Royal Affair", img: "https://image.wedmegood.com/e-invite-images/22222222-royal-affair.JPEG", price: 2199 },
    { title: "Romantic Journey", img: "https://image.wedmegood.com/e-invite-images/33333333-romantic-journey.JPEG", price: 1699 },
    { title: "Summer Vibes", img: "https://image.wedmegood.com/e-invite-images/44444444-summer-vibes.JPEG", price: 1799 },
    { title: "Elegant Union", img: "https://image.wedmegood.com/e-invite-images/55555555-elegant-union.JPEG", price: 2099 },
    { title: "Magic Moments", img: "https://image.wedmegood.com/e-invite-images/66666666-magic-moments.JPEG", price: 1899 },
  ];

  const saveCards = [
    { title: "Romantic Bliss", img: "/assets/images/Romantic-Bliss.jpg" },
    { title: "Golden Memories", img: "/assets/images/Golden-Memories.jpg" },
    { title: "Eternal Love", img: "/assets/images/Eternal-Love.jpg" },
    { title: "Sweet Moments", img: "/assets/images/Sweet-Moments.jpg" },
    { title: "Forever Us", img: "/assets/images/Forever-Us.jpg" },
    { title: "Cherished Day", img: "/assets/images/Cherished-Day.jpg" },
    { title: "Happily Ever After", img: "/assets/images/Happily-Ever-After.jpg" },
    { title: "Together Always", img: "/assets/images/Together-Always.jpg" },
    { title: "Blissful Love", img: "/assets/images/Blissful-Love.jpg" },
    { title: "Our Journey", img: "/assets/images/Our-Journey.jpg" },
  ];

  return (
    <div className="mt-16">
      <WeddingCardsSlider cards={weddingCards} onCardClick={setSelectedCard} />
      <VideoCards cards={videoCards} onCardClick={setSelectedCard} />
      <SaveTheCards cards={saveCards} onCardClick={setSelectedCard} />

      {selectedCard && <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </div>
  );
}

export default Einvites;
