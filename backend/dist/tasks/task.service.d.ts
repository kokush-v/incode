import { CreateTask } from "./task.dto";
export declare class TaskService {
    private taskRepository;
    private taskSelectProperties;
    getMany(): Promise<{
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
    create({ title, description, boardId, type }: CreateTask): Promise<{
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
}
