import { IsNotEmpty } from "class-validator";

export class CreateTask {
	@IsNotEmpty()
	boardId: string;

	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	type: string;
}

export class UpdateTask extends CreateTask {
	@IsNotEmpty()
	id: string;
}
