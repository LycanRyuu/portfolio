import styles from "../styles/ExperienceItem.module.scss";

const EducationItem = ({ institution, location, curriculum, year }) => {
	return (
		<div className={styles.ExperienceItem}>
			<p className={styles.InstitutionName}>
				{[institution, location].join(", ")}
			</p>
			<h3 className={styles.Role}>{curriculum}</h3>
			<p className={styles.Technologies}>{year}</p>
		</div>
	);
};

export default EducationItem;
