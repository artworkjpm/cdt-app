import { Action, Dispatch } from "redux";
import axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import moment from "moment";
import { SetoutsModel } from "../../models/interfaces";

export const fetchSetouts = (fromNumber: number) => (dispatch: Dispatch<Action>) => {
	dispatch({
		type: "FETCH_SETOUTS_REQUEST",
	});
	const responsePromise = axios.get(`http://localhost:5000/setouts?_start=0&_end=${fromNumber}`);
	const response$ = from(responsePromise);
	response$
		.pipe(
			map((response) => {
				response.data.map((item: SetoutsModel) => {
					return delete Object.assign(item, { last_updated: moment(item.updated).format("DD/MM/YYYY") })["updated"];
				});
				dispatch({
					type: "FETCH_SETOUTS_SUCCESS",
					payload: response.data,
				});
			})
		)
		.subscribe();
};
export const updateAmount = (until: number) => (dispatch: Dispatch<Action>) => {
	dispatch({
		type: "LOAD_SCROLLER",
		until,
	});
};
