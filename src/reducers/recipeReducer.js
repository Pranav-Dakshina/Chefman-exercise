export const recipeReducer = function(state = {}, action) {
  switch (action.type) {
    case "GET_RECIPE":
      return {
        ...state,
        recipe: [
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
        }
      ] };
    case "REMOVE_RECIPE": {
      const stateClone = state.recipe.slice();
      stateClone.splice(action.payload.id, 1);
      let sum = stateClone ? stateClone.reduce((acc, item) => acc + parseFloat(item.price), 0) : 0;
      return {
        ...state,
        recipe: stateClone,
        sum
      };
    }
    case "CHANGE_AMOUNT": {
      const stateClone = state.recipe.slice();
      stateClone[action.payload.id] = {
        ...stateClone[action.payload.id],
        amount: parseInt(action.payload.amt)
      };
      return {
        ...state,
        recipe: stateClone
      };
    }
    // case "TOTAL":
    //   let sum = state.recipe ? state.recipe.reduce((acc, item) => acc + parseFloat(item.price)) : 0;
    //   console.log(sum);
    //   return {
    //     ...state,
    //     sum: sum
    //   }

    case "CHANGE_PRICE": {
      const stateClone = state.recipe.slice();
      stateClone[action.payload.id] = {
        ...stateClone[action.payload.id],
        price: action.payload.price
      };
      let sum = stateClone ? stateClone.reduce((acc, item) => acc + parseFloat(item.price), 0) : 0;
      return {
        ...state,
        recipe: stateClone,
        sum
      };
    }
    default:
      return state;
  }
};
