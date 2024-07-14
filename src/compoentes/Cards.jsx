import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" width="3000" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.txt}
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards