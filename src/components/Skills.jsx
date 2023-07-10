import styles from "../styles/Skills.module.scss";
import ReactSvg from "../assets/react.svg";
import GoSVG from "../assets/go.svg";
import MySQLSVG from "../assets/mysql.svg";

const Skills = () => {
	const skillSet = [
		{
			name: "React",
			logo: ReactSvg,
		},
		{
			name: "Go",
			logo: GoSVG,
		},
		{
			name: "MySQL",
			logo: MySQLSVG,
		},
	];

	return (
		<div>
			<h2>Skills</h2>
			<div className={styles.Skills}>
				{skillSet.map((item, i) => (
					<Items key={i} {...item} />
				))}
			</div>
			{/* <p>React, Go, MySQL, Redis, RabbitMQ, Python, Node</p>
			<p>
				React Native, Electron JS, MongoDB, Machine Learning and Deep
				Learning
			</p> */}
		</div>
	);
};

const Items = ({ name, logo }) => (
	<div className={styles.Skill}>
		<img src={logo} alt={`${name} logo`} />
		<h3>{name}</h3>
	</div>
);

export default Skills;
