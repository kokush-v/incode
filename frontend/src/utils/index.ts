import { animate, MotionValue, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { APP_KEYS } from "../consts";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
	const boxShadow = useMotionValue(inactiveShadow);

	useEffect(() => {
		let isActive = false;
		value.onChange((latest) => {
			const wasActive = isActive;
			if (latest !== 0) {
				isActive = true;
				if (isActive !== wasActive) {
					animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
				}
			} else {
				isActive = false;
				if (isActive !== wasActive) {
					animate(boxShadow, inactiveShadow);
				}
			}
		});
	}, [value, boxShadow]);

	return boxShadow;
}

export const getBoardId = () => {
	const boardId = parseInt(localStorage.getItem(APP_KEYS.STORAGE_KEYS.BOARD_ID) || "");
	if (!Number.isNaN(boardId)) {
		return boardId;
	} else {
		return "";
	}
};
