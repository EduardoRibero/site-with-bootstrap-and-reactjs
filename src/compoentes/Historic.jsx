import Carousel from 'react-bootstrap/Carousel';

const Historic = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://civilizacaoengenheira.wordpress.com/wp-content/uploads/2023/06/image.png?w=886"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Estrutural de ponta</h5>
                    <p>No mercado a mais de 10 Anos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.adsttc.com/media/images/623c/c6ff/3e4b/3129/8900/0004/medium_jpg/PERI_5.jpg?1648150264"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Alvenaria</h5>
                    <p>Constituindo sonhos por onde passa.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images01.brasildefato.com.br/fedee6a7daed165617f79c4b1e11d76b.jpeg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Eficiencia</h5>
                    <p>
                        Profissionais muito bem  qualificados!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Historic