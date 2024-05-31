export interface Task {
	id: number;
	title: string;
	description: string;
	type: string;
}

export interface TaskForm extends Omit<Task, "id"> {
	boardId: number;
}

export interface Board {
	id: number;
	name: string;
}

export interface BoardForm extends Omit<Board, "id"> {}
