import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import PageStructure from '../components/PageStructure';
import { useLocation, useNavigate } from 'react-router-dom';
import SweetAlert from '../components/SweetAlert';
import ApiCall from '../services/ApiCall';

interface Plano {
    id: number;
    nome: string;
    velocidade: number;
    preco: string;
}

const ResumoCompra: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [plano, setPlano] = useState<Plano | null>(null);

    const state = location.state || {};
    const { formData = {} } = state;

    const { planoId, nome, cpf, rg, data_nascimento, telefone, telefone_secundario, email, endereco, bairro, numero, complemento, referencia, nome_pai, nome_mae, estado_civil, genero, nacionalidade, profissao, vendedor, dia_vencimento, observacao } = formData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiResponse = await ApiCall.get<Plano>(`/planos/${planoId}`);
                setPlano(apiResponse.data);
            } catch (error) {
                SweetAlert({
                    title: 'Ops!',
                    text: 'Desculpe, não encontramos dados para o plano selecionado.',
                    icon: 'warning',
                });
            }
        };
        fetchData();
    }, [planoId]);

    const handleConfirmarCompra = async () => {
        try {
            const apiResponse = await ApiCall.post('/fichaCadastral/', formData);

            if (apiResponse.data) {
                SweetAlert({
                    title: 'Show!',
                    text: 'Sua solicitação foi efetuada com sucesso. Logo entraremos em contato!',
                    icon: 'success',
                });
            } else {
                SweetAlert({
                    title: 'Ops!',
                    text: 'Desculpe, não foi possível prosseguir com seu cadastro.',
                    icon: 'error',
                });
            }
        } catch (error) {
            SweetAlert({
                title: 'Erro!',
                text: 'Ocorreu um erro ao processar sua solicitação.',
                icon: 'error',
            });

        } finally {
            navigate('/');
        }
    };

    return (
        <PageStructure>
            <div className="home-container">
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Resumo da Compra</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col md={6}>
                                    <strong>Detalhes do Plano:</strong>
                                    {plano ? (
                                        <>
                                            <br />
                                            <strong>Nome:</strong> {plano.nome}
                                            <br />
                                            <strong>Velocidade:</strong> {plano.velocidade} Mbps
                                            <br />
                                            <strong>Preço:</strong> R$ {plano.preco}
                                        </>
                                    ) : (
                                        'Carregando...'
                                    )}
                                </Col>
                                <Col md={6}>
                                    <strong>Detalhes cadastrais:</strong>
                                    <br />
                                    <strong>Nome:</strong> {nome}
                                    <br />
                                    <strong>CPF:</strong> {cpf}
                                    <br />
                                    <strong>RG:</strong> {rg}
                                    <br />
                                    <strong>Data de Nascimento:</strong> {data_nascimento}
                                    <br />
                                    <strong>Telefone:</strong> {telefone}
                                    <br />
                                    <strong>Telefone Secundário:</strong> {telefone_secundario}
                                    <br />
                                    <strong>Email:</strong> {email}
                                    <br />
                                    <strong>Endereço:</strong> {endereco}
                                    <br />
                                    <strong>Bairro:</strong> {bairro}
                                    <br />
                                    <strong>Número:</strong> {numero}
                                    <br />
                                    <strong>Complemento:</strong> {complemento}
                                    <br />
                                    <strong>Referência:</strong> {referencia}
                                    <br />
                                    <strong>Nome do Pai:</strong> {nome_pai}
                                    <br />
                                    <strong>Nome da Mãe:</strong> {nome_mae}
                                    <br />
                                    <strong>Estado Civil:</strong> {estado_civil}
                                    <br />
                                    <strong>Gênero:</strong> {genero}
                                    <br />
                                    <strong>Nacionalidade:</strong> {nacionalidade}
                                    <br />
                                    <strong>Profissão:</strong> {profissao}
                                    <br />
                                    <strong>Vendedor:</strong> {vendedor}
                                    <br />
                                    <strong>Dia de Vencimento:</strong> {dia_vencimento}
                                    <br />
                                    <strong>Observação:</strong> {observacao}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={handleConfirmarCompra}>
                        Confirmar Compra
                    </Button>
                </div>
            </div>
        </PageStructure>
    );
};

export default ResumoCompra;
