import {
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./constants";

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});
export const getUserSuccess = (data: any) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
export const getUserError = (error: any) => ({
  type: GET_USER_ERROR,
  payload: error,
});

export type Actions =
  | ReturnType<typeof getUserRequest>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserError>;
