import { Heading } from "@chakra-ui/react";
import Board from "./components/board";

function App() {
	return (
		<div className="p-3">
			<Heading textAlign={"center"}>Board</Heading>
			<Board />
		</div>
	);
}

export default App;
