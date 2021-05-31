import { Action, Dispatch } from "redux";
import axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";

export const fetchSetouts = () => (dispatch: Dispatch<Action>) => {
	dispatch({
		type: "FETCH_SETOUTS_REQUEST",
	});
	const responsePromise = axios.get("http://localhost:5000/setouts");
	const response$ = from(responsePromise);
	response$
		.pipe(
			map((response) => {
				console.log(response);
				dispatch({
					type: "FETCH_SETOUTS_SUCCESS",
					payload: response.data,
				});
			})
		)
		.subscribe();
};
