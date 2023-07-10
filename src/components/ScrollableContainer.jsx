import React from "react";
import styles from "../styles/ScrollableContainer.module.scss";

const ScrollableContainer = ({ children }) => {
	return (
		<React.Fragment className={styles.ScrollableContainer}>
			{children}
			<div className={styles.ScrollMask} />
		</React.Fragment>
	);
};

export default ScrollableContainer;
