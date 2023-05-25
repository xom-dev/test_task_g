import { all, fork } from "redux-saga/effects";
import { layoutModuleSaga } from "./modules/common/Layout/layoutModuleSaga";

const sagas: Array<() => Generator> = [...layoutModuleSaga];

export default function* () {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
