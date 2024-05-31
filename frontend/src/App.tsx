import { Heading, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Board from "./components/board";
import BoardFormComponent from "./components/forms/board-form";
import Header from "./components/header";
import { boardSelector } from "./redux/selectors";

function App() {
	const board = useSelector(boardSelector);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className="app h-[100vh] bg-transparent">
			<Header modalOpen={onOpen} />
			{board ? (
				<Board />
			) : (
				<Heading marginTop={"7em"} textAlign={"center"}>
					No board selected
				</Heading>
			)}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<BoardFormComponent onClose={onClose} />
				</ModalContent>
			</Modal>
		</div>
	);
}

export default App;
