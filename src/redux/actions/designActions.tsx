import { Action, Dispatch } from "redux";
import { DesignsItems, Users } from "../../models/interfaces";

export const fetchUsers = () => {
	return {
		type: "FETCH_USERS_SAGA",
	};
};

export const fetchUsersSuccess = (payload: Users[]) => ({
	type: "SAVE_USERS_ARRAY",
	payload,
});

export const fetchUsersFailure = (payload: any) => ({
	type: "SAVE_USERS_ERROR",
	error: payload,
});

/* DESIGNS */

export const fetchDesigns = (until: number) => {
	return {
		type: "FETCH_DESIGNS_SAGA",
		until,
	};
};

export const fetchDesignsRequest = () => {
	return {
		type: "FETCH_DESIGNS_REQUEST",
	};
};

export const fetchDesignsSuccess = (payload: DesignsItems[]) => ({
	type: "FETCH_DESIGNS_SUCCESS",
	payload,
});

export const fetchDesignsFailure = (payload: any) => ({
	type: "FETCH_DESIGNS_ERROR",
	error: payload,
});

/* export const fetchDesigns = (until: number) => (dispatch: Dispatch<Action>) => {
	axios.get("http://localhost:5000/users").then((user) => {
		dispatch({
			type: "SAVE_USERS_ARRAY",
			payload: user.data,
		});
		dispatch({
			type: "FETCH_DESIGNS_REQUEST",
		});
		const responsePromise = axios.get(`http://localhost:5000/designs?_start=0&_end=${until}`);
		const response$ = from(responsePromise);
		response$
			.pipe(
				map((response) => {
					const newArray: NewDesignArrayObject[] = [];
					response.data.map((item: DesignsItems) => {
						return newArray.push({
							id: item.id,
							name: item.name,
							courses: item.courses,
							wales: item.wales,
							last_updated: moment(item.updated).format("DD/MM/YYYY"),
							by: !item.by ? getUserName(item.user_id_last_update, user.data) : <div className="initials">{item.by.props.children}</div>,
						});
					});
					dispatch({
						type: "FETCH_DESIGNS_SUCCESS",
						payload: newArray,
					});
				})
			)
			.subscribe();
	});
}; */

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

export const updateAmount = (until: number) => (dispatch: Dispatch<Action>) => {
	dispatch({
		type: "LOAD_SCROLLER",
		until,
	});
};
