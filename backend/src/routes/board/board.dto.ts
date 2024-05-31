import { IsNotEmpty } from "class-validator";

export class CreateBoard {
	@IsNotEmpty()
	name: string;
}
