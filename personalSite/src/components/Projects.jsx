import LSMProj from "./LSMProj";
import GameListProj from "./GameListProj";
import PicToASCIIProj from "./PicToASCIIProj";
import "../styles/Projects.css";

export default function Projects() {
	return (
		<div className="projects">
			<h1>Projects I've Worked On</h1>
			<LSMProj />
			<GameListProj />
			<PicToASCIIProj />
		</div>
	);
}
