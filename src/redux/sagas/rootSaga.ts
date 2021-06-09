import { all, fork } from "redux-saga/effects";
import designSaga from "./designSaga";
import usersSaga from "./usersSaga";

export function* rootSaga() {
	yield all([fork(usersSaga), fork(designSaga)]);
}
