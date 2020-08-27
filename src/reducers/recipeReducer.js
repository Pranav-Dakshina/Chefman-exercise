export const recipeReducer = function(state = [], action) {
  switch (action.type) {
    case "GET_RECIPE":
      return [
        {
          item: "Tomatoes",
          amount: 1000
        },
        {
          item: "Basil",
          amount: 100
        },
        {
          item: "Mozzarella Cheese",
          amount: 500
        },
        {
          item: "Double zero flour",
          amount: 4000
        },
        {
          item: "Herbs",
          amount: 100
        },
        {
          item: "Chilli Flakes",
          amount: 500
        }, {
          item: "Tomatoes",
          amount: 1000
        },
        {
          item: "Basil",
          amount: 100
        },
        {
          item: "Mozzarella Cheese",
          amount: 500
        },
        {
          item: "Double zero flour",
          amount: 4000
        },
        {
          item: "Herbs",
          amount: 100
        },
        {
          item: "Chilli Flakes",
          amount: 500
        }, {
          item: "Tomatoes",
          amount: 1000
        },
        {
          item: "Basil",
          amount: 100
        },
        {
          item: "Mozzarella Cheese",
          amount: 500
        },
        {
          item: "Double zero flour",
          amount: 4000
        },
        {
          item: "Herbs",
          amount: 100
        },
        {
          item: "Chilli Flakes",
          amount: 500
        }
      ];
    case "REMOVE_RECIPE": {
      const stateClone = state.slice();
      stateClone.splice(action.payload, 1);
      return stateClone;
    }
    case "CHANGE_AMOUNT": {
      const stateClone = state.slice();
      stateClone[action.payload.id] = {
        ...stateClone[action.payload.id],
        amount: parseInt(action.payload.amt)
      };
      return stateClone;
    }
    default:
      return state;
  }
};

export const sumReducer = function(state=0, action) {
  switch (action.type) {
    case "TOTAL":
      return state + action.payload;
    case "CHANGE_TOTAL":
      return state + action.payload;
    default:
      return state;
  }
}
