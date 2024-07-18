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
                    <Link to="/site-with-bootstrap-and-reactjs/" className="text-decoration-none text-black p-3">Início</Link>
                    <Link to="/about" className="text-decoration-none text-black p-3">Sobre</Link>
                    <Link to="/doubts" className="text-decoration-none text-black p-3">Dúvidas</Link>
                    <Link to="/contact" className="text-decoration-none text-black p-3">Contatos</Link>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer