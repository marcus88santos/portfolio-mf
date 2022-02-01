import styles from '../styles/home.module.css'

export default function Home () {
	return (
		<section className={styles.home}>
			<span>Olá, eu sou</span>
			<h1 className={`${styles.typing_animation}  ${styles.home__nome}`}>
				marcUs fiLLipe santos.
			</h1>
			<div className={styles.home__foto}>
				<div className={styles.home__foto__eng}>
					<span>Engenheiro Civil</span>
				</div>
				foto
				<div className={styles.home__foto__dev}>
					<span>
						&lt;Desenvolvedor
						<br />
						Front-end/&gt;
					</span>
				</div>
			</div>
		</section>
	)
}
