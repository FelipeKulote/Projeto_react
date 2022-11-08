import { useEffect, useState } from "react";
import { Form } from "../components/form/form";
import { Card } from "../components/card/card";
import { api } from "../utils/api/api";
import Modal from "react-modal";
import "./home.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    width: "40vw",
    height: "30vh",
    textAlign: "center",
    color: "white",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.9)",
  },
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

  const [editCard, setEditCard] = useState(false);
  function editCardItens(e) {
    e.preventDefault();
    const editedCard = {
      id: uniqueCard.id,
      name: e.target.name.value,
      type: e.target.type.value,
      atk: e.target.atk.value,
      def: e.target.def.value,
    };
    const newCardList = cardList;
    newCardList.map((item, index) => {
      if (item.id === editedCard.id) {
        newCardList.splice(index, 1, editedCard);
        setCardList(newCardList);
        handleModal();
      }
    });
    setEditCard(false);
    api.updateCard(editedCard);
  }

  function deleteCard(cardId) {
    api.deleteCard(cardId);
    const newCardList = cardList;
    newCardList.map((card, index) => {
      if (card.id === cardId) {
        newCardList.splice(index, 1);
        setCardList(newCardList);
        handleModal();
      }
    });
  }

  const [modalOpen, setModalOpen] = useState(false);
  function handleModal() {
    setModalOpen(!modalOpen);
    setEditCard(false);
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

  const [uniqueCard, setUniqueCard] = useState({});

  return (
    <section className="home">
      <Form getAll={getCard} />
      <h1 className="titulo">Album de cartas Yu-gi-oh</h1>
      <div className="album">
        {cardList.map((item, index) => {
          return (
            <section key={index}>
              <Card
                name={item.name}
                type={item.type}
                atk={item.atk}
                def={item.def}
              />
              {markerCard(cardSelecionado[index], index)}
              <div className="btnsCards">
                <button
                  className="btnInfos"
                  onClick={() => {
                    setUniqueCard(item);
                    handleModal();
                  }}
                >
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
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Informações do card"
      >
        {editCard ? (
          <section className="form">
            <form onSubmit={editCardItens} className="form-input">
              <div className="titulo-form">Adicionar nova carta</div>
              <div>
                <span>Nome:</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={uniqueCard.name}
                  required
                />
              </div>
              <div>
                <span>Tipo:</span>
                <input
                  type="text"
                  name="type"
                  defaultValue={uniqueCard.type}
                  required
                />
              </div>
              <div>
                <span>ATK:</span>
                <input
                  type="number"
                  name="atk"
                  defaultValue={uniqueCard.atk}
                  required
                />
              </div>
              <div>
                <span>DEF:</span>
                <input
                  type="number"
                  name="def"
                  defaultValue={uniqueCard.def}
                  required
                />
              </div>
              <button type="submit" className="submit_btn">
                Enviar
              </button>
            </form>
          </section>
        ) : (
          <section>
            <h3>{uniqueCard.name}</h3>
            <h3>{uniqueCard.type}</h3>
            <h3>{uniqueCard.atk}</h3>
            <h3>{uniqueCard.def}</h3>
            <div className="modalButtons">
              <button
                className="btnEdit"
                onClick={() => {
                  setEditCard(true);
                }}
              >
                Editar
              </button>
              <button
                className="btnDelete"
                onClick={() => {
                  deleteCard(uniqueCard.id);
                }}
              >
                Deletar
              </button>
            </div>
          </section>
        )}
      </Modal>
    </section>
  );
}
