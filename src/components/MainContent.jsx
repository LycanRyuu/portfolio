import styles from "../styles/MainContent.module.scss";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import ScrollableContainer from "./ScrollableContainer";

const MainContent = () => {
	return (
		<div className={styles.MainContent}>
			<ScrollableContainer>
				<Experience />
				<Education />
				<Skills />
				<Projects />
			</ScrollableContainer>
		</div>
	);
};

export default MainContent;
