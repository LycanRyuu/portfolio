import EducationItem from "./EducationItem";
import styles from "../styles/Experience.module.scss";
import { ExperienceList, EducationList } from "../config/Data";
import Config from "../config/Config";

const Education = () => {
	return (
		<div className={[styles.Experience, "section"].join(" ")}>
			<h2 className={styles.Title} style={{ animationDelay: "0.6s" }}>
				Education
			</h2>
			{EducationList.map((item, i) => (
				<EducationItem
					{...item}
					key={i}
					style={{
						animationDelay: `${
							Config.SCROLLING_SECTION_ANIMATION_OFFSET *
								ExperienceList.length +
							Config.SCROLL_ANIMATION_DELAY_OFFSET * (i + 1)
						}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Education;
