import LSMProj from "./LSMProj";
import "../styles/Projects.css";
import GameListProj from "./GameListProj";

export default function Projects() {
	return (
		<div className="projects">
			<h1>Projects I've Worked On</h1>
			<LSMProj />
			<GameListProj />
		</div>
	);
}
