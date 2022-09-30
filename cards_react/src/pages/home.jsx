import { useState } from "react";
import { Card } from "../components/card/card";
import { api } from "../utils/api/api";
import "./home.css";

export function Home() {
  const [cardList, setCardList] = useState([]);
  async function getCard() {
    const cards = await api.getAllCards();
    setCardList(cards);
  }
  getCard();

  return (
    <section className="home">
      <h1 className="titulo">Album de cartas Yu-gi-oh</h1>
      <div className="album">
        {cardList.map((item, index) => {
            return <Card key={index}/>
        })}
      </div>
    </section>
  );
}
