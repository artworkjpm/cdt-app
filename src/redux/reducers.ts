import { ActionData } from "../models/interfaces";

const initState = {
	items: [],
	loading: false,
	error: null,
};

export const dataReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "FETCH_DATA_REQUEST":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_DATA_SUCCESS":
			return {
				...state,
				loading: false,
				items: action.payload,
			};

		default:
			return state;
	}
};
