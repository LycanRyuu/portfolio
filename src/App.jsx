import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
	return (
		<main className='App'>
			<Header />
			<About />
			<MainContent />
		</main>
	);
}

export default App;
