import EducationItem from "./EducationItem";

const Education = () => {
	const educationList = [
		{
			institution: "Bharati Vidyapeeth College of Engineering",
			location: "New Delhi",
			curriculum: "B.Tech. CSE",
			duration: "4 years",
			year: 2021,
		},
		{
			institution: "Delhi Public School",
			location: "Noida",
			curriculum: "Schooling",
			duration: "12 years",
			year: 2017,
		},
	];

	return (
		<div>
			<h2>Education</h2>
			{educationList.map((item, i) => (
				<EducationItem {...item} key={i} />
			))}
		</div>
	);
};

export default Education;
