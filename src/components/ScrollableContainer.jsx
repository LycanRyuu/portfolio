import { useRef } from "react";
import styles from "../styles/ScrollableContainer.module.scss";

const ScrollableContainer = ({ styling, children }) => {
	const containerRef = useRef(null);

	const handleScroll = () => {
		const container = containerRef.current;
		if (container) {
			const scrollOffset = container.scrollTop;
			container.style.setProperty("--scroll-offset", scrollOffset);
		}
	};

	return (
		<div
			className={[styles.ScrollableContainer, styling].join(" ")}
			ref={containerRef}
			onScroll={handleScroll}
		>
			{children}
			<div className={styles.ScrollMask} />
		</div>
	);
};

export default ScrollableContainer;
