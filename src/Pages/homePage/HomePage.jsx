import Container from 'react-bootstrap/Container';
import { MainNavbar, ShortenerHome } from '../../Components';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css';

const translations = {
	en: {
		text: 'Easily create a short URL, generate QR codes, and share',
	},
	es: {
		text: 'Crea <span>URL</span> acortadas facilmente, genera códigos QR y comparte',
	},
};

const lang = 'es';

export const HomePage = () => {
	return (
		<>
			<MainNavbar lang={lang}/>

			<Container className="g-0" fluid>
				<Container className="g-0">
					<main>
						<Row className="main__imageSection__size">
							<Col className="main-image d-flex align-items-center justify-content-center">
								{lang === 'es' && (
									<h1
										dangerouslySetInnerHTML={{
											__html:
												'Crea <span>URL</span> acortadas fácilmente, genera códigos <span>QR</span>, y comparte',
										}}
									/>
								)}

								{lang === 'en' && (
									<h1
										dangerouslySetInnerHTML={{
											__html:
												'Easily create a short <span>URL</span>, generate <span>QR</span> codes, and share',
										}}
									/>
								)}
							</Col>

							<Col className="d-flex justify-content-center align-items-center">
								<div className="main__image__contain">
									<Image className="main__image__cover" src="/main-image.jpg" />
								</div>
							</Col>
						</Row>

						<Row>
							<Col id="generateLink">
								<ShortenerHome lang={lang} />
							</Col>
						</Row>
					</main>

					<section>
						<p>info (usage data)</p>

						<p>caracteristics</p>
					</section>

					<section>
						<p>plans</p>
					</section>

					<section>
						<p>users says...</p>
					</section>
				</Container>
				<footer className="g-0">footer</footer>
			</Container>
		</>
	);
};
