import styles from '../styles/footer.module.css'

const logo_linkedin = '/images/logo-linkedin-white.png'
const logo_github = '/images/logo-github-white.png'
const logo_whatsapp = '/images/logo-whatsapp-white.png'
const logo_facebook = '/images/logo-facebook-white.png'

export default function Footer () {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__logos}>
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
			<p>
				Copyright © 2021 marcUs fiLLipe santos • Engenheiro Civil •
				Desenvolvedor Front-end | Portfólio Pessoal
			</p>
		</footer>
	)
}
