import * as actionTypes from '../actions/login';
import { Action } from '../actions/login';
interface ReducerState {
  [key: string]: any;
}

export const LoginReducer = (state: ReducerState = {}, action: Action) => {
  let newState = { ...state };

  switch (action.type) {
    case actionTypes.LoginActions.SET_COMPONENT_STATE: {
      if (action.payload && action.payload.target) {
        newState = { ...state, [action.payload.target.id]: action.payload.target.value };
      }
    }
  }

  return { ...newState };
};
