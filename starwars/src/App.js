import React from "react";
import CharList from "./components/CharList";

import "./App.css";
import styled from "styled-components";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const ContainAll = styled.div`
		text-align: left;
	`;
	const Header = styled.h1`
		text-align: center;
		color: #443e3e;
		text-shadow: 1px 1px 5px #fff;
	`;
	const CharCards = styled.div `
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 600px;
		margin: 0 auto;
	`

	return (
		<ContainAll>
			<Header>React Wars</Header>
			<CharCards><CharList /></CharCards>
		</ContainAll>
	);
};

export default App;
