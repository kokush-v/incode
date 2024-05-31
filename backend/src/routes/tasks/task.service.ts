import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateTask } from "./task.dto";

@Injectable()
export class TaskService {
	private taskRepository = new PrismaClient().task;

	private taskSelectProperties: Prisma.TaskSelect = {
		id: true,
		title: true,
		description: true,
		type: true,
	};

	async getMany() {
		return this.taskRepository.findMany({ select: this.taskSelectProperties });
	}

	async create({ title, description, boardId, type }: CreateTask) {
		return this.taskRepository.create({
			data: {
				title,
				description,
				type,
				board: {
					connect: {
						id: boardId,
					},
				},
			},
			select: this.taskSelectProperties,
		});
	}
}
