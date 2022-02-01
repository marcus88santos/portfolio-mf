export default function HabilidadeIndividual (props) {
	return (
		<li className={props.style}>
			<span>{props.habilidade}</span>
			<svg height={Number(props.height) + 8} width={props.width}>
				<rect
					y='4'
					height={props.height}
					width={Number(props.percentual) + '%'}
					style={{ fill: '#555555' }}
				/>
				<rect
					x={props.percentual + `%`}
					y='4'
					height={props.height}
					width={[100, props.percentual].reduce((a, b) => a - b) + `%`}
					style={{ fill: '#ddd' }}
				/>
			</svg>
		</li>
	)
}
