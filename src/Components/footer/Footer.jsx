import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = ({ lang = 'en' }) => {
	return (
		<Container fluid>
			<Container>
				<Row>
					<Col xs={12} lg={4}>
						Col1
					</Col>
					<Col xs={12} lg={4}>
						Col2
					</Col>
					<Col xs={12} lg={4}>
						Col3
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
