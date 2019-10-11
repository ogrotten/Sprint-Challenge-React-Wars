import React, { useState, useEffect } from "react";

export default function CharInfo(props) {
	console.log (props);
	return (
		<div key={props.id}>
			<h2>{props.name}</h2>
			<div className="bottom">
				<p>Gender: {props.gender}</p>
				<p>Hair: {props.hair_color}</p>
			</div>
		</div>
	);
}
