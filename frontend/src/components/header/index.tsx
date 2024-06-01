/* eslint-disable react-hooks/exhaustive-deps */
import { AddIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import {
	HStack,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Kbd,
} from "@chakra-ui/react";
import { useState } from "react";
import { APP_KEYS } from "../../consts";
import { FormType } from "../../enums";
import { getBoardId } from "../../utils";

interface HeaderProps {
	modalOpen: () => void;
	refetch: (boardId: number) => void;
	setFormType: (formType: FormType) => void;
}

const Header = ({ modalOpen, refetch, setFormType }: HeaderProps) => {
	const localStorageBoardId = getBoardId().toString();
	const [boardId, setBoardId] = useState<string>(localStorageBoardId);

	function sendGetBoardQuery(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter" && boardId !== localStorageBoardId) {
			refetch(parseInt(boardId));
			localStorage.setItem(APP_KEYS.STORAGE_KEYS.BOARD_ID, boardId);
		}
	}

	return (
		<header className="header flex items-center gap-6 py-3 px-[5em] top-0 sticky z-30">
			<Heading textAlign={"center"}>Board</Heading>
			<InputGroup border={"1px solid #a3a3a3"} className="p-2 rounded-lg">
				<InputLeftElement pointerEvents="none">
					<IconButton aria-label="" variant={""} icon={<Search2Icon color="#a3a3a3" />} />
				</InputLeftElement>
				<Input
					color={"black"}
					variant={"unstyled"}
					type="text"
					placeholder="Board ID"
					value={boardId}
					onChange={(e) => setBoardId(e.target.value)}
					onKeyDown={sendGetBoardQuery}
				/>
				<Kbd opacity={0.7}>Enter ↵</Kbd>
			</InputGroup>
			<HStack>
				<IconButton
					aria-label=""
					variant={""}
					icon={<AddIcon />}
					onClick={() => {
						modalOpen();
						setFormType(FormType.NEW);
					}}
				/>
				<IconButton
					aria-label=""
					variant={""}
					icon={<EditIcon />}
					onClick={() => {
						modalOpen();
						setFormType(FormType.EDIT);
					}}
				/>
			</HStack>
		</header>
	);
};

export default Header;
