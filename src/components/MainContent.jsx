import styles from "../styles/MainContent.module.scss";
// import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
// import Projects from "./Projects";
import ScrollableContainer from "./ScrollableContainer";

const MainContent = () => {
	return (
		<ScrollableContainer styling={styles.MainContent}>
			<Experience />
			<Education />
			{/* <Skills /> */}
			{/* <Projects /> */}
		</ScrollableContainer>
	);
};

export default MainContent;
