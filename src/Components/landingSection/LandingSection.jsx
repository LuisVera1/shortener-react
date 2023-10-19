import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const translations = {
	en: {
		text: 'Easily create a short URL, generate QR codes, and share',
	},
	es: {
		text: 'Crea <span>URL</span> acortadas facilmente, genera códigos QR y comparte',
	},
};

export const LandingSection = ({lang = 'es'}) => {
	return (
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
	);
};
