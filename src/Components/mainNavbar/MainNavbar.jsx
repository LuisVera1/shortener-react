import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const translations = {
	en: {
		create: 'Create a link',
		features: 'Features',
		plans: 'Plans',
		dashboard: '📈 Go to Dashboard',
		config: '⚙️ Configuration',
		logout: '⬅️ Log out',
		es: 'Español',
	},
	es: {
		create: 'Crea un link',
		features: 'Caracteristicas',
		plans: 'Planes',
		dashboard: '📈 Abrir panel',
		config: '⚙️ Configuración',
		logout: '⬅️ Cerrar sesión',
		en: 'English',
	},
};

//Atribution link phone
//<a href="https://www.freepik.es/vector-gratis/ilustracion-concepto-mensajeria_7070650.htm#query=send%20text&position=5&from_view=search&track=ais">Imagen de storyset</a> en Freepik

export const MainNavbar = ({ lang = 'en' }) => {
	return (
		<Navbar expand="lg" fixed="top" className="g-0" style={{ backgroundColor: 'red' }}>
			<Container className="g-0" style={{ backgroundColor: 'white' }}>
				<Navbar.Brand href="#home">
					<img
						src="/Logo.png"
						width="147"
						height="40"
						className="d-inline-block align-top ms-3"
						alt="Shortify"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#generate-link">{translations[lang].create}</Nav.Link>
						<Nav.Link href="#features">{translations[lang].features}</Nav.Link>
						<Nav.Link href="#plans">{translations[lang].plans}</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/user/login">Iniciar Sesión</Nav.Link>
						{/* <NavDropdown title={user} id="basic-nav-dropdown" className="me-1">
						<NavDropdown.Item href="#">{translations[lang].dashboard}</NavDropdown.Item>
						<NavDropdown.Item href="#">{translations[lang].config}</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#">{translations[lang].logout}</NavDropdown.Item>
					</NavDropdown> */}
						<NavDropdown title="ES / EN" id="basic-nav-dropdown" className="me-3">
							<NavDropdown.Item onClick={() => console.log('English')}>English</NavDropdown.Item>
							<NavDropdown.Item onClick={() => console.log('Español')}>Español</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
