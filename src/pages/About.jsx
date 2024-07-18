import { Container, Col, Row, Image, Button } from "react-bootstrap"
import CardsPrinciples from '../compoentes/CardPrinciples'
import FormComponent from '../compoentes/FormComponent'
import { Link } from "react-router-dom"


const About = () => {
  return (
    <div>
      <Container>
        <Row  className="m-3 p-3">
          <Col md={6} xs={12}>
            <h1 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis in maxime doloribus animi autem, nisi veniam molestias fugit ipsa, quidem maiores! Quae, vel ipsum? Adipisci obcaecati numquam inventore nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum reprehenderit, praesentium id itaque quas illo explicabo quo nesciunt. Similique distinctio maxime suscipit eius inventore molestias voluptatum cupiditate quis aut.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <Image className="img-fluid" height={580} width={700}  src="https://www.getwet.com.br/wp-content/uploads/2021/05/construction-site-1477687_1920-Personalizado.jpg" thumbnail></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Principios</h1>
          </Col>    
        </Row>
        <Row>
          <Col>
            <CardsPrinciples title="Comprometimento" txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis in maxime doloribus animi autem, nisi veniam molestias fugit ipsa, quidem maiores! Quae, vel ipsum? Adipisci obcaecati numquam inventore nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum reprehenderit, praesentium id itaque quas illo explicabo quo nesciunt. Similique distinctio maxime suscipit eius inventore molestias voluptatum cupiditate quis aut." footer="Lorem ipsum dolor sit amet"></CardsPrinciples>

            <CardsPrinciples title="Comunicação clara" txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis in maxime doloribus animi autem, nisi veniam molestias fugit ipsa, quidem maiores! Quae, vel ipsum? Adipisci obcaecati numquam inventore nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum reprehenderit, praesentium id itaque quas illo explicabo quo nesciunt. Similique distinctio maxime suscipit eius inventore molestias voluptatum cupiditate quis aut." footer="Lorem ipsum dolor sit amet"></CardsPrinciples>

            <CardsPrinciples title="Entrega de qualidade" txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis in maxime doloribus animi autem, nisi veniam molestias fugit ipsa, quidem maiores! Quae, vel ipsum? Adipisci obcaecati numquam inventore nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum reprehenderit, praesentium id itaque quas illo explicabo quo nesciunt. Similique distinctio maxime suscipit eius inventore molestias voluptatum cupiditate quis aut." footer="Lorem ipsum dolor sit amet"></CardsPrinciples>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <div className="pt-5 mt-5 mb-5 pb-5">
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
            <div className="pt-5 mt-5 mb-5 pb-5">
              <FormComponent></FormComponent>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About