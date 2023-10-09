import styles from "../styles/Skills.module.scss";
import { Skillset } from "../config/Data";

const Skills = () => {
	return (
		<div className='section'>
			<h2 className={styles.Title}>Skills</h2>
			<div className={styles.Skills}>
				{Skillset.map((item, i) => (
					<Items key={i} {...item} />
				))}
			</div>
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
