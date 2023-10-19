import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css'

export const Characteristics = ({ lang = 'en' }) => {
	return (
		<Row>
			<Col xs={12} lg={6} className="d-flex justify-content-center align-items-center mt-3">
				<img src="/world-connected.png" width={400} />
			</Col>

			<Col xs={12} lg={6} className="d-flex justify-content-center align-items-center mt-5">
				<table>
					<tr>
						<td>
							<h2>500</h2>
						</td>
						<td>Usuarios</td>
					</tr>
					<tr>
						<td>
							<h2>200</h2>
						</td>
						<td>Links creados</td>
					</tr>
					<tr>
						<td>
							<h2>17</h2>
						</td>
						<td>Clicks en 30 dias</td>
					</tr>
					<tr>
						<td>
							<h2>15</h2>
						</td>
						<td>QR generados</td>
					</tr>
				</table>
			</Col>
		</Row>
	);
};
