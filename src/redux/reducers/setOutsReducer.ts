import { ActionData } from "../../models/interfaces";

const initState = {
	setouts: [],
	loading: false,
	error: null,
};

export const setOutsReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "FETCH_SETOUTS_REQUEST":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_SETOUTS_SUCCESS":
			return {
				...state,
				loading: false,
				setouts: action.payload,
			};

		default:
			return state;
	}
};
