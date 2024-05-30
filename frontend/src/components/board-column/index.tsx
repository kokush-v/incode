import { AddIcon } from "@chakra-ui/icons";
import { Heading, IconButton } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { BoardColumnId } from "../../enums";
import { reorderItems } from "../../redux/slice";
import { RootState } from "../../redux/store";
import { Task } from "../../types";
import Card from "../board-card";

interface BoardColumnProps {
	title: string;
	columnId: BoardColumnId;
	constraintsRef: React.RefObject<HTMLDivElement>;
}

const BoardColumn = ({ title, constraintsRef, columnId }: BoardColumnProps) => {
	const dispatch = useDispatch();

	const handleReorder = (column: string, newOrder: Task[]) => {
		dispatch(reorderItems({ column, data: newOrder }));
	};

	const tasks = useSelector((state: RootState) => state.tasks[columnId]);

	return (
		<Reorder.Group
			id={columnId}
			axis="y"
			onReorder={(newOrder) => {
				handleReorder(columnId, newOrder);
			}}
			ref={constraintsRef}
			values={tasks}
			className="board-column min-h-[100px] bg-gray-200 w-[400px] h-fit rounded-md">
			<div className="flex items-center justify-between px-4 pt-3">
				<Heading size={"lg"}>{title}</Heading>
				<IconButton aria-label="" variant={""} icon={<AddIcon />} />
			</div>
			{tasks.map((item) => (
				<Card key={item.id} constraintsRef={constraintsRef} task={item} />
			))}
		</Reorder.Group>
	);
};

export default BoardColumn;
