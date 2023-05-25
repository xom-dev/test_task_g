import { call, put, takeLatest } from "redux-saga/effects";
import { getUserError, getUserSuccess } from "./actions";
import { GET_USER_REQUEST } from "./constants";
import { User } from "../../../../entities/User/service";
import { UserData } from "../../../../entities/User/interfaces";

function* getUserRequestSaga() {
  try {
    // @ts-ignore
    const response: UserData = yield call(User.getUsers);
    yield put(getUserSuccess(response));
  } catch (error: any) {
    yield put(getUserError(error));
  }
}

export function* userSagaWatcher() {
  yield takeLatest(GET_USER_REQUEST, getUserRequestSaga);
}
