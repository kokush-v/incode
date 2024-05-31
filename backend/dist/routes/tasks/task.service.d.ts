import { CreateTask } from "./task.dto";
export declare class TaskService {
    private taskRepository;
    private taskSelectProperties;
    getMany(): Promise<{
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
    create({ title, description, boardId, type }: CreateTask): Promise<{
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
}
