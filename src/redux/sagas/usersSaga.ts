import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Users } from "../../models/interfaces";
import { fetchDesigns, fetchUsersFailure, fetchUsersSuccess } from "../actions/designActions";

function* usersSaga() {
	yield all([takeLatest("FETCH_USERS_SAGA", fetchUsersSaga)]);
}

const getUsers = () => axios.get<Users[]>("http://localhost:5000/users");

function* fetchUsersSaga(): any {
	try {
		const response = yield call(getUsers);
		yield put(fetchUsersSuccess(response.data));
		yield put(fetchDesigns(10, response.data));
	} catch (e) {
		yield put(
			fetchUsersFailure({
				error: e.message,
			})
		);
	}
}

export default usersSaga;
