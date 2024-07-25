import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComponent = () => {
    return (
        <Form>
            <Form.Label className='mb-4'>Deixe seu contato que um de nossos consultores vai entrar em contato para falar com você.</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Como gostaria de ser chamado:</Form.Label>
                <Form.Control type="name" placeholder="Nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFone">
                <Form.Label>Número para contato:</Form.Label>
                <Form.Control type="text" placeholder="Telefone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Este número possui WhatsApp." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default FormComponent