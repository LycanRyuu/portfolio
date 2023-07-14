import styles from "../styles/ExperienceItem.module.scss";

const ExperienceItem = ({
	company,
	location,
	role,
	period,
	technologies,
	style,
}) => {
	return (
		<div className={styles.ExperienceItem} style={style}>
			<p className={styles.InstitutionName}>
				{[company, location].join(", ")}
			</p>
			<h3 className={styles.Role}>{role}</h3>
			<p className={styles.InstitutionName}>{period}</p>
			<p className={styles.Technologies}>{technologies}</p>
		</div>
	);
};

export default ExperienceItem;
