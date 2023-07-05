import styles from "../styles/ExperienceItem.module.scss";

const ExperienceItem = ({ company, location, role, period, technologies }) => {
	return (
		<div className={styles.ExperienceItem}>
			<p className={styles.InstitutionName}>{company}</p>
			<h3 className={styles.Role}>{role}</h3>
			<p className={styles.Location}>{location}</p>
			<p className={styles.Technologies}>{period}</p>
			<p className={styles.Technologies}>{technologies}</p>
		</div>
	);
};

export default ExperienceItem;
