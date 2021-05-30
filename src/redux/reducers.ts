import { ActionData } from "../models/interfaces";

const initState = {
	designs: [],
	setouts: [],
	users: [],
	loading: false,
	error: null,
};

export const dataReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "SAVE_USERS_ARRAY":
			return {
				...state,
				users: action.payload,
			};
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
				designs: action.payload,
			};
		case "UPDATE_DESIGN_OBJECT":
			return {
				...state,
				designs: action.payload,
			};

		default:
			return state;
	}
};
