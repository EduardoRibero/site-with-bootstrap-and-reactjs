import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="text-ceter bg-body-tertiary mt-5 p-4">
        <Container>
            <Row>
                <Col>
                    <p>© 2024 Eduardo Ribeiro Domingues. Todos os direitos reservados.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/" className="text-decoration-none text-black p-3">Home</Link>
                    <Link to="/about" className="text-decoration-none text-black p-3">About</Link>
                    <Link to="/doubts" className="text-decoration-none text-black p-3">Doubts</Link>
                    <Link to="/contact" className="text-decoration-none text-black p-3">contact</Link>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer