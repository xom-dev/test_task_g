import { RootState } from "../../../../rootReducer";

export const userSelector = (state: RootState) =>
  state.layoutModuleReducer.UserReducer;
