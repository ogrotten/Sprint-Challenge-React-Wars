import React, { useState, useEffect } from "react";
import axios from "axios";
import CharInfo from "./CharInfo";
import styled from "styled-components";


export default function CharList() {
	const [allchar, setChar] = useState([]);

	useEffect(() => {/* for pagination */})

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people/`)
			.then(response => {
				// console.log(response.data.results);
				setChar(response.data.results);
			})
			.catch(err => {
				console.log("Problem: ", err);
			});
	}, []);
	return (
		<>
			{allchar.map((char, index) => {
				return <CharInfo key={index} name={char.name} gender={char.gender} hair_color={char.hair_color} />;
			})}
		</>
	);
}
