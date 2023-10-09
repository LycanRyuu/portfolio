import ExperienceItem from "./ExperienceItem";
import styles from "../styles/Experience.module.scss";
import { ExperienceList } from "../config/Data";
import Config from "../config/Config";

const Experience = () => {
	const animationDelay =
		Config.LOADING_ANIMATION_DURATION +
		Config.SCROLLING_SECTION_ANIMATION_OFFSET;

	return (
		<div className={[styles.Experience, "section"].join(" ")}>
			<h2
				className={styles.Title}
				style={{ animationDelay: `${animationDelay}s` }}
			>
				Experience
			</h2>
			{ExperienceList.map((item, i) => (
				<ExperienceItem
					{...item}
					key={i}
					style={{
						animationDelay: `${
							Config.LOADING_ANIMATION_DURATION +
							Config.SCROLLING_SECTION_ANIMATION_OFFSET +
							Config.SCROLL_ANIMATION_DELAY_OFFSET * (i + 1)
						}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Experience;
