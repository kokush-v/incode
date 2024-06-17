import dotenv from "dotenv";
dotenv.config();

const CORS = {
	origin: process.env.NODE_ENV === "dev" ? "http://localhost:5173" : process.env.CLIENT_URL, // Specify the allowed origin
	methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
	allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
	exposedHeaders: ["Authorization"], // Specify the headers exposed to the client
	credentials: true, // Allow credentials
};

export { CORS };
