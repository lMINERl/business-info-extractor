import { DataModel } from '../../models/DataModel';

export interface Action {
  type?: DataAction;
  // tslint:disable-next-line: no-any
  payload?: any;
}
// actions const
export enum DataAction {
  GET_ALL_DATA = 'GET_ALL_DATA',
  GET_DATA_BY_NAME = 'GET_DATA_BY_NAME',
  DELETE_DATA_BY_ID = 'DELETE_DATA_BY_ID',
  ADD_DATA = 'ADD_DATA',
  ERROR = 'ERROR'
}

// Actions
export const getAllData = (response: DataModel[]): Action => {
  return {
    type: DataAction.GET_ALL_DATA,
    payload: response
  };
};
export const getDataByName = (name: string): Action => {
  return {
    type: DataAction.GET_DATA_BY_NAME,
    payload: name
  };
};
export const deleteDataById = (id: number): Action => {
  return {
    type: DataAction.DELETE_DATA_BY_ID,
    payload: id
  };
};
export const addDataToList = (data: DataModel): Action => {
  return {
    type: DataAction.ADD_DATA,
    payload: data
  };
};
