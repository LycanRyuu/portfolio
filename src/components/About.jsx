import styles from "../styles/About.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
	return (
		<div className={styles.About}>
			<h1 className={styles.Name}>Amol Mathur</h1>
			<h3 className={styles.Title}>Full Stack Developer</h3>
			<p className={styles.AboutText}>
				I am a full stack developer with 2+ years of experience in
				React. My expertise lies in crafting robust and user-friendly
				web applications with React.
			</p>
			<p className={styles.AboutText}>
				I also have a deep understanding of backend development and have
				extensively used Go and Python to write efficient backend
				scripts that harness the true potential of a system. Leveraging
				the power of asynchronous code, I ensure optimal performance and
				scalability.
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
