import { Actions } from "./actions";
import {
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./constants";
import {
  AdditionalItem,
  DetailedInfoItem,
  ProgressBoard,
  UserInfo,
} from "../../../../entities/User/interfaces";

const initialState = {
  userInfo: {} as UserInfo,
  progressBoard: {} as ProgressBoard,
  detailedInfo: [] as DetailedInfoItem[],
  additions: [] as AdditionalItem[],
  error: {} as any,
};

export type UserState = typeof initialState;

export const UserReducer = (
  state: UserState = initialState,
  action: Actions,
) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.userInfo,
        progressBoard: action.payload.progressBoard,
        detailedInfo: action.payload.detailedInfo,
        additions: action.payload.additions,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
