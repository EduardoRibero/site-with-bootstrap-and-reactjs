import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img height="200" width="3000" variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.txt}
                </Card.Text>
                <Button variant="outline-success"><Link className='text-decoration-none text-black' to="/">Mais</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default Cards