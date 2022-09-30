import "./card.css";

export function Card({ name, atk, def, type }) {
  return (
    <div className="listaCards">
      <section className="cardInfos">
        <span className="desc-infos">Nome da carta:</span>
        <h3>Mago Negro</h3>
      </section>
      <section className="cardInfos">
        <span className="desc-infos">Tipo:</span>
        <h3>Mago</h3>
      </section>
      <div className="cardPower">
        <section className="cardInfos">
          <span className="desc-infos">ATK:</span>
          <h4>2500</h4>
        </section>
        <section className="cardInfos">
          <span className="desc-infos">DEF:</span>
          <h4>2100</h4>
        </section>
      </div>
    </div>
  );
}
