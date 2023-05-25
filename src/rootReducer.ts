import { combineReducers } from "redux";
import { layoutModuleReducer } from "./modules/common/Layout/layoutModuleReducer";

const rootReducer = combineReducers({ layoutModuleReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
