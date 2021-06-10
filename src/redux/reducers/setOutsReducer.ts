import { ActionData } from "../../models/interfaces";

const initState = {
	setouts: [],
	loading: false,
	until: 10,
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
			console.log(action);

			return {
				...state,
				loading: false,
				setouts: action.addDate,
			};

		case "FETCH_SETOUTS_FAIL":
			return {
				...state,
				loading: false,
				setouts: [],
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
