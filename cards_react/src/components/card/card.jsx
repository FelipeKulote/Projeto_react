import { useState } from "react";
import "./card.css";

export function Card({ name, atk, def, type }) {
  const [cardObtido, setCardObtido] = useState({});
  const marcarCarta = (cardIndex) => {
    const card = { [cardIndex]: (cardObtido[cardIndex] || 0) +1 };
    setCardObtido({ ...cardObtido, ...card });
  };

  return (
    <div className="listaCards">
      <section className="cardInfos">
        <span className="desc-infos">Nome da carta:</span>
        <h3>{name}</h3>
      </section>
      <section className="cardInfos">
        <span className="desc-infos">Tipo:</span>
        <h3>{type}</h3>
      </section>
      <div className="cardPower">
        <section className="cardInfos">
          <span className="desc-infos">ATK:</span>
          <h4>{atk}</h4>
        </section>
        <section className="cardInfos">
          <span className="desc-infos">DEF:</span>
          <h4>{def}</h4>
        </section>
      </div>
      <div className="btnsCards">
        <button className="btnInfos">Informações</button>
        <button className="btnMarker" onClick={ () => marcarCarta(index) }>Carta obtida</button>
      <span className="cardMark"></span>
      </div>
      
    </div>
  );
}
