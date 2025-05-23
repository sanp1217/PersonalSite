import LSMProj from "./LSMProj";
import "../styles/Projects.css";
import GameListProj from "./GameListProj";
import PicToASCIIProj from "./PicToASCIIProj";

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
