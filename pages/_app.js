function GlobalStyle () {
	return (
		<style global jsx>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}
			body {
				font-family: 'Open Sans', sans-serif;
			}
			.main__titulo_secao {
				font-size: min(50px, 8vw);
				font-weight: bold;
				padding-inline: 5%;
				padding-bottom: 0.5em;
				text-align: left;
			}
			// /* App fit Height */
			// html,
			// body,
			// #__next {
			// 	min-height: 100vh;
			// 	display: flex;
			// 	flex: 1;
			// }
			// #__next {
			// 	flex-direction: column;
			// 	flex: 1;
			// }
			// #__next > * {
			// 	flex: 1;
			// }
			// /* ./App fit Height */
		`}</style>
	)
}

export default function CustomApp ({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
