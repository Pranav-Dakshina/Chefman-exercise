export const retailReducer = function(state = [], action) {
  switch (action.type) {
    case "GET_STORE":
      return [
        {
          store: "Walmart",
          delivery: 24,
          price: 3.10
        }, {
          store: "HEB",
          delivery: 48,
          price: 1.50
        }

      ];
    default:
      return state;
  }
};
