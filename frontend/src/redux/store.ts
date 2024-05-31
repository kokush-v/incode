// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { boardApi } from "./api/boardApi";
import { taskApi } from "./api/taskApi";
import boardSlice from "./boardSlice";
import taskSlice from "./taskSlice";

const store = configureStore({
	reducer: {
		[boardApi.reducerPath]: boardApi.reducer,
		[taskApi.reducerPath]: taskApi.reducer,
		taskSlice,
		boardSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat([boardApi.middleware, taskApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
