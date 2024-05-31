/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_KEYS } from "../../consts";
import { Task, TaskForm } from "../../types";
import { addItem } from "../taskSlice";

export const taskApi = createApi({
	reducerPath: "taskApi",
	baseQuery: fetchBaseQuery({
		baseUrl: APP_KEYS.BACKEND_FULL_URL,
	}),
	tagTypes: ["Task"],
	endpoints: (builder) => ({
		getTasks: builder.query<Task[], null>({
			providesTags: ["Task"],
			query() {
				return {
					url: APP_KEYS.BACKEND_KEYS.TASK.ROOT,
					credentials: "include",
				};
			},
			async onQueryStarted(_args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					data.forEach((task: Task) => {
						dispatch(addItem({ data: task }));
					});
				} catch (error) {}
			},
		}),

		addTask: builder.mutation<Task, TaskForm>({
			invalidatesTags: ["Task"],
			query(data) {
				return {
					url: APP_KEYS.BACKEND_KEYS.TASK.CREATE,
					method: "POST",
					body: data,
				};
			},
			async onQueryStarted(_args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(addItem({ data }));
				} catch (error) {}
			},
		}),
	}),
});

export const { useAddTaskMutation, useGetTasksQuery } = taskApi;
