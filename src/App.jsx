import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 200, // Change the animation offset (in pixels) from the element's top before it starts
			duration: 800, // Animation duration in milliseconds
			easing: "ease-in-out", // Easing function for animations (e.g., 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out')
			delay: 0, // Delay before starting the animation (in milliseconds)
			once: false, // If true, the animation will only occur once and not again on subsequent scrolls
			mirror: false, // If true, the animation will run in the opposite direction when scrolling up
			anchorPlacement: "top-bottom", // The anchor point for the animation relative to the element (e.g., 'top-bottom', 'center-bottom', 'bottom-bottom', etc.)
		});
	}, []);

	return (
		<main className='App'>
			<Header />
			<About />
			<MainContent />
		</main>
	);
}

export default App;
