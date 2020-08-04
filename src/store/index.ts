import { combineReducers } from 'redux';
import { BreadcrumbsReducer } from './reducers/BreadcrumbsReducer';
import { DataReducer } from './reducers/DataReducer';
// compining reducers into 1 global state
export const rootReducer = combineReducers({
  data: DataReducer,
  breadcrumbs: BreadcrumbsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
