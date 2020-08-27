export const retailReducer = function(state = [], action) {
  switch (action.type) {
    case "GET_STORE":
      return [
        {
          store: "Walmart",
          delivery: 24,
          price: 10.50
        }, {
          store: "HEB",
          delivery: 48,
          price: 20.10
        }

      ];
    default:
      return state;
  }
};
