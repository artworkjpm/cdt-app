import { all, fork } from "redux-saga/effects";
import usersSaga from "./designsSaga";

export function* rootSaga() {
	yield all([fork(usersSaga)]);
}
