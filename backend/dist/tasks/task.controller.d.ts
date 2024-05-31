import { CreateTask } from "./task.dto";
import { TaskService } from "./task.service";
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    create(req: any, taskBody: CreateTask): Promise<{
        id: number;
        title: string;
        description: string;
        type: string;
        boardId: number;
        board: {
            id: number;
            name: string;
        };
    }>;
    getAll(): Promise<{
        id: number;
        title: string;
        description: string;
        type: string;
        boardId: number;
        board: {
            id: number;
            name: string;
        };
    }[]>;
}
