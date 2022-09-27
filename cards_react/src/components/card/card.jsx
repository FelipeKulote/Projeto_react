import { useState } from "react";
import "./card.css";

export function Form() {
  const [newCard, setNewCard] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const card = {
      name: e.target.name.value,
      type: e.target.type.value,
      atk: e.target.atk.value,
      def: e.target.def.value,
    };

    console.log(card);
    console.log(newCard);
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit} className="form-input">
        <div>
          <span>Nome da carta:</span>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setNewCard({ ...newCard, name: e.target.value});
            }}
          />
        </div>
        <div>
          <span>Tipo:</span>
          <input
            type="text"
            name="type"
            onChange={(e) => {
              setNewCard({ ...newCard, type: e.target.value});
            }}
          />
        </div>
        <div>
          <span>ATK:</span>
          <input
            type="number"
            name="atk"
            onChange={(e) => {
              setNewCard({ ...newCard, atk: e.target.value });
            }}
          />
        </div>
        <div>
          <span>DEF:</span>
          <input
            type="text"
            name="def"
            onChange={(e) => {
              setNewCard({ ...newCard, def: e.target.value});
            }}
          />
        </div>
        <button type="submit" className="submit_btn">
          Enviar
        </button>
      </form>
    </section>
  );
}
