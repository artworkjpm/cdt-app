import axios from "axios";
import * as Effects from "redux-saga/effects";
import { all, put, takeLatest } from "redux-saga/effects";
import { fetchDesignsFailure, fetchDesignsRequest, fetchDesignsSuccess } from "../actions/designActions";
const call: any = Effects.call;

function* designSaga() {
	yield all([takeLatest("FETCH_DESIGNS_SAGA", fetchDesignsSaga)]);
}

const getDesigns = (until: number) => axios.get(`http://localhost:5000/designs?_start=0&_end=${until}`);

function* fetchDesignsSaga(action: any): any {
	yield put(fetchDesignsRequest());

	try {
		const response = yield call(getDesigns, action.until);
		yield put(fetchDesignsSuccess(response.data));
	} catch (e) {
		console.log(e.message);

		yield put(
			fetchDesignsFailure({
				error: e.message,
			})
		);
	}
}

export default designSaga;
