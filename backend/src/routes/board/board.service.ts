import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateBoard, UpdateBoard } from "./board.dto";

@Injectable()
export class BoardService {
	private boardRepository = new PrismaClient().board;

	private boardSelectProperties: Prisma.BoardSelect = {
		id: true,
		name: true,
	};

	async getOne(name: string) {
		return this.boardRepository.findFirstOrThrow({
			where: { name },
			select: this.boardSelectProperties,
		});
	}

	async create({ name }: CreateBoard) {
		return this.boardRepository.create({ data: { name }, select: this.boardSelectProperties });
	}

	async update({ id, name }: UpdateBoard) {
		return this.boardRepository.update({
			where: { id },
			data: { name },
			select: this.boardSelectProperties,
		});
	}
}
