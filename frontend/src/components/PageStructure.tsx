import React, { ReactNode } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './PageStructure.css';

interface PageStructureProps {
    children: ReactNode;
}

const PageStructure: React.FC<PageStructureProps> = ({ children }) => {
    return (
        <div id="root">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Conteúdo Principal */}
            <Container as="main" style={{ marginTop: '20px', marginBottom: '60px' }}>
                {children}
            </Container>
        </div>
    );
};

export default PageStructure;
