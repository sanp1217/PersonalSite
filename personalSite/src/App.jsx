import "./App.css";
import "./components/AboutMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="mainPage">
			<AboutMe />
			<Projects />
		</div>
	);
}

export default App;
