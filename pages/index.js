import Header from '../src/components/Header'
import Home from '../src/components/Home'
import SobreMim from '../src/components/SobreMim'
import Habilidades from '../src/components/Habilidades'
import Footer from '../src/components/Footer'

export default function Index () {
	return (
		<>
			<Header />
			<main>
				<Home />
				<SobreMim />
				<Habilidades />
			</main>
			<Footer />
		</>
	)
}
