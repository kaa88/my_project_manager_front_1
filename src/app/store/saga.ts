import { all, fork } from "redux-saga/effects";
import { authSagaWatcher } from "../../features/auth";
import { profileSagaWatcher } from "../../entities/profile";
import { userSagaWatcher } from "../../entities/user";

export function* rootSaga() {
  yield all([
    fork(userSagaWatcher),
    fork(authSagaWatcher),
    fork(profileSagaWatcher),
  ]);
}
