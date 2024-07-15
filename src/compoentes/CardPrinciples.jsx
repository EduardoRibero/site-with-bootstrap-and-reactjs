import Card from 'react-bootstrap/Card';

const CardPrinciples = (props) => {
  return (
    <Card className='m-5'>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {props.txt}{' '}
          </p>
          <footer className="blockquote-footer">
            {props.footer}<cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default CardPrinciples