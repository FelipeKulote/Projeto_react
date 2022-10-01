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

  const [cardObtido, setCardObtido] = useState({});
  const marcarCarta = (cardIndex) => {
    const card = { [cardIndex]: (cardObtido[cardIndex] || 0) + 1 };
    setCardObtido({ ...cardObtido, ...card });
  };

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
              <span className="cardMark">✓</span>
              <div className="btnsCards">
                <button className="btnInfos" onClick={() => openModal()}>
                  Informações
                </button>
                <button
                  className="btnMarker"
                  onClick={() => marcarCarta(index)}
                >
                  Carta obtida
                </button>
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
