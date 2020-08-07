import { combineReducers } from 'redux';
import BreadcrumbsReducer from './reducers/BreadcrumbsReducer';
import { DataReducer } from './reducers/DataReducer';
import { LoginReducer } from './reducers/login';
// compining reducers into 1 global state
export const rootReducer = combineReducers({
  data: DataReducer,
  breadcrumbs: BreadcrumbsReducer,
  login: LoginReducer
});

export type RootState = ReturnType<typeof rootReducer>;
