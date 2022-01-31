// import './habilidades.css'

export default function Habilidades () {
	return (
		<section className='habilidades'>
			<div className='transition-wave'>
				<svg
					className='transition-wave__svg'
					viewBox='0 0 500 150'
					preserveAspectRatio='none'>
					<path
						d='M-4.28,25.16 C231.60,-53.77 349.55,101.15 500.22,10.35 L500.00,150.00 L0.00,150.00 Z'
						style={{ stroke: 'none', fill: '#eee' }}></path>
				</svg>
				<h1 className='titulo-secao habilidades__titulo'>Habilidades</h1>
			</div>
			<div className='habilidades__conteudo'>conteudo das habilidades</div>
		</section>
	)
}