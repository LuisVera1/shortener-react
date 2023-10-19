import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Plans = ({ lang = 'en' }) => {

  return (
    <Row>
    <Col xs={12} lg={4}>
      Free
    </Col>
    <Col xs={12} lg={4}>
      Basic
    </Col>
    <Col xs={12} lg={4}>
      Premium
    </Col>
  </Row>
  )
}