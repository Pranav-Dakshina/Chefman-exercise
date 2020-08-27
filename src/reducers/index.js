import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { retailReducer } from './retailReducer';

export default combineReducers({
  recipe: recipeReducer,
  retail: retailReducer
});
