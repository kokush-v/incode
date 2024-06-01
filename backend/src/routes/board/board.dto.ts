import { IsNotEmpty } from "class-validator";

export class CreateBoard {
	@IsNotEmpty()
	name: string;
}

export class UpdateBoard extends CreateBoard {
	@IsNotEmpty()
	id: number;
}
