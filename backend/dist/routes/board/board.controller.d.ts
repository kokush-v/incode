import { CreateBoard } from "./board.dto";
import { BoardService } from "./board.service";
export declare class BoardController {
    private boardService;
    constructor(boardService: BoardService);
    create(req: any, taskBody: CreateBoard): Promise<{
        name: string;
        id: number;
        tasks: {
            id: number;
            title: string;
            description: string;
            type: string;
            boardId: number;
        }[];
        _count: {
            tasks: number;
        };
    }>;
    getOne(): Promise<void>;
}
