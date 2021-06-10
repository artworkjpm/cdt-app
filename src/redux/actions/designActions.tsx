import { Users } from "../../models/interfaces";

/* USERS */

export const fetchUsers = () => {
	return {
		type: "FETCH_USERS_SAGA",
	};
};

export const fetchUsersSuccess = (payload: Users[]) => ({
	type: "SAVE_USERS_ARRAY",
	payload,
});

/* DESIGNS */

export const fetchDesigns = (until: number, users: Users[]) => {
	return {
		type: "FETCH_DESIGNS_SAGA",
		until,
		users,
	};
};

export const updateAmount = (until: number) => ({
	type: "LOAD_SCROLLER",
	until,
});
