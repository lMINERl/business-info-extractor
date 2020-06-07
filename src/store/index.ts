import { combineReducers } from 'redux';
import { DataReducer } from './reducers/DataReducer';
// compining reducers into 1 global state
export const rootReducer = combineReducers({
  data: DataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
