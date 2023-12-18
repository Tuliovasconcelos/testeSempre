import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SweetAlert from '../components/SweetAlert';
import ApiCall from '../services/ApiCall';
import PageStructure from '../components/PageStructure';
import { FaShoppingCart } from 'react-icons/fa';

interface Plano {
  id: number;
  nome: string;
  velocidade: number;
  preco: string;
}

const PlanosPage: React.FC = () => {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [planoSelecionado, setPlanoSelecionado] = useState<number | null>(null);
  const [planoSelecionadoId, setPlanoSelecionadoId] = useState<number | null>(null);
  const [redirectToFichaCadastral, setRedirectToFichaCadastral] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await ApiCall.get<Plano[]>(`/planos/`);
        setPlanos(apiResponse.data);
      } catch (error) {
        SweetAlert({
          title: 'Ops!',
          text: 'Desculpe, não encontramos planos disponíveis.',
          icon: 'warning',
        });
      }
    };
    fetchData();
  }, []);

  const handleSelectPlano = (planoId: number) => {
    setPlanoSelecionado(planoId);
    setPlanoSelecionadoId(planoId);
  };

  const handleContinue = async () => {
    try {
      if (planoSelecionado !== null) {
        setRedirectToFichaCadastral(true);
      } else {
        SweetAlert({
          title: 'Ops!',
          text: 'Por favor, selecione um plano antes de continuar.',
          icon: 'warning',
        });
      }
    } catch (error) {
      SweetAlert({
        title: 'Ops!',
        text: error,
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    if (redirectToFichaCadastral && planoSelecionadoId !== null) {
      navigate('/fichaCadastral', { state: { planoId: planoSelecionadoId } });
    }
  }, [redirectToFichaCadastral, planoSelecionadoId, navigate]);


  return (
    <PageStructure>
      <Container className="mt-4">
        <h1>Planos Disponíveis</h1>
        <Form>
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {planos.map((plano) => (
              <Col key={plano.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{plano.nome}</Card.Title>
                    <Card.Text>
                      Velocidade: {plano.velocidade} Mbps
                      <br />
                      Preço: R$ {plano.preco}
                    </Card.Text>
                    <Form.Check
                      type="radio"
                      label="Selecionar"
                      name="planoRadio"
                      onChange={() => handleSelectPlano(plano.id)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button
            variant="primary"
            type="button"
            onClick={handleContinue}
            disabled={planoSelecionado === null}
            className="w-100 mt-3"
          >
            <FaShoppingCart className="me-2" /> Adicionar ao carrinho
          </Button>
        </Form>
      </Container>
    </PageStructure>
  );
};

export default PlanosPage;
