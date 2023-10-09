import { useEffect, useState } from "react";
import styles from "../styles/SectionProgress.module.scss";

const SectionProgress = () => {
	const [activeIndex, setActiveIndex] = useState(0); // Initially highlight the first index

	const handleScroll = () => {
		const scrollOffset = document.getElementById("scroll").scrollTop;
		const contentElements = [];
		document.querySelectorAll(".section").forEach((item) => {
			contentElements.push(item.offsetTop);
		});

		let newActiveIndex = 0;
		for (let i = contentElements.length - 1; i >= 0; i--) {
			if (scrollOffset >= contentElements[i]) {
				newActiveIndex = i + 1;
				break;
			}
		}

		setActiveIndex(newActiveIndex);
	};

	useEffect(() => {
		document
			.getElementById("scroll")
			.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const sections = ["Experience", "Education", "Skills"];

	return (
		<div>
			{sections.map((section, index) => (
				<h4
					key={index}
					className={
						activeIndex === index
							? styles.ActiveSection
							: styles.InactiveSection
					}
				>
					{section}
				</h4>
			))}
		</div>
	);
};

export default SectionProgress;
