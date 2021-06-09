import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { DesignsItems, Users } from "../../models/interfaces";
import { fetchUsersFailure, fetchUsersSuccess } from "../actions/designActions";

function* usersSaga() {
	yield all([takeLatest("FETCH_USERS_REQUEST", fetchUsersSaga)]);
}

const getUsers = () => axios.get<Users[]>("http://localhost:5000/users");

function* fetchUsersSaga(): any {
	try {
		const response = yield call(getUsers);
		yield put(fetchUsersSuccess(response.data));
	} catch (e) {
		yield put(
			fetchUsersFailure({
				error: e.message,
			})
		);
	}
}

export default usersSaga;
