import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormDoubts = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Seu nome :</Form.Label>
                <Form.Control type="name" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="number">
                <Form.Label>Número de telefone :</Form.Label>
                <Form.Control type="fone" placeholder="Seu número" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="duvida">
                <Form.Label>Deixe aqui sua dúvida :</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default FormDoubts