import { Container, Row, Col } from "react-bootstrap"
import Acordion from "../compoentes/Acordion"

const Doubts = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center m-5 p-5">
            <h1>
              Duvidas frequentes
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Acordion></Acordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Doubts