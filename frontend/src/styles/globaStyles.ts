import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
				box-sizing: border-box;
				margin: 0;
    }

		body, h1{
			font-family: 'Roboto Mono', monospace;
			font-weight: normal;
		}
`