import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { CreateTask } from "./task.dto";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Post("create")
	async create(@Request() req, @Body() taskBody: CreateTask) {
		return this.taskService.create(taskBody);
	}

	@Get()
	async getAll() {
		return this.taskService.getMany();
	}
}
