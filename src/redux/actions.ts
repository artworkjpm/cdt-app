import axios from "axios";
import { Action, Dispatch } from "redux";

export const fetchData = () => async (dispatch: Dispatch<Action>) => {
	const DESIGNS_URL = `http://localhost:5000/designs`;
	dispatch({
		type: "FETCH_DATA_REQUEST",
	});
	axios.get(DESIGNS_URL);
	try {
		const response = await axios.get(DESIGNS_URL);
		console.log(response);

		dispatch({
			type: "FETCH_DATA_SUCCESS",
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: "FETCH_DATA_FAILURE",
			error,
		});
	}
};
