import { ActionData } from "../../models/interfaces";

const initState = {
	designs: [],
	users: [],
	loading: false,
	until: 10,
	error: null,
};

export const designsReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "SAVE_USERS_ARRAY":
			return {
				...state,
				users: action.payload,
			};

		case "SAVE_USERS_ERROR":
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload.error,
			};
		case "FETCH_DESIGNS_REQUEST":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_DESIGNS_SUCCESS":
			return {
				...state,
				designs: action.editedArray,
			};
		case "FETCH_DESIGNS_FAILURE":
			return {
				...state,
				loading: false,
				users: [],
				error: action.error,
			};
		case "LOAD_SCROLLER":
			return {
				...state,
				until: action.until,
			};

		default:
			return state;
	}
};
