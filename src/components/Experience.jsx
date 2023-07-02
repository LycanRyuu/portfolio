import ExperienceItem from "./ExperienceItem";

const Experience = () => {
	const experienceList = [
		{
			company: "Super Six Sports Gaming",
			location: "Noida, Uttar Pradesh",
			role: "Backend Developer",
			period: "January, 2023 - Present",
			technologies: "Go, MySQL, Redis, RabbitMQ, MongoDB",
		},
		{
			company: "Bharati Airtel",
			location: "Gurugram, Haryana",
			role: "Full Stack Developer",
			period: "June, 2021 - January, 2023",
			technologies: "React, Redux, Microfrontend, PWAs",
		},
	];

	return (
		<div>
			<h2>Experience</h2>
			{experienceList.map((item, i) => (
				<ExperienceItem {...item} key={i} />
			))}
		</div>
	);
};

export default Experience;
