import React, { useState } from "react";


const Home = () => {


	const [inputValue, setInputValue] = useState("");
	const [lista, setLista] = useState([
		"Make the bed",
		"Walk th dog",
		"Pay taxes",
		"Go on vacation"]);
	return (
		<div className="container" >
			<h1>Mi Lista</h1>
			<ul>
				<li>
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={
							(e) => {
								if (e.key === "Enter") {
									setLista(lista.concat(inputValue)); setInputValue("")
								}
							}
						}
						placeholder="Escribir la lista?" />

				</li>
				{lista.map((item, index) => (

					<li>
						{item}  {""}
						<i className="fa-solid fa-trash" onClick={() => setLista(lista.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>

				))}


			</ul>
			<div>{lista.length}taks</div>
		</div>
	);
};

export default Home;