import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import FormComponent from '../compoentes/FormComponent'

const Contact = () => {
  return (
    <div>
      <Container>
        <Row className="p-5 m-5">
          <Col id="whatsapp">
            <Link to="https://wa.me/5548999442618">
              <Image height={75} src="https://cdn-icons-png.freepik.com/256/15707/15707917.png?semt=ais_hybrid" roundedCircle></Image>
            </Link>
          </Col>
          <Col id="Instagram">
            <Link to="https://wa.me/5548999442618">
                <Image height={75} src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" roundedCircle></Image>
            </Link>
          </Col>
          <Col id="Linkedim">
          <Link to="https://wa.me/5548999442618">
                <Image height={75} src="https://raichu-uploads.s3.amazonaws.com/logo_linkedin_xUEwU2.png" roundedCircle></Image>
            </Link>
          </Col>
          <Col id="Youtube">
          <Link to="https://wa.me/5548999442618">
                <Image height={75} src="https://cdn-icons-png.freepik.com/256/10092/10092120.png?semt=ais_hybrid" roundedCircle></Image>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="mt-4 mb-5 pb-5">
              <address>
                R. Leoneu Pereira, N° 167, Vargem do Bom Jesus, Florianópolis - SC <br /> CEP: 88056-617
              </address>
              <p>
                Email: ribeirodomingues2020@gmail.com
                <br />
                WhatsApp: <Link className="text-decoration-none text-black" to='https://wa.me/5548999442618'>48 99944-2618</Link> 
              </p>
              <p className="w-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro maiores perferendis assumenda quisquam inventore mollitia. Vel consectetur incidunt qui odio sunt exercitationem sequi iure, labore dicta culpa explicabo. Nam.
              </p>
              <Button variant="outline-success">Agenda</Button>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Image className="img-fluid" height={580} width={700}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IpmaR9Q74TkYnGFtPjzemWzVkY6f5gVb9Q&s" thumbnail></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormComponent></FormComponent>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact