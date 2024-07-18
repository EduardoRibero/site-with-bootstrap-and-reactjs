import { Container, Row, Col } from "react-bootstrap"
import Acordion from "../compoentes/Acordion"
import FormDoubts from "../compoentes/FormDoubts"

const Doubts = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center m-5 p-5">
            <h1>
              Duvidas  frequentes
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Acordion></Acordion>
          </Col>
        </Row>
        <Row>
          <Col  className="text-center m-5 p-5">
            <h2>Aqui você pode deixar suas duvidas também</h2>
            <p>Deixei seu nome e numero para que possamos responder.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormDoubts></FormDoubts>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Doubts