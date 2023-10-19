import Container from 'react-bootstrap/Container';
import {
	MainNavbar,
	LandingSection,
	ShortenerHome,
	Characteristics,
	Plans,
	OurUsers,
	Footer,
} from '../../Components';

import './styles.css';

const lang = 'es';

/*
<a href="https://www.freepik.es/vector-gratis/ilustracion-concepto-mensajeria_7070650.htm#query=send%20text&position=5&from_view=search&track=ais">Imagen de storyset</a> en Freepik
<a href="https://www.freepik.es/vector-gratis/ilustracion-fondo-azul-conexion-todo-mundo_3525476.htm#query=world%20web&position=44&from_view=search&track=ais">Imagen de rawpixel.com</a> en Freepik

*/

export const HomePage = () => {
	return (
		<>
			<MainNavbar lang={lang} />

			<Container className="g-0" fluid>
				<Container className="g-0">
					{/* -- main */}
					<main>
						<LandingSection lang={lang} />

						<ShortenerHome lang={lang} />
					</main>

					<section id="features">
						<Characteristics lang={lang} />
					</section>

					<section id="plans">
						<Plans lang={lang} />
					</section>

					<section>
						<OurUsers lang={lang} />
					</section>
				</Container>
			</Container>

			<footer>
				<Footer lang={lang} />
			</footer>
		</>
	);
};
