import styles from "../styles/EducationItem.module.scss";

const ExperienceItem = ({ company, location, role, period, technologies }) => {
	return (
		<div>
			<h3 className={styles.InstitutionName}>{company}</h3>
			<p>{location}</p>
			<p>{role}</p>
			<p>{period}</p>
			<p>{technologies}</p>
		</div>
	);
};

export default ExperienceItem;
