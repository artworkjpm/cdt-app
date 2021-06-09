import { combineReducers } from "redux";
import { designsReducer } from "./reducers/designsReducer";
import { mainAppReducer } from "./reducers/mainAppReducer";
import { setOutsReducer } from "./reducers/setOutsReducer";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
	designsReducer,
	setOutsReducer,
	mainAppReducer,
});

export default rootReducer;
