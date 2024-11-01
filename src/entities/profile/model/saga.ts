import { call, put, takeLeading } from "redux-saga/effects";
import { fetchProfile, fetchUpdateProfile, setProfile } from "./slice";
import { profileApi } from "../api/api";
import { profileStatusActions } from "./statusSlice";

function* fetchProfileWorker(action: ReturnType<typeof fetchProfile>): unknown {
  const actionName = action.type;
  yield put(profileStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof profileApi.getProfile>> =
      yield call(profileApi.getProfile, action.payload);
    yield put(setProfile(response.data));
    yield put(
      profileStatusActions.fulfill({
        actionName,
        status: response.status,
      })
    );
  } catch (error) {
    yield put(profileStatusActions.reject({ actionName, error }));
  }
}

function* fetchUpdateProfileWorker(
  action: ReturnType<typeof fetchUpdateProfile>
): unknown {
  const actionName = action.type;
  yield put(profileStatusActions.start({ actionName }));
  try {
    const response: Awaited<ReturnType<typeof profileApi.updateProfile>> =
      yield call(profileApi.updateProfile, action.payload);
    yield put(setProfile(response.data));
    yield put(
      profileStatusActions.fulfill({
        actionName,
        status: response.status,
      })
    );
  } catch (error) {
    yield put(profileStatusActions.reject({ actionName, error }));
  }
}

export function* profileSagaWatcher() {
  yield takeLeading(fetchProfile.type, fetchProfileWorker);
  yield takeLeading(fetchUpdateProfile.type, fetchUpdateProfileWorker);
}
