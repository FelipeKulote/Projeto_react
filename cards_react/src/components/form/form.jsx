import { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import "./form.css";

export function Form({ getAll }) {
  const [newCard, setNewCard] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    await api.createCard(newCard);
    await getAll();
    setLoading(false);
  }

  useEffect(() => {
    getAll();
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="loading"> Carregando novo card... </div>
      ) : (
        <section className="form">
          <form onSubmit={handleSubmit} className="form-input">
            <div className="titulo-form">Adicionar nova carta</div>
            <div>
              <span>Nome:</span>
              <input
                type="text"
                name="name"
                required
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
                required
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
                required
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
                required
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
      )}
    </>
  );
}
