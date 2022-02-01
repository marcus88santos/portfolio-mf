import HabilidadeIndividual from './HabilidadeIndividual'
import styles from '../styles/habilidades.module.css'

export default function Habilidades () {
	const habilidadesEng = [
		['AutoCad', 100],
		['Revit', 40],
		['Orse', 100],
		['SINAPI', 100],
		['MSProject', 80],
		['Excel Avançado', 100],
		['VBA', 50],
		['Pacote Office', 100],
		['Plataforma +Br', 100],
	]
	const habilidadesDev = [
		['HTML & CSS', 80],
		['jQuery', 40],
		['React.JS', 80],
		['Next.JS', 50],
		['Git', 60],
		['Node.JS', 90],
		['Package Manager', 90],
	]
	const perfil = [
		['Raciocínio', 100],
		['Proatividade', 80],
		['Objetividade', 100],
		['Determinação', 100],
		['Planejamento', 80],
		['Gestão de Pessoas', 60],
		['Gestão de Custos', 80],
		['Gestão de Tempo', 60],
		['Scrum', 90],
		['Trello', 100],
		['Mercado Financeiro', 60],
	]
	return (
		<section className={styles.habilidades}>
			<div className={styles.transition_wave}>
				<svg
					className={styles.transition_wave__svg}
					viewBox='0 0 500 150'
					preserveAspectRatio='none'>
					<path
						d='M-4.28,25.16 C231.60,-53.77 349.55,101.15 500.22,10.35 L500.00,150.00 L0.00,150.00 Z'
						style={{ stroke: 'none', fill: '#eee' }}></path>
				</svg>
				<h1 className={`main__titulo_secao ${styles.habilidades__titulo}`}>
					Habilidades
				</h1>
			</div>
			<div className={styles.habilidades__conteudo}>
				<div>
					<img
						className={styles.habilidades__img}
						src='/images/eng_civil.png'
						alt='eng-civil'
					/>
					<h3 className={styles.habilidades__conteudo__subtitulo}>
						Engenheiro Civil
					</h3>
					<ul className={styles.habilidades__conteudo__lista}>
						{habilidadesEng.map(hab => {
							return (
								<HabilidadeIndividual
									style={styles.habilidades__conteudo__texto}
									habilidade={hab[0]}
									height='15'
									percentual={hab[1]}
									key={Number(habilidadesEng.indexOf(hab)) + 1}
								/>
							)
						})}
					</ul>
				</div>
				<div>
					<img
						className={styles.habilidades__img}
						src='/images/front_end.png'
						alt='front-end'
					/>
					<h3 className={styles.habilidades__conteudo__subtitulo}>
						Desenvolvedor Front-end
					</h3>
					<ul className={styles.habilidades__conteudo__lista}>
						{habilidadesDev.map(hab => {
							return (
								<HabilidadeIndividual
									style={styles.habilidades__conteudo__texto}
									habilidade={hab[0]}
									height='15'
									percentual={hab[1]}
									key={Number(habilidadesDev.indexOf(hab)) + 1}
								/>
							)
						})}
					</ul>
				</div>
				<div>
					<img
						className={styles.habilidades__img}
						src='/images/perfil.png'
						alt='front-end'
					/>
					<h3 className={styles.habilidades__conteudo__subtitulo}>
						Perfil
					</h3>
					<ul className={styles.habilidades__conteudo__lista}>
						{perfil.map(hab => {
							return (
								<HabilidadeIndividual
									style={styles.habilidades__conteudo__texto}
									habilidade={hab[0]}
									height='15'
									percentual={hab[1]}
									key={Number(perfil.indexOf(hab)) + 1}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	)
}
