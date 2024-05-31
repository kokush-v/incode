import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useCreateBoardMutation } from "../../../redux/api/boardApi";
import { BoardForm } from "../../../types";
import { showSuccesToast } from "../form.toast";

interface BoardFormProps {
	onClose: () => void;
}

const BoardFormComponent = ({ onClose }: BoardFormProps) => {
	const toast = useToast();
	const [createBoardMutatuon] = useCreateBoardMutation();

	const formik = useFormik<BoardForm>({
		initialValues: { name: "" },
		onSubmit: async (value) => {
			try {
				createBoardMutatuon(value);
				showSuccesToast(toast, "Board created");
				onClose();
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<Flex align="center" justify="center">
			<Box bg="white" p={3} rounded="md">
				<form onSubmit={formik.handleSubmit}>
					<VStack spacing={4} align="center">
						<Heading size={"md"} color="purple" textTransform={"uppercase"}>
							Create board
						</Heading>
						<FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
							<FormLabel htmlFor="name">Board name</FormLabel>
							<Input
								id="name"
								name="name"
								type="text"
								variant="filled"
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
							<FormErrorMessage>{formik.errors.name}</FormErrorMessage>
						</FormControl>
						<Button
							type="submit"
							colorScheme="purple"
							width="fit-content"
							alignSelf={"center"}>
							Create
						</Button>
					</VStack>
				</form>
			</Box>
		</Flex>
	);
};

export default BoardFormComponent;
