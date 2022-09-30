import { useState } from "react";
// import { Card } from "../card/card";
import { api } from "../../utils/api/api"
import "./form.css";

export function Form() {
  const [newCard, setNewCard] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    api.createanime(newCard);
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit} className="form-input">
        <div className="titulo-form">Novo card</div>
        <div>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setNewCard({ ...newCard, name: e.target.value });
            }}
          />
        </div>
        <div>
          <span>Tipo:</span>
          <input
            type="text"
            name="type"
            onChange={(e) => {
              setNewCard({ ...newCard, type: e.target.value });
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
            type="number"
            name="def"
            onChange={(e) => {
              setNewCard({ ...newCard, def: e.target.value });
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
/* 
<div className="cardList">
            { { cardList.map((item, index) => {
              return (
                <Card
                name= { item.name }
                type= { item.type }
                atk= { item.atk }
                def= { item.def } />
              )
            }) } }
          
            </div> */