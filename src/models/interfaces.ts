export interface ActionData {
	type: string;
	payload: any;
}

export interface Users {
	id: number;
	name: string;
}

export interface DesignsItems {
	courses: number;
	id: number;
	name: string;
	status: string;
	updated: string;
	user_id_last_update: number;
	wales: number;
}

export interface NewDesignArrayObject {
	name: string;
	courses: number;
	wales: number;
	last_updated: string;
	by: any;
}
