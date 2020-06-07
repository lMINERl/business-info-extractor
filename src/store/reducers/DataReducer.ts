import * as actionTypes from '../actions/DataActions';
import { Action } from '../actions/DataActions';
import { DataModel, WorkingState } from '../../models/DataModel';

export interface ReducerState {
  dataList: DataModel[];
  filteredList: DataModel[];
}

const data: DataModel[] = [
  {
    _id: 1,
    name: 'Mohamed',
    state: WorkingState.working,
    productivity: { value: 80, isIncreased: true }
  },
  {
    _id: 2,
    name: 'Ahmed',
    state: WorkingState.ide,
    productivity: { value: 15, isIncreased: false }
  },
  {
    _id: 3,
    name: 'Omar',
    state: WorkingState.working,
    productivity: { value: 1, isIncreased: true }
  },
  {
    _id: 4,
    name: 'Sara',
    state: WorkingState.holiday,
    productivity: { value: 26, isIncreased: true }
  }
];

const initialState: ReducerState = {
  dataList: data,
  filteredList: []
};

export const DataReducer: () => ReducerState = (state: ReducerState = initialState, action: Action = {}): ReducerState => {
  let newDataList: DataModel[] = [...state.dataList];
  let newFilteredList: DataModel[] = [...newDataList];

  switch (action.type) {
    case actionTypes.DataAction.GET_ALL_DATA:
      {
        const items: DataModel[] = action.payload;
        newDataList = [...items];
        newFilteredList = [...items];
      }
      break;
    case actionTypes.DataAction.GET_DATA_BY_NAME:
      {
        // accept only alphanumeric variables and ignoring special characters
        const name: string = action.payload.toLowerCase().replace(/[^a-z0-9]/gi, '');
        newFilteredList = newDataList.filter((c) => c.name.toLowerCase().search(name) !== -1);
      }
      break;
    case actionTypes.DataAction.DELETE_DATA_BY_ID:
      {
        const _id: number | null | undefined = action.payload;

        if (_id !== null && _id !== undefined) {
          const index: number = newDataList.findIndex((t) => t._id === _id);
          if (index !== -1) {
            const arr: DataModel[] = [];
            newDataList = arr.concat(newDataList.slice(0, index), newDataList.slice(index + 1, newDataList.length));
            newFilteredList = [...newDataList];
          }
        }
      }
      break;
    case actionTypes.DataAction.ADD_DATA:
      {
        const dataId = Date.now();
        const newData: DataModel = { ...action.payload, _id: dataId };

        newDataList.push(newData);
        newFilteredList = [...newDataList];
      }

      break;
    default:
      break;
  }
  return {
    ...state,
    dataList: newDataList,
    filteredList: newFilteredList
  };
};

// export default DataReducer;
