import { Body, Controller, Get, Param, Post, Put, Request } from "@nestjs/common";
import { CreateBoard, UpdateBoard } from "./board.dto";
import { BoardService } from "./board.service";

@Controller("board")
export class BoardController {
	constructor(private boardService: BoardService) {}

	@Post("create")
	async create(@Request() req, @Body() taskBody: CreateBoard) {
		return this.boardService.create(taskBody);
	}

	@Put("update")
	async update(@Request() req, @Body() taskBody: UpdateBoard) {
		return this.boardService.update(taskBody);
	}

	@Get(":id")
	async getOne(@Param("id") id: string) {
		return this.boardService.getOne(parseInt(id));
	}
}
