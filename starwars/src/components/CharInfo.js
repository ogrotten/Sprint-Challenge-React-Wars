import React, { useState, useEffect } from "react";
import styled from "styled-components";


export default function CharInfo(props) {
	// console.log (props);

	const OneCard = styled.div `
		width: 42%;
		min-width: 42%;
		max-width: 42%;
		border-radius: 6px;
		background-color: rgba(45, 192, 255, .3);
		border: 2px solid navy;
		padding: 0 15px;
		margin: 15px 0;
	`
	const Name = styled.h2 `
		color: navy;
	`

	const Data = styled.div `
		color: black;
		font-weight: bolder;
	`

	return (
		<OneCard key={props.id}>
			<Name>{props.name}</Name>
			<Data>
				<p>Gender: {props.gender}</p>
				<p>Hair: {props.hair_color}</p>
			</Data>
		</OneCard>
	);
}
