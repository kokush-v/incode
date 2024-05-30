import { DeleteIcon, DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import { Divider, Heading, IconButton } from "@chakra-ui/react";
import { Reorder, motion, useDragControls, useMotionValue } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { moveItem } from "../../redux/slice";
import { Task } from "../../types";

interface CardProps {
	constraintsRef: React.RefObject<HTMLDivElement>;
	task: Task;
}

const Card = ({ constraintsRef, task }: CardProps) => {
	const [column, setColumn] = useState(constraintsRef);
	const [lastColumn, setLastColumn] = useState(constraintsRef);
	const [drag, setDrag] = useState(false);
	const controls = useDragControls();
	const y = useMotionValue(0);
	const dispatch = useDispatch();

	return (
		<Reorder.Item
			value={task}
			id={task.id.toString()}
			style={{ y }}
			dragListener={false}
			dragControls={controls}>
			<motion.div
				dragSnapToOrigin={column.current?.id === lastColumn.current?.id}
				drag={drag}
				className="w-[400px] h-auto p-4 z-10 cursor-grab"
				dragConstraints={column}
				dragElastic={1}
				dragMomentum={false}
				onMouseEnter={() => {
					setDrag(true);
				}}
				onMouseLeave={() => {
					setDrag(false);
				}}
				onDrag={(_event, info) => {
					const parentBlocks = document.querySelectorAll(".board-column");

					parentBlocks.forEach((block) => {
						const rect = block.getBoundingClientRect();
						if (
							info.point.x >= rect.left &&
							info.point.x <= rect.right &&
							info.point.y >= rect.top &&
							info.point.y <= rect.bottom &&
							column.current !== block
						) {
							parentBlocks.forEach((div) => {
								(div as HTMLDivElement).style.height = "fit-content";
							});
							if (lastColumn.current?.id !== block.id)
								(block as HTMLDivElement).style.height = rect.height + 150 + "px";
							setColumn({ current: block as HTMLDivElement });
						}
					});
				}}
				onDragEnd={(_event, info) => {
					const parentBlocks = document.querySelectorAll(".board-column");

					parentBlocks.forEach((block) => {
						const rect = block.getBoundingClientRect();
						if (
							info.point.x >= rect.left &&
							info.point.x <= rect.right &&
							info.point.y >= rect.top &&
							info.point.y <= rect.bottom
						) {
							setLastColumn(column);
						}
						(block as HTMLDivElement).style.height = "fit-content";
					});

					if (!column?.current?.id || lastColumn.current?.id === column.current?.id) return;

					dispatch(moveItem({ column: column.current.id, data: task }));
				}}
				onMouseDown={(event) => {
					event.currentTarget.style.cursor = "grabbing";
				}}
				onMouseUp={(event) => {
					event.currentTarget.style.cursor = "grab";
				}}
				dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}>
				<div className="p-3 bg-slate-700 h-[200px] text-white text-center text-2xl leading-[100px] rounded-md flex justify-between items-start ">
					<div className="w-full h-full flex flex-col">
						<div className="flex flex-col items-start w-full h-full">
							<Heading size={"md"}>{task.title}</Heading>
							<Divider className="w-full my-2" />
							<Heading size={"sm"}>{task.description}</Heading>
						</div>
						<div className="flex h-min w-min">
							<IconButton variant={""} aria-label="" icon={<DeleteIcon />} />
							<IconButton variant={""} aria-label="" icon={<EditIcon />} />
						</div>
					</div>
					<IconButton
						onMouseDown={(event) => {
							event.currentTarget.style.cursor = "grabbing";
						}}
						onMouseUp={(event) => {
							event.currentTarget.style.cursor = "grab";
						}}
						className="cursor-grab border-none self-center "
						aria-label=""
						variant={""}
						icon={<DragHandleIcon />}
						onMouseEnter={() => {
							setDrag(false);
						}}
						onMouseLeave={() => {
							setDrag(true);
						}}
						onPointerDown={(e) => {
							controls.start(e);
						}}
					/>
				</div>
			</motion.div>
		</Reorder.Item>
	);
};

export default Card;
