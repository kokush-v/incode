import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Textarea,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useAddTaskMutation } from "../../../redux/api/taskApi";
import { boardSelector } from "../../../redux/selectors";
import { Board, TaskForm } from "../../../types";
import { showSuccesToast } from "../form.toast";

interface TaskFormProps {
	columnId: string;
	onClose: () => void;
}

const TaskFormComponent = ({ columnId, onClose }: TaskFormProps) => {
	const toast = useToast();
	const board = useSelector(boardSelector) as Board;
	const [addTaskMutation] = useAddTaskMutation();

	const formik = useFormik<TaskForm>({
		initialValues: { description: "", title: "", type: columnId, boardId: board.id },
		onSubmit: async (value) => {
			try {
				addTaskMutation(value);
				showSuccesToast(toast, "Task added");
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
							Add task
						</Heading>
						<FormControl isInvalid={!!formik.errors.title && formik.touched.title}>
							<FormLabel htmlFor="title">Title</FormLabel>
							<Input
								id="title"
								name="title"
								type="text"
								variant="filled"
								onChange={formik.handleChange}
								value={formik.values.title}
							/>
							<FormErrorMessage>{formik.errors.title}</FormErrorMessage>
						</FormControl>
						<FormControl
							isInvalid={!!formik.errors.description && formik.touched.description}>
							<FormLabel htmlFor="description">Description</FormLabel>
							<Textarea
								id="description"
								name="description"
								variant="filled"
								onChange={formik.handleChange}
								value={formik.values.description}
							/>
							<FormErrorMessage>{formik.errors.description}</FormErrorMessage>
						</FormControl>
						<Button
							type="submit"
							colorScheme="purple"
							width="fit-content"
							alignSelf={"center"}>
							Add
						</Button>
					</VStack>
				</form>
			</Box>
		</Flex>
	);
};

export default TaskFormComponent;
