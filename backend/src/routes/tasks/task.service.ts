import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateTask, UpdateTask } from "./task.dto";

@Injectable()
export class TaskService {
	private taskRepository = new PrismaClient().task;

	private taskSelectProperties: Prisma.TaskSelect = {
		id: true,
		title: true,
		description: true,
		type: true,
	};

	async getMany(boardId: string) {
		return this.taskRepository.findMany({
			where: { boardId },
			select: this.taskSelectProperties,
		});
	}

	async update({ id, title, description, type }: UpdateTask) {
		return this.taskRepository.update({
			where: { id },
			data: { title, description, type },
			select: this.taskSelectProperties,
		});
	}

	async delete(id: string) {
		return this.taskRepository.delete({
			where: { id },
		});
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
