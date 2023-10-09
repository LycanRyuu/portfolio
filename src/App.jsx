import "./App.scss";
import About from "./components/About";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
	return (
		<main className='App'>
			<div className='Overlay'>
				<span className='Loader' />
			</div>
			<Header />
			<About />
			<MainContent />
		</main>
	);
}

export default App;
