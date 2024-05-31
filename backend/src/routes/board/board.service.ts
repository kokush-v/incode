import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateBoard } from "./board.dto";

@Injectable()
export class BoardService {
	private boardRepository = new PrismaClient().board;

	private boardSelectProperties: Prisma.BoardSelect = {
		id: true,
		name: true,
	};

	async getOne() {
		return;
	}

	async create({ name }: CreateBoard) {
		return this.boardRepository.create({ data: { name }, select: this.boardSelectProperties });
	}
}
