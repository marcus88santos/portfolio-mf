import styles from '../styles/header.module.css'
import 'primeicons/primeicons.css'
// import { Link } from 'react-router-dom'

export default function Header () {
	return (
		<header className={styles.header}>
			<img
				className={styles.header__logo}
				src='/images/logo.png'
				alt='logo'
			/>
			<ul className={styles.header__menu_nav}>
				<li>
					Home
					{/* <Link to='/'>Home</Link> */}
				</li>
				<li>
					Sobre
					{/* <Link to='/'>Sobre</Link> */}
				</li>
				<li>
					Habilidades
					{/* <Link to='/'>Habilidades</Link> */}
				</li>
				<li>
					Portfólio
					{/* <Link to='/'>Portfólio</Link> */}
				</li>
				<li>
					Experiência
					{/* <Link to='/'>Experiência</Link> */}
				</li>
				<li>
					Contato
					{/* <Link to='/'>Contato</Link> */}
				</li>
			</ul>
			<i className={`pi pi-bars ${styles.header__menu_bars}`}></i>
		</header>
	)
}
