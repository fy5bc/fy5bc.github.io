import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>IoT Project</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Card.Text>
                            <Button variant="primary">it's a button</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Web design gigs</Card.Title>
                            <Card.Text>
                            SIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Card.Text>
                            <Button variant="primary">Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Final Year Project</Card.Title>
                            <Card.Text>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;