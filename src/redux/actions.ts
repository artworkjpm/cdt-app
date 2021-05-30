import { Action, Dispatch } from "redux";
import axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { DesignsItems, NewDesignArrayObject, Users } from "../models/interfaces";
import moment from "moment";

export const fetchUsersData = () => (dispatch: Dispatch<Action>) => {
	axios.get("http://localhost:5000/users").then((user) => {
		dispatch({
			type: "SAVE_USERS_ARRAY",
			payload: user.data,
		});
		dispatch({
			type: "FETCH_DATA_REQUEST",
		});
		const responsePromise = axios.get("http://localhost:5000/designs");
		const response$ = from(responsePromise);
		response$
			.pipe(
				map((response) => {
					const newArray: NewDesignArrayObject[] = [];
					response.data.map((item: DesignsItems) => {
						return newArray.push({
							name: item.name,
							courses: item.courses,
							wales: item.wales,
							last_updated: moment(item.updated).format("DD/MM/YYYY"),
							by: getUserName(item.user_id_last_update, user.data),
						});
					});
					dispatch({
						type: "FETCH_DATA_SUCCESS",
						payload: newArray,
					});
				})
			)
			.subscribe();
	});
};

const getUserName = (userNumber: number, usersArray: [Users]) => {
	return usersArray
		.filter((item) => item.id === userNumber)
		.map((item) => item.name)
		.join();
};

/* [{id: 1, name: "Walter Doe"},
{id: 2, name: "John Doe"}] */
