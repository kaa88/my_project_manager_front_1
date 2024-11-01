import { call, put, takeLatest } from "redux-saga/effects";
import {
  clearUser,
  fetchAcceptCookies,
  fetchChangeEmail,
  fetchChangePassword,
  fetchUser,
  fetchUserDelete,
  fetchVerifyEmail,
  setUser,
} from "./slice";
import { userStatusActions } from "./statusSlice";
import { userApi } from "../api/api";

// TODO: refactor, clean duplicates
// may be delete unnecessary sagas & actions

function* fetchUserWorker(action: ReturnType<typeof fetchUser>): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.getUser>> = yield call(
      userApi.getUser,
      action.payload
    );
    yield put(setUser(response.data));
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

function* fetchDeleteWorker(
  action: ReturnType<typeof fetchUserDelete>
): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.deleteUser>> = yield call(
      userApi.deleteUser,
      action.payload
    );
    yield put(clearUser());
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

function* fetchChangeEmailWorker(
  action: ReturnType<typeof fetchChangeEmail>
): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.changeEmail>> =
      yield call(userApi.changeEmail, action.payload);
    yield put(setUser(response.data.data));
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

function* fetchVerifyEmailWorker(
  action: ReturnType<typeof fetchVerifyEmail>
): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.verifyEmail>> =
      yield call(userApi.verifyEmail, action.payload);
    yield put(setUser({ isEmailVerified: true }));
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

function* fetchChangePasswordWorker(
  action: ReturnType<typeof fetchChangePassword>
): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.changePassword>> =
      yield call(userApi.changePassword, action.payload);
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

function* fetchAcceptCookiesWorker(
  action: ReturnType<typeof fetchAcceptCookies>
): unknown {
  const actionName = action.type;
  yield put(userStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof userApi.acceptCookies>> =
      yield call(userApi.acceptCookies, action.payload);
    yield put(setUser(response.data));
    yield put(
      userStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.message,
      })
    );
  } catch (error) {
    yield put(userStatusActions.reject({ actionName, error }));
  }
}

export function* userSagaWatcher() {
  yield takeLatest(fetchUser.type, fetchUserWorker);
  yield takeLatest(fetchUserDelete.type, fetchDeleteWorker);
  yield takeLatest(fetchChangeEmail.type, fetchChangeEmailWorker);
  yield takeLatest(fetchVerifyEmail.type, fetchVerifyEmailWorker);
  yield takeLatest(fetchChangePassword.type, fetchChangePasswordWorker);
  yield takeLatest(fetchAcceptCookies.type, fetchAcceptCookiesWorker);
}
