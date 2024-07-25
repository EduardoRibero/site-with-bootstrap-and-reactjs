import { Container, Col, Row, Image, Button } from "react-bootstrap"
import CardsPrinciples from '../compoentes/CardPrinciples'
import FormComponent from '../compoentes/FormComponent'
import { Link } from "react-router-dom"


const About = () => {
  return (
    <div>
      <Container>
        <Row className="m-3 p-3">
          <Col md={6} xs={12}>
            <h1 className="mb-4">Nome da empresa EX: Gerencia empleitera.</h1>
            <h4>
              Bem-vindo à [Nome da Empresa], onde transformamos seus projetos em realidade. Com mais de [X] anos de experiência no setor, somos especialistas em construção civil, reformas residenciais e comerciais, e projetos de infraestrutura. Nossa equipe de profissionais altamente qualificados está comprometida com a excelência, a inovação e a sustentabilidade em cada projeto que realizamos.
            </h4>
          </Col>
          <Col md={6} xs={12}>
            <Image className="img-fluid" height={580} width={700} src="https://www.getwet.com.br/wp-content/uploads/2021/05/construction-site-1477687_1920-Personalizado.jpg" thumbnail></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Principios</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardsPrinciples title="Comprometimento" txt="Aqui você coloca um texto relacionado ao principio em questão." footer="Assinatura (Opcional)"></CardsPrinciples>

            <CardsPrinciples title="Comunicação clara" txt="Aqui você coloca um texto relacionado ao principio em questão." footer="Assinatura (Opcional)"></CardsPrinciples>

            <CardsPrinciples title="Entrega de qualidade" txt="Aqui você coloca um texto relacionado ao principio em questão." footer="Assinatura (Opcional)"></CardsPrinciples>
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
                Oferecemos uma ampla gama de serviços, desde o planejamento e design até a execução completa da obra, garantindo que cada detalhe seja cuidadosamente gerido para atender às suas necessidades e expectativas. Utilizamos materiais de alta qualidade e técnicas modernas para garantir durabilidade e eficiência em todas as nossas construções.
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