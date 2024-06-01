export const BACKEND_KEYS = {
	SERVER_URL: "http://127.0.0.1:3001",
	API_VERSION: "/api/v1",
	TASK: {
		ROOT: (id: number) => `task/${id}`,
		CREATE: "task/create",
		UPDATE: "task/update",
		DELETE: (id: number) => `task/delete/${id}`,
	},
	BOARD: {
		ROOT: (id: number) => `board/${id}`,
		CREATE: "board/create",
		UPDATE: "board/update",
	},
};

export const STORAGE_KEYS = {
	BOARD_ID: "boardId",
};

export const BACKEND_FULL_URL = BACKEND_KEYS.SERVER_URL + BACKEND_KEYS.API_VERSION;
