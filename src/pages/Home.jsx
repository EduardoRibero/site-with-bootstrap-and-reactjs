import Historic from '../compoentes/Historic'
import Cards from '../compoentes/Cards'
import CardAssessment from '../compoentes/CardAssessment'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




const Home = () => {
    return (
        <div>
            <Container fluid="md">
                <Row className='mt-5 mb-5'>
                    <Col className='text-center'>
                        <h1 className='p-5 m-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto velit odit, eveniet vitae at facere harum rerum laboriosam recusandae temporibus quo consectetur qui laborum suscipit accusamus numquam laudantium debitis.</h1>
                        <Button className='mt-5 mb-5' variant="outline-success"><Link className='text-decoration-none text-black' to="/budget">Budget</Link></Button>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col className='mt-5 mb-5'>
                        <Cards
                            img="https://static3.depositphotos.com/1010695/262/i/450/depositphotos_2622490-stock-photo-restoration-works-the-house-painter.jpg"

                            title="Pintura"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </Cards>
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <Cards
                            img="https://lh5.googleusercontent.com/proxy/R_GTAXtefZ-VJpXJHhguKFynsRRBiKpuJxrajWag8ZosIyn3XTBzNjj6OXc7TIlzneD3sRs9gzpRs-B6Kl_hnKb0H2KbEFclw7gedjA"

                            title="Acabamento"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </Cards>
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <Cards
                            img="https://www.centraldalapa.com/wp-content/uploads/2016/11/Um-aumento-na-demanda-de-equipamentos-requereu-melhores-instalaes-eltricas.jpg"

                            title="Elétrica"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </Cards>
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <Cards
                            img="https://faculdadeeleven.com.br/wp-content/uploads/2024/01/curso-de-reparos-e-reformas-hidraulica.webp"

                            title="Reparos"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </Cards>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col >
                        <Historic></Historic>
                    </Col>
                </Row>
                <Row >
                    <Col className='mt-5 mb-5'>
                        <CardAssessment
                            img="https://www.otimizy.com.br/wp-content/uploads/2017/05/atendimento-ao-cliente.jpg"

                            title="Edivandro Reirs"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </CardAssessment>
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <CardAssessment
                            img="https://www.salesforce.com/br/blog/wp-content/uploads/sites/6/2023/06/blog-satisfacao-do-cliente.png"

                            title="Aline Morais Reirs"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </CardAssessment>
                    </Col>
                    <Col className='mt-5 mb-5'>
                        <CardAssessment
                            img="https://negocieapp.com.br/wp-content/uploads/2020/05/cliente-feliz.jpg"

                            title="Carlos Umberto"

                            txt="Some quick example text to build on the card title and make up the
                            bulk of the card's content.">
                        </CardAssessment>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home