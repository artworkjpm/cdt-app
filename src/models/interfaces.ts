export interface ActionData {
	until: number;
	type: string;
	payload: any;
}

export interface Users {
	id: number;
	name: string;
}

export interface DesignsItems {
	by: any;
	courses: number;
	id: number;
	name: string;
	status: string;
	updated: string;
	user_id_last_update: number;
	wales: number;
}

export interface NewDesignArrayObject {
	id: number;
	name: string;
	courses: number;
	wales: number;
	last_updated: string;
	by: any;
}

export interface SetoutsModel {
	id: number;
	updated?: string;
	last_updated: string;
	name: string;
	machine_name: string;
	machine_width: number;
	courses: number;
}
