import styles from "../styles/ExperienceItem.module.scss";

const EducationItem = ({ institution, location, curriculum, year, style }) => {
	return (
		<div className={styles.ExperienceItem} style={style}>
			<p className={styles.InstitutionName}>
				{[institution, location].join(", ")}
			</p>
			<h3 className={styles.Role}>{curriculum}</h3>
			<p className={styles.Technologies}>{year}</p>
		</div>
	);
};

export default EducationItem;
