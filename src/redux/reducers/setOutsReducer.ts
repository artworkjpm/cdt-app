import { ActionData } from "../../models/interfaces";

const initState = {
	setouts: [],
	loading: false,
	until: 5,
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

		case "LOAD_SCROLLER":
			return {
				...state,
				until: action.until,
			};

		default:
			return state;
	}
};
