import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const CardAssessment = (props) => {
    return (
        <Card className='p-5 m-5 bg-dark text-white'>
            <Card.Body>
                <Image width="65" height="65" variant="top-start" src={props.img} roundedCircle  />
                <Card.Title className='mt-3' >{props.title}</Card.Title>
                <Card.Text>
                    ⭐⭐⭐⭐
                </Card.Text>
                <Card.Text>
                    {props.txt}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardAssessment