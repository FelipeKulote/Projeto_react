import "./card.css";

export function Card ({ name, atk, def, type }){
    return (
        <div className="listaCards">
            <h2>{name}</h2>
            <section className="cardInfos">
                <span className="desc-infos">Tipo:</span>
                <h3>{type}</h3>
            </section>
            <section className="cardInfos">
                <span className="desc-infos">ATK:</span>
                <h3>{atk}</h3>
            </section>
            <section className="cardInfos">
                <span className="desc-infos">DEF:</span>
                <h3>{def}</h3>
            </section>
        </div>
    )
}