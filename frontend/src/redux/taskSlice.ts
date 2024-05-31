import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types";

interface MoveItemPayload {
	data: Task;
}

interface ReorderItemPayload {
	column: string;
	data: Task[];
}

interface TaskInitialState {
	tasks: {
		todoColumn: Task[];
		inProgressColumn: Task[];
		doneColumn: Task[];
	};
}

const initial: TaskInitialState = {
	tasks: {
		todoColumn: [],
		inProgressColumn: [],
		doneColumn: [],
	},
};

const taskSlice = createSlice({
	name: "tasks",
	initialState: initial,
	reducers: {
		addItem: ({ tasks }, { payload }: PayloadAction<MoveItemPayload>) => {
			tasks[payload.data.type as keyof typeof tasks].push(payload.data);
		},
		moveItem: ({ tasks }, { payload }: PayloadAction<MoveItemPayload>) => {
			Object.keys(tasks).forEach((key) => {
				tasks[key as keyof typeof tasks] = tasks[key as keyof typeof tasks].filter(
					(item) => item.id !== payload.data.id
				);
			});
			tasks[payload.data.type as keyof typeof tasks].push(payload.data);
		},
		reorderItems: ({ tasks }, { payload }: PayloadAction<ReorderItemPayload>) => {
			tasks[payload.column as keyof typeof tasks] = payload.data;
		},
	},
});

export const { addItem, moveItem, reorderItems } = taskSlice.actions;

export default taskSlice.reducer;
