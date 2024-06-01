import { Body, Controller, Delete, Get, Param, Post, Put, Request } from "@nestjs/common";
import { CreateTask, UpdateTask } from "./task.dto";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Post("create")
	async create(@Request() req, @Body() taskBody: CreateTask) {
		return this.taskService.create(taskBody);
	}

	@Put("update")
	async update(@Request() req, @Body() taskBody: UpdateTask) {
		return this.taskService.update(taskBody);
	}

	@Delete("delete/:id")
	async delete(@Param("id") id: string) {
		return this.taskService.delete(parseInt(id));
	}

	@Get("/:id")
	async getAll(@Param("id") id: string) {
		return this.taskService.getMany(parseInt(id));
	}
}
