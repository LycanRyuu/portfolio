import EducationItem from "./EducationItem";
import styles from "../styles/Experience.module.scss";

const Education = () => {
	const educationList = [
		{
			institution: "Bharati Vidyapeeth College of Engineering",
			location: "New Delhi",
			curriculum: "B.Tech. CSE",
			year: "2017 - 2021",
		},
		{
			institution: "Delhi Public School",
			location: "Noida",
			curriculum: "Schooling",
			year: 2017,
		},
	];

	return (
		<div className={styles.Experience}>
			<h2 className={styles.Title} style={{ animationDelay: "0.3s" }}>
				Education
			</h2>
			{educationList.map((item, i) => (
				<EducationItem
					{...item}
					key={i}
					style={{ animationDelay: `${0.3 + 0.1 * (i + 1)}s` }}
				/>
			))}
		</div>
	);
};

export default Education;
