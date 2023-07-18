import styles from "../styles/About.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
	const getYearsOfExperience = () => {
		const currentDate = new Date();

		// Set the start date of your experience
		const startDate = new Date(2021, 6); // June 2021

		// Calculate the difference in years
		let yearsOfExperience =
			currentDate.getFullYear() - startDate.getFullYear();

		// Adjust for the current month
		if (currentDate.getMonth() < startDate.getMonth()) {
			yearsOfExperience--;
		}

		return yearsOfExperience;
	};

	return (
		<div className={styles.About}>
			<h1 className={styles.Name}>Amol Mathur</h1>
			<h3 className={styles.Title}>Full Stack Developer</h3>
			<p className={styles.AboutText}>
				I am an experienced full stack developer with a focus on React
				and Go, boasting over {getYearsOfExperience()} years of industry
				experience. My primary area of expertise lies in crafting robust
				and user-friendly web applications using React.
			</p>
			<p className={styles.AboutText}>
				Additionally, I possess a strong background in backend
				development, particularly in utilizing Go and Python. I leverage
				the power of these languages to write efficient and optimized
				backend scripts. One of my key strengths is my ability to
				harness the true potential of a system by implementing
				asynchronous code, which results in optimal performance and
				scalability.
			</p>
			<p className={styles.AboutText}>
				I am a full stack developer with over 2 years of experience
				specializing in React and Go. My expertise lies in crafting
				robust and user-friendly web applications using React. I have a
				deep understanding of frontend development and have honed my
				skills in building highly interactive and responsive user
				interfaces. Additionally, I possess a strong background in
				backend development, particularly in utilizing Go and Python. I
				leverage the power of these languages to write efficient and
				optimized backend scripts. One of my key strengths is my ability
				to harness the true potential of a system by implementing
				asynchronous code, which results in optimal performance and
				scalability. Throughout my career, I have demonstrated a keen
				eye for detail and a passion for writing clean, maintainable
				code. I enjoy taking on new challenges and continuously
				expanding my skill set. With my experience and expertise, I am
				confident in delivering high-quality software solutions that
				meet the needs of both users and stakeholders.
			</p>
			<p className={styles.AboutText}>
				I am eager to contribute my skills and knowledge to create
				innovative and impactful projects.
			</p>
			<div className={styles.Links}>
				<button className={styles.GlowingButton}>
					Download Resume
				</button>
				<button className={styles.Button}>
					Github
					<GitHubIcon />
				</button>
				<button className={styles.Button}>
					LinkedIn
					<LinkedInIcon />
				</button>
			</div>
		</div>
	);
};

export default About;
