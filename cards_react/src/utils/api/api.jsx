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
};
