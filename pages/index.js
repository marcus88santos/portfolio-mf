import Header from '../src/components/Header'
import Home from '../src/components/Home'
import SobreMim from '../src/components/SobreMim'
import Habilidades from '../src/components/Habilidades'
import Footer from '../src/components/Footer'
import Exp from '../src/components/Exp'

export default function Index () {
	return (
		<>
			<Header />
			<main>
				<Home />
				<SobreMim />
				<Habilidades />
				<Exp />
			</main>
			<Footer />
		</>
	)
}
