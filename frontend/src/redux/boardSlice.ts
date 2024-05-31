import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../types";

interface AddBoardPayload {
	board: Board;
}

interface BoardInitialState {
	board: Board | null;
}

const initial: BoardInitialState = {
	board: null,
};
const boardSlice = createSlice({
	name: "board",
	initialState: initial,
	reducers: {
		setBoard: (state, { payload }: PayloadAction<AddBoardPayload>) => {
			state.board = payload.board;
		},
	},
});

export const { setBoard } = boardSlice.actions;

export default boardSlice.reducer;
