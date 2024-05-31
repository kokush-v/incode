/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_KEYS } from "../../consts";
import { Board, BoardForm } from "../../types";
import { setBoard } from "../boardSlice";

export const boardApi = createApi({
	reducerPath: "boardApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_KEYS.BACKEND_FULL_URL,
	}),
	tagTypes: ["Board"],
	endpoints: (builder) => ({
		getBoard: builder.query<Board, null>({
			providesTags: ["Board"],
			query() {
				return {
					url: APP_KEYS.BACKEND_KEYS.BOARD.ROOT,
					credentials: "include",
				};
			},
			async onQueryStarted(_args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(setBoard({ board: data }));
				} catch (error) {}
			},
		}),

		createBoard: builder.mutation<Board, BoardForm>({
			invalidatesTags: ["Board"],
			query(data) {
				return {
					url: APP_KEYS.BACKEND_KEYS.BOARD.CREATE,
					method: "POST",
					body: data,
				};
			},
			async onQueryStarted(_args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(setBoard({ board: data }));
				} catch (error) {}
			},
		}),
	}),
});

export const { useCreateBoardMutation, useGetBoardQuery } = boardApi;
