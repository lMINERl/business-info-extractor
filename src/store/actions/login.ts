export enum LoginActions {
  SET_COMPONENT_STATE = 'SET_COMPONENT_STATE',
  GET_ALL_DATA = 'GET_ALL_DATA',
  GET_DATA_BY_NAME = 'GET_DATA_BY_NAME',
  DELETE_DATA_BY_ID = 'DELETE_DATA_BY_ID',
  ADD_DATA = 'ADD_DATA',
  ERROR = 'ERROR'
}

export interface Action {
  type?: LoginActions;
  payload?: any;
}

export const loginComponentState = (data: any): Action => {
  return {
    type: LoginActions.SET_COMPONENT_STATE,
    payload: data
  };
};
