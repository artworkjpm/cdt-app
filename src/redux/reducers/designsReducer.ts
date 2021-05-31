import { ActionData } from "../../models/interfaces";

const initState = {
	designs: [],
	users: [],
	loading: false,
	until: 5,
	error: null,
};

export const designsReducer = (state = initState, action: ActionData) => {
	switch (action.type) {
		case "SAVE_USERS_ARRAY":
			return {
				...state,
				users: action.payload,
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
				designs: action.payload,
			};
		case "UPDATE_DESIGN_OBJECT":
			return {
				...state,
				loading: false,
				designs: action.payload,
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
