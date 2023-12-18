import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import PageStructure from '../components/PageStructure';


const FichaCadastral: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        planoId: '',
        nome: '',
        cpf: '',
        rg: '',
        data_nascimento: '',
        telefone: '',
        telefone_secundario: '',
        email: '',
        endereco: '',
        bairro: '',
        numero: '',
        complemento: '',
        referencia: '',
        nome_pai: '',
        nome_mae: '',
        estado_civil: '',
        genero: '',
        nacionalidade: '',
        profissao: '',
        vendedor: '',
        dia_vencimento: '',
        observacao: '',
    });

    useEffect(() => {
        const planoId = location.state?.planoId;

        if (planoId !== undefined) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                planoId: String(planoId),
            }));
        }
    }, [location.state?.planoId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleGoToPurchaseSummary = () => {
        navigate('/resumoCompra', { state: { formData } });
    };
    return (
        <PageStructure>
            <div className="home-container">
                <h1>Ficha Cadastral</h1>
                <p>Preencha o formulário abaixo que entraremos em contato o mais breve possível.</p>
                <Form onSubmit={handleGoToPurchaseSummary}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCpf">
                        <Form.Label>CPF*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o CPF"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formRg">
                        <Form.Label>RG*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o RG"
                            name="rg"
                            value={formData.rg}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formDataNascimento">
                        <Form.Label>Data de Nascimento*</Form.Label>
                        <Form.Control
                            type="date"
                            name="data_nascimento"
                            value={formData.data_nascimento}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formTelefone">
                        <Form.Label>Telefone*</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Digite o telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formTelefoneSecundario">
                        <Form.Label>Telefone Secundário</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Digite o telefone secundário"
                            name="telefone_secundario"
                            value={formData.telefone_secundario}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite o email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEndereco">
                        <Form.Label>Endereço*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o endereço"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBairro">
                        <Form.Label>Bairro*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o bairro"
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formNumero">
                        <Form.Label>Número*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o número"
                            name="numero"
                            value={formData.numero}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o complemento"
                            name="complemento"
                            value={formData.complemento}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formReferencia">
                        <Form.Label>Referência</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a referência"
                            name="referencia"
                            value={formData.referencia}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formNomePai">
                        <Form.Label>Nome do Pai*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do pai"
                            name="nome_pai"
                            value={formData.nome_pai}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formNomeMae">
                        <Form.Label>Nome da Mãe*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome da mãe"
                            name="nome_mae"
                            value={formData.nome_mae}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEstadoCivil">
                        <Form.Label>Estado Civil*</Form.Label>
                        <Form.Control
                            as="select"
                            name="estado_civil"
                            value={formData.estado_civil}
                            onChange={handleChange}
                            required
                        >
                            <option value="solteiro(a)">Solteiro(a)</option>
                            <option value="casado(a)">Casado(a)</option>
                            <option value="divorciado(a)">Divorciado(a)</option>
                            <option value="viuvo(a)">Viúvo(a)</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGenero">
                        <Form.Label>Gênero*</Form.Label>
                        <Form.Control
                            as="select"
                            name="genero"
                            value={formData.genero}
                            onChange={handleChange}
                            required
                        >
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formNacionalidade">
                        <Form.Label>Nacionalidade*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a nacionalidade"
                            name="nacionalidade"
                            value={formData.nacionalidade}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfissao">
                        <Form.Label>Profissão*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a profissão"
                            name="profissao"
                            value={formData.profissao}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formVendedor">
                        <Form.Label>Vendedor*</Form.Label>
                        <Form.Control
                            as="select"
                            name="vendedor"
                            value={formData.vendedor}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione um vendedor</option>
                            <option value="Vendedor1">Vendedor 1</option>
                            <option value="Vendedor2">Vendedor 2</option>
                            <option value="Vendedor3">Vendedor 3</option>
                            <option value="Vendedor4">Vendedor 4</option>
                        </Form.Control>
                    </Form.Group>



                    <Form.Group controlId="formDiaVencimento">
                        <Form.Label>Dia de Vencimento*</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Digite o dia de vencimento"
                            name="dia_vencimento"
                            value={formData.dia_vencimento}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formObservacao" className="mb-3"> {/* Adicionado className="mb-3" */}
                        <Form.Label>Observação</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Digite uma observação"
                            name="observacao"
                            value={formData.observacao}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" >
                            Continuar
                        </Button>
                    </div>
                </Form>
            </div>
        </PageStructure>

    );
};

export default FichaCadastral;
