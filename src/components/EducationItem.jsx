import styles from "../styles/ExperienceItem.module.scss";

const EducationItem = ({
	institution,
	location,
	curriculum,
	duration,
	year,
}) => {
	return (
		<div className={styles.ExperienceItem}>
			<p className={styles.InstitutionName}>{institution}</p>
			<h3 className={styles.Role}>{curriculum}</h3>
			<p className={styles.Location}>{location}</p>
			<p className={styles.Technologies}>{duration}</p>
			<p className={styles.Technologies}>{year}</p>
		</div>
	);
};

export default EducationItem;
