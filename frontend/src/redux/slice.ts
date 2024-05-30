import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types";

interface MoveItemPayload {
	column: string;
	data: Task;
}

interface ReorderItemPayload {
	column: string;
	data: Task[];
}

const initial = {
	todoColumn: [
		{ title: "Task 1", description: "Description", id: 1 },
		{ title: "Task 2", description: "Description", id: 2 },
	],
	inProgressColumn: [
		{ title: "Task in progress 1", description: "Description", id: 3 },
		{ title: "Task in progress 2", description: "Description", id: 4 },
	],
	doneColumn: [
		{ title: "Done Task 1", description: "Description", id: 5 },
		{ title: "Done Task 2", description: "Description", id: 6 },
	],
};

const inventorySlice = createSlice({
	name: "inventory",
	initialState: initial,
	reducers: {
		addItem: (state, action: PayloadAction<Task>) => {},
		moveItem: (state, { payload }: PayloadAction<MoveItemPayload>) => {
			Object.keys(state).forEach((key) => {
				state[key as keyof typeof state] = state[key as keyof typeof state].filter(
					(item) => item.id !== payload.data.id
				);
			});
			state[payload.column as keyof typeof state].push(payload.data);
		},
		reorderItems: (state, { payload }: PayloadAction<ReorderItemPayload>) => {
			state[payload.column as keyof typeof state] = payload.data;
		},
	},
});

export const { addItem, moveItem, reorderItems } = inventorySlice.actions;

export default inventorySlice.reducer;
