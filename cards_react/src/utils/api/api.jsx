const defaultUrl = "https://cards-yugioh-api.herokuapp.com/cards";

export const api = {
  createCard: async (card) => {
    fetch(defaultUrl + "/create", {
      method: "POST",
      headers: new Headers({ "Content-type": "application/json" }),
      body: JSON.stringify(card),
    });
  },

  getAllCards: async () => {
    const response = await fetch(defaultUrl + "/");
    const allCards = await response.json();
    return allCards;
  },

  deleteCard: async (cardId) => {
    const response = await fetch(defaultUrl + "/delete/" + cardId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const cardDeleted = response.json();
    return cardDeleted;
  },
};
