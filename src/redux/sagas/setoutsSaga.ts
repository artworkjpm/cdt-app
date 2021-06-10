import axios from "axios";
import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
/* const call: any = Effects.call; */

interface RecievedAction extends Action, RecievedProp {
	type: "FETCH_SETOUTS_SAGA";
}
interface RecievedProp {
	until: number;
	//other things here
}

export default function* setOutSagas() {
	yield takeLatest<RecievedAction>("FETCH_SETOUTS_SAGA", fetchSetoutSaga);
}

const getSetouts = (until: number) => axios.get(`http://localhost:5000/setouts?_start=0&_end=${until}`);

function* fetchSetoutSaga(action: RecievedProp): any {
	console.log(action);
	yield put({ type: "FETCH_SETOUTS_REQUEST" });

	try {
		const response = yield call(getSetouts, action.until);
		yield put({ type: "FETCH_SETOUTS_SUCCESS", response });
	} catch (e) {
		console.error(e.message);
		yield put({ type: "FETCH_SETOUTS_FAIL", error: e.message });
	}
}
