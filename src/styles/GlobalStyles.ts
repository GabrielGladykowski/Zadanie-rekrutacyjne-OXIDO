import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;

		&,
		&::after,
		&::before {
			box-sizing: border-box;
		}
	}

	html {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
	}

	body {
		overflow-x: hidden;
	}

	body::-webkit-scrollbar {
    display: none;
}

`;

export default GlobalStyles;
