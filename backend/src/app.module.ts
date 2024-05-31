import { Module } from "@nestjs/common";
import { BoardModule } from "./routes/board/board.module";
import { TaskModule } from "./routes/tasks/task.module";

@Module({
	imports: [TaskModule, BoardModule],
	providers: [],
	controllers: [],
})
export class AppModule {}
