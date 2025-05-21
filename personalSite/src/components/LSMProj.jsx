import "../styles/LSMProj.css";

export default function LSMProj() {
	return (
		<div className="LSMProj">
			<h2>Local Secure Messaging</h2>
			<p>Tech stack: HTML, CSS, React, TypeScript, SQL, and Docker</p>
			<p>
				This was my senior project, it is a messaging website that is
				locally hosted. There are various security features like
				encrypted passwords and secure websockets. I worked on the
				client side of the application which consisted of making a user
				friendly interface using React and Material UI. I also used
				TypeScript to make sure the UI updated as the backend updated.
			</p>
			<div className="LSMImages">
				<img src="../../LSMPics/1.png" />
				<img src="../../LSMPics/1Login.png" />
				<img src="../../LSMPics/7Contacts.png" />
			</div>
		</div>
	);
}
