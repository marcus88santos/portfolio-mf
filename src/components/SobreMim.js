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
					<p className={styles.sobre_min__foto__img}>foto</p>
				</div>
				<div className={styles.sobre_min__texto}>
					<p>
						Texto do sobretexto do sobretexto do sobretexto do sobretexto
						do sobretexto do sobretexto do{' '}
						<strong>texto destacado</strong> do sobretexto do sobretexto
						do sobretexto do sobretexto do sobretexto do
						<br />
						<br />
						sobretexto do sobretexto do sobretexto do sobretexto do
						sobretexto do sobretexto <strong>texto destacado</strong> do
						sobretexto do sobretexto do sobretexto do sobretexto do
						sobretexto do sobretexto do
						<br />
						<br />
						sobretexto <strong>texto destacado</strong> do sobretexto do
						sobretexto do sobretexto do sobretexto do sobretexto do
						sobretexto do sobretexto do sobretexto do sobretexto do sobre
					</p>
					{/* <div className='sobre_min__logos'>
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
					</div> */}
				</div>
			</div>
		</section>
	)
}
