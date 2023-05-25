import { combineReducers } from "redux";
import { UserReducer } from "./services/reducer";

export const layoutModuleReducer = combineReducers({
  UserReducer,
});

export type LayoutModuleReducer = ReturnType<typeof layoutModuleReducer>;
