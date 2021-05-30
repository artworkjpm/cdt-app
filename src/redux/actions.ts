import { Action, Dispatch } from "redux";
import axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { useSelector } from "react-redux";
import { Users } from "../models/interfaces";

/* const data = useSelector((state: { users: [Users] }) => state.users); */

export const fetchUsersData = () => (dispatch: Dispatch<Action>) => {
	axios.get("http://localhost:5000/users").then((item) => {
		dispatch({
			type: "SAVE_USERS_ARRAY",
			payload: item.data,
		});
	});
};

export const fetchDesignsData = (usersArray: [Users]) => (dispatch: Dispatch<Action>) => {
	console.log(usersArray);

	const DESIGNS_URL = `http://localhost:5000/designs`;
	dispatch({
		type: "FETCH_DATA_REQUEST",
	});
	const responsePromise = axios.get(DESIGNS_URL);
	const response$ = from(responsePromise);
	response$
		.pipe(
			map((response) => {
				const newArray: { name: string; courses: number; wales: number; last_updated: string; by: any }[] = [];
				response.data.map((item: { name: any; courses: any; wales: any; updated: any; user_id_last_update: any }) => {
					return newArray.push({
						name: item.name,
						courses: item.courses,
						wales: item.wales,
						last_updated: item.updated,
						by: getUserName(item.user_id_last_update, usersArray),
					});
				});
				dispatch({
					type: "FETCH_DATA_SUCCESS",
					payload: newArray,
				});
			})
		)
		.subscribe();
};

const getUserName = (userNumber: number, usersArray: [Users]) => {
	return usersArray[0].name;
};

/* [{id: 1, name: "Walter Doe"},
{id: 2, name: "John Doe"}] */
