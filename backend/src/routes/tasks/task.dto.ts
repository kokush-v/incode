import { IsNotEmpty } from "class-validator";

export class CreateTask {
	@IsNotEmpty()
	boardId: number;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	type: string;
}

export class UpdateTask extends CreateTask {
	@IsNotEmpty()
	id: number;
}
