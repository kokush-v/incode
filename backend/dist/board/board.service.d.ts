import { CreateBoard } from "./board.dto";
export declare class BoardService {
    private boardRepository;
    private boardSelectProperties;
    getOne(): Promise<void>;
    create({ name }: CreateBoard): Promise<{
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
}
