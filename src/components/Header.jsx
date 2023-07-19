import styles from "../styles/Header.module.scss";
import Logo from "../assets/logo.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Config from "../config/Config";

const Header = () => {
	const openURL = (link) => {
		window.open(link, "_blank");
	};

	return (
		<header className={styles.Header}>
			<img src={Logo} alt='amolCodesLogo' className={styles.Logo} />

			<div className={styles.Links}>
				<GitHubIcon
					className={styles.Icons}
					onClick={() => openURL(Config.GITHUB_URL)}
				/>
				<LinkedInIcon
					className={styles.Icons}
					onClick={() => openURL(Config.LINKEDIN_URl)}
				/>
				<button
					className={styles.GlowingButton}
					onClick={() => openURL(Config.RESUME_URL)}
				>
					Download Resume
				</button>
			</div>
		</header>
	);
};

export default Header;
