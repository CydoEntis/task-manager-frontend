import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Wrapper() {
	return (
		<Container className='test' fluid>
			<Row>
				<Col className="red" lg="6" >
          <p>Bootstrap</p>
          <p>Can go</p>
          <p>Fuck itself :)</p>
        </Col>
				<Col className="blue" lg="6" ><h1>Politely though</h1></Col>
			</Row>
			<Row>
				<Col>1 of 1</Col>
			</Row>
		</Container>
	);
}

export default Wrapper;
