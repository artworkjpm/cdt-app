import axios from "axios";
import moment from "moment";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { DesignsItems, Users } from "../../models/interfaces";
import { fetchDesignsFailure } from "../actions/designActions";
/* const call: any = Effects.call; */

export default function* designSaga() {
	yield all([takeLatest("FETCH_DESIGNS_SAGA", fetchDesignsSaga)]);
}

const getDesigns = (until: number) => axios.get(`http://localhost:5000/designs?_start=0&_end=${until}`);

function* fetchDesignsSaga(action: any): any {
	yield put({ type: "FETCH_DESIGNS_REQUEST" });

	try {
		const response = yield call(getDesigns, action.until);
		const editedArray = yield call(editData, action.users, response);
		yield put({ type: "FETCH_DESIGNS_SUCCESS", editedArray });
	} catch (e) {
		console.error(e.message);
		yield put(
			fetchDesignsFailure({
				error: e.message,
			})
		);
	}
}

const editData = (users: Users[], data: { data: DesignsItems[] }) => {
	return data.data.map((item: DesignsItems) => {
		return {
			id: item.id,
			name: item.name,
			courses: item.courses,
			wales: item.wales,
			last_updated: moment(item.updated).format("DD/MM/YYYY"),
			by: !item.by ? getUserName(item.user_id_last_update, users) : <div className="initials">{item.by.props.children}</div>,
		};
	});
};

export const getUserName = (userNumber: number, usersArray: Users[]) => {
	let initials = usersArray
		.filter((item) => item.id === userNumber)
		.map((item) => item.name)
		.join("")
		.split(" ")
		.map((el) => el.charAt(0))
		.join("")
		.toUpperCase();

	return (
		<div className="initials" data-initials={initials}>
			{initials}
		</div>
	);
	//[{id: 1, name: "Walter Doe"},{id: 2, name: "John Doe"}]
};
