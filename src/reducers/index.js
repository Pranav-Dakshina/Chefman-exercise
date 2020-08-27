import { combineReducers } from 'redux';
import { recipeReducer, sumReducer } from './recipeReducer';
import { retailReducer } from './retailReducer';

export default combineReducers({
  recipe: recipeReducer,
  retail: retailReducer,
  sum: sumReducer
});
