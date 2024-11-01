import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRegister,
  fetchLogout,
  fetchLogin,
  fetchCheckAuth,
  setIsAuth,
} from "./slice";
import { authStatusActions } from "./statusSlice";
import { authApi } from "../api/api";
import { clearUser, setUser } from "../../../entities/user";
import { clearToken } from "../api/tokenRefreshMiddleware";

function* fetchRegisterWorker(
  action: ReturnType<typeof fetchRegister>
): unknown {
  const actionName = action.type;
  yield put(authStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof authApi.register>> = yield call(
      authApi.register,
      action.payload
    );

    // token is set by middleware
    yield put(setUser(response.data.data));

    yield put(
      authStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.data.message,
      })
    );
  } catch (error) {
    yield put(authStatusActions.reject({ actionName, error }));
  }
}

function* fetchLoginWorker(action: ReturnType<typeof fetchLogin>): unknown {
  const actionName = action.type;
  yield put(authStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof authApi.login>> = yield call(
      authApi.login,
      action.payload
    );

    // token is set by middleware
    yield put(setUser(response.data.data));

    yield put(
      authStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.data.message,
      })
    );
  } catch (error) {
    yield put(authStatusActions.reject({ actionName, error }));
  }
}

function* fetchLogoutWorker(action: ReturnType<typeof fetchLogout>): unknown {
  const actionName = action.type;
  yield put(authStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof authApi.logout>> = yield call(
      authApi.logout,
      action.payload
    );

    clearToken();
    yield put(setIsAuth(false));
    yield put(clearUser());

    yield put(
      authStatusActions.fulfill({
        actionName,
        status: response.status,
        message: response.data.message,
      })
    );
  } catch (error) {
    yield put(authStatusActions.reject({ actionName, error }));
  }
}

function* fetchCheckAuthWorker(
  action: ReturnType<typeof fetchCheckAuth>
): unknown {
  const actionName = action.type;
  yield put(authStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof authApi.checkAuth>> = yield call(
      authApi.checkAuth
    );
    yield put(setIsAuth(true));
    yield put(
      authStatusActions.fulfill({
        actionName,
        status: response.status,
      })
    );
  } catch (error) {
    yield put(setIsAuth(false));
    yield put(authStatusActions.reject({ actionName, error }));
  }
}

export function* authSagaWatcher() {
  yield takeLatest(fetchRegister.type, fetchRegisterWorker);
  yield takeLatest(fetchLogin.type, fetchLoginWorker);
  yield takeLatest(fetchLogout.type, fetchLogoutWorker);
  yield takeLatest(fetchCheckAuth.type, fetchCheckAuthWorker);
}
