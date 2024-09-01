import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  fetchData,
  fetchDataError,
  fetchDataPending,
} from "../todos/todosApiReducer";
import { FETCH_DATA_SAGA } from "./actionTypes";

export function* fetchDataSaga() {
  try {
    yield put(fetchDataPending(true));
    const result = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    );
    yield put(fetchData(result.data));
    yield put(fetchDataPending(false));
  } catch (error) {
    yield put(fetchDataError(error.message));
  }
}

export default function* mySaga() {
  yield takeEvery(FETCH_DATA_SAGA, fetchDataSaga);
}
