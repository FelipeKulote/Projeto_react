const api = {
  createCard: async (card) => {
    fetch({
      method: "POST",
      headers: new Headers({ "Content-type": "application/json" }),
      body: JSON.stringify(card),
    });
  },
};
