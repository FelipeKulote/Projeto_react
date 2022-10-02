import { useEffect, useState } from "react";
import { Card } from "../components/card/card";
import { api } from "../utils/api/api";
import Modal from "react-modal";
import "./home.css";

const customStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};
Modal.setAppElement("#root");

export function Home() {
  const [cardList, setCardList] = useState([]);

  async function getCard() {
    const cards = await api.getAllCards();
    setCardList(cards);
  }
  useEffect(() => {
    getCard();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(!modalOpen);
  }

  const [cardSelecionado, setCardSelecionado] = useState({});
  const marcarCarta = (cardIndex) => {
    const card = { [cardIndex]: (cardSelecionado[cardIndex] || 0) + 1 };
    setCardSelecionado({ ...cardSelecionado, ...card });
  };

  const removerCarta = (cardIndex) => {
    const card = { [cardIndex]: (cardSelecionado[cardIndex] || 0) - 1 };
    setCardSelecionado({ ...cardSelecionado, ...card });
  };

  const botaoAdicionar = (canRender, index) =>
    Boolean(!canRender) && (
      <button className="btnMarker" onClick={() => marcarCarta(index)}>
        Marcar carta
      </button>
    );

  const botaoRemover = (canRender, index) =>
    Boolean(canRender) && (
      <button className="btnRemove" onClick={() => removerCarta(index)}>
        Remover carta
      </button>
    );

  const markerCard = (canRender, index) =>
    Boolean(canRender) && <span className="cardMark">✓</span>;

  return (
    <section className="home">
      <h1 className="titulo">Album de cartas Yu-gi-oh</h1>
      <div className="album">
        {cardList.map((item, index) => {
          return (
            <section>
              <Card
                key={index}
                name={item.name}
                type={item.type}
                atk={item.atk}
                def={item.def}
              />
              {markerCard(cardSelecionado[index], index)}
              <div className="btnsCards">
                <button className="btnInfos" onClick={() => openModal()}>
                  Informações
                </button>
                {botaoAdicionar(cardSelecionado[index], index)}
                {botaoRemover(cardSelecionado[index], index)}
              </div>
            </section>
          );
        })}
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={openModal}
        style={customStyles}
        constentLabel="Informações do card"
      ></Modal>
    </section>
  );
}
