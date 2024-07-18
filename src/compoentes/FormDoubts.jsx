import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormDoubts = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Seu nome</Form.Label>
                <Form.Control type="name" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="number">
                <Form.Label>{"Telefone (WhatsApp)"}</Form.Label>
                <Form.Control type="fone" placeholder="Seu numero" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="duvida">
                <Form.Label>Deixe aqui sua duvida.</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormDoubts