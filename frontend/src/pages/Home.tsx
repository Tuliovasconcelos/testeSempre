import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageStructure from '../components/PageStructure';
import ApiCall from '../services/ApiCall';
import SweetAlert from '../components/SweetAlert';

const Home: React.FC = () => {
  const [cep, setCep] = useState('');
  const [response, setResponse] = useState('');
  const [isCepValid, setIsCepValid] = useState(false);
  const navigate = useNavigate();

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value;
    const isValid = newCep.length === 8;
    setIsCepValid(isValid);
    setCep(newCep);
  };

  const handleCepSubmit = async () => {
    try {
      const apiResponse = await ApiCall.get(`/analiseCobertura/${cep}`);
      const status = apiResponse.data.status;

      if (status === 'Aprovado') {
        navigate('/planos');
      } else {
        SweetAlert({
          title: 'Ops!',
          text: 'Desculpe, não encontramos planos disponíveis para o seu CEP.',
          icon: 'warning',
        });
      }

      setResponse(status);
    } catch (error) {
      SweetAlert({
        title: 'Erro!',
        text: error,
        icon: 'error',
      });
    }
  };

  return (
    <PageStructure>
      <div className="home-container">
        <h1>Seja bem-vindo(a)!</h1>
        <Form>
          <Form.Group controlId="formCep" className="mb-4">
            <Form.Label>
              Preencha o seu CEP que iremos verificar os planos disponíveis para sua localidade.
            </Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Digite o CEP"
                value={cep}
                onChange={handleCepChange}
                isValid={isCepValid && cep.length > 0}
                isInvalid={!isCepValid && cep.length > 0}
              />
              <Form.Control.Feedback type="invalid">
                {!isCepValid && cep.length > 0 && 'CEP inválido. Verifique se possui 8 dígitos.'}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              onClick={handleCepSubmit}
              disabled={!isCepValid}
            >
              Verificar
            </Button>
          </div>
        </Form>

        {response && (
          <div className="response-container mt-4 p-3">
            <h3>Status de Home:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </PageStructure>
  );
};

export default Home;
