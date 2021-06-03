import { designsReducer } from "../designsReducer";

describe("designsReducer", () => {
	const initState = {
		designs: [],
		users: [],
		loading: false,
		until: 10,
		error: null,
	};
	const MockUsersArray = [
		{ id: 1, name: "Walter Doe" },
		{ id: 2, name: "John Doe" },
	];

	const MockData = [
		{
			id: 20,
			name: "20th Design",
			courses: 111,
			wales: 333,
			last_updated: "12/04/2021",
			by: "WD",
		},
	];

	test("SAVE_USERS_ARRAY should save passed users to state ", () => {
		let action = { type: "SAVE_USERS_ARRAY", until: 10, payload: { MockUsersArray } };
		expect(designsReducer(initState, action)).toStrictEqual({
			designs: [],
			users: {
				MockUsersArray,
			},
			loading: false,
			until: 10,
			error: null,
		});
	});
	test("FETCH_DESIGNS_SUCCESS should save designs to state ", () => {
		let action = { type: "FETCH_DESIGNS_SUCCESS", until: 10, payload: { MockData } };
		expect(designsReducer(initState, action)).toStrictEqual({
			designs: { MockData },
			users: [],
			loading: false,
			until: 10,
			error: null,
		});
	});
});
