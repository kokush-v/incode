import { useRef } from "react";
import { BoardColumnId } from "../../enums";
import BoardColumn from "../board-column";

const Board = () => {
	const refs = {
		todoColumn: useRef(null),
		inProgressColumn: useRef(null),
		doneColumn: useRef(null),
	};

	return (
		<div className="border-gray-500  border-[1px] min-h-[90vh] p-3 flex justify-around relative">
			<BoardColumn
				title="To do"
				columnId={BoardColumnId.TODO}
				constraintsRef={refs[BoardColumnId.TODO]}
			/>
			<BoardColumn
				title="In progress"
				columnId={BoardColumnId.IN_PROGRESS}
				constraintsRef={refs[BoardColumnId.IN_PROGRESS]}
			/>
			<BoardColumn
				title="Done"
				columnId={BoardColumnId.DONE}
				constraintsRef={refs[BoardColumnId.DONE]}
			/>
		</div>
	);
};

export default Board;
