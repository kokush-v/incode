import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CORS } from "./config/config";

async function bootstrap() {
	const port = process.env.PORT || 3000;
	const app = await NestFactory.create(AppModule);
	app.enableCors(CORS);
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix("api/v1");
	await app.listen(port);
}

bootstrap();
