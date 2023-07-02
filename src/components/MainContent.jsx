import styles from "../styles/MainContent.module.scss";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

const MainContent = () => {
	return (
		<div className={styles.MainContent}>
			<Experience />
			<Education />
			<Skills />
			<Projects />
		</div>
	);
};

export default MainContent;
