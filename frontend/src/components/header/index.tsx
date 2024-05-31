import { AddIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import { HStack, Heading, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface HeaderProps {
	modalOpen: () => void;
}

const Header = ({ modalOpen }: HeaderProps) => {
	return (
		<header className="header flex items-center gap-6 py-3 px-[5em]">
			<Heading textAlign={"center"}>Board</Heading>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<Search2Icon color="#a3a3a3" />
				</InputLeftElement>
				<Input
					border={"1px solid #a3a3a3"}
					color={"black"}
					type="text"
					placeholder="Board ID"
				/>
			</InputGroup>
			<HStack>
				<IconButton aria-label="" variant={""} icon={<AddIcon />} onClick={modalOpen} />
				<IconButton aria-label="" variant={""} icon={<EditIcon />} onClick={modalOpen} />
			</HStack>
		</header>
	);
};

export default Header;
