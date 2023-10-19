import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const translations = {
	en: {
		invitation: 'Generate a link for free!',
		placeholder: 'Paste a url here...',
		btnText: 'Generate a Short Link',
		txtConditions: "By clicking, you're accepting the terms and conditions of service",
	},
	es: {
		invitation: '¡Genera un link Gratis!',
		placeholder: 'Pega una url aqui...',
		btnText: 'Genera un Short Link',
		txtConditions: 'Al hacer click, estas aceptando los terminos y condiciones del servicio',
	},
};

export const ShortenerHome = ({ lang = 'en' }) => {
	const handleGenerateLink = () => {
		console.log('generate link');
	};

	return (
		<Row>
			<Col id="generate-link">
				<div className="d-flex flex-column align-items-center generatorSection">
					<h2>{translations[lang].invitation}</h2>
					<input
						id="inpLink"
						onChange={(e) => setTextLink(e.target.value)}
						placeholder={translations[lang].placeholder}
					></input>
					<button onClick={() => handleGenerateLink()} id="btnGenerate">
						{translations[lang].btnText}
					</button>
					<p className="mt-1 mb-2" id="textConditions">
						{translations[lang].txtConditions}
					</p>
					{/* {boxCreatedLink()} */}
				</div>
			</Col>
		</Row>
	);
};
