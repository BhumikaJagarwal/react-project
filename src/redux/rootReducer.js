import { reducer } from "./reducer";
import {combineReducers} from 'redux';


export const rootReducer=combineReducers({
  ourstate:reducer
})