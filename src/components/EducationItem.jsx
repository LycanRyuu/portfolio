import styles from "../styles/EducationItem.module.scss";

const EducationItem = ({
	institution,
	location,
	curriculum,
	duration,
	year,
}) => {
	return (
		<div>
			<h3 className={styles.InstitutionName}>{institution}</h3>
			<p>{location}</p>
			<p>{curriculum}</p>
			<p>{duration}</p>
			<p>{year}</p>
		</div>
	);
};

export default EducationItem;
