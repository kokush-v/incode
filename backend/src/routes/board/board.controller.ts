import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { CreateBoard } from "./board.dto";
import { BoardService } from "./board.service";

@Controller("board")
export class BoardController {
	constructor(private boardService: BoardService) {}

	@Post("create")
	async create(@Request() req, @Body() taskBody: CreateBoard) {
		return this.boardService.create(taskBody);
	}

	@Get(":id")
	async getOne() {
		return this.boardService.getOne();
	}
}
