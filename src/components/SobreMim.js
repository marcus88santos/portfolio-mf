import styles from '../styles/sobreMim.module.css'

const logo_linkedin = '/images/logo-linkedin-white.png'
const logo_github = '/images/logo-github-white.png'
const logo_whatsapp = '/images/logo-whatsapp-white.png'
const logo_facebook = '/images/logo-facebook-white.png'

export default function SobreMim () {
	return (
		<section className={styles.sobre_min}>
			<h1 className={`main__titulo_secao ${styles.sobre_min__titulo}`}>
				Sobre Mim
			</h1>
			<div className={styles.sobre_min__conteudo}>
				<div className={styles.sobre_min__foto}>
					<img
						className={styles.sobre_min__foto__img}
						src={`https://www.github.com/marcus88santos.png`}></img>
				</div>
				<div className={styles.sobre_min__texto}>
					<p>
						Me formei há mais de 10 anos em{' '}
						<strong>engenharia civil</strong>. Desde então, tenho atuado
						com <strong>gerenciamento</strong> de obras, elaboração de
						orçamentos e projetos de engenharia.
						<br />
						<br />
						Fiz <strong>pós-graduação em gestão de projetos</strong>.
						Entre outras coisas, aprendi a{' '}
						<strong>metodologia ágil</strong>, que uso inclusive no
						planejamento do meu dia-a-dia.
						<br />
						<br />
						Sou o tipo de pessoa que gosta de planilhar as coisas. Comecei
						a <strong>programar</strong> ainda em excel, com VBA.
						<br />
						<br />
						Em 2021, concluí a formação em{' '}
						<strong>desenvolvimento front-end</strong>. Atualmente, estou
						à procura de oportunidade em qualquer área de atuação.
					</p>
					<div className={styles.sobre_min__logos}>
						<a
							href='http://linkedin.com/in/marcus88santos'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={logo_linkedin} alt='linkedin' />
						</a>
						<a
							href='http://github.com/marcus88santos'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={logo_github} alt='github' />
						</a>
						<a
							href='http://facebook.com/mf8santos'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={logo_facebook} alt='facebook' />
						</a>
						<a
							href='https://wa.me/+5579996510482'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={logo_whatsapp} alt='whatsapp' />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
