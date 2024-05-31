import { CreateTask } from "./task.dto";
import { TaskService } from "./task.service";
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    create(req: any, taskBody: CreateTask): Promise<{
        boardId: number;
        title: string;
        description: string;
        type: string;
        id: number;
        board: {
            id: number;
            name: string;
        };
    }>;
    getAll(): Promise<{
        boardId: number;
        title: string;
        description: string;
        type: string;
        id: number;
        board: {
            id: number;
            name: string;
        };
    }[]>;
}
