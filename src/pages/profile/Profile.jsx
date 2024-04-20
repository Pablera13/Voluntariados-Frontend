import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdLogout } from "react-icons/md";

function Profile() {
  return (
    <>
    <Container className='mt-5'>
      <Row className="gutters">
        <Col xl={3} lg={3} md={12} sm={12} xs={12}>
          <Card className="h-100">
            <Card.Body>
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://image.ibb.co/jw55Ex/def_face.jpg"
                      alt="User Avatar"
                    />
                  </div>
                  <h5 className="user-name">
                    Nombre Apellidos
                  </h5>
                  <h6 className="user-email">correo@gmail.com</h6>
                </div>
                <div className="about">
                  <h5>
                   Rol
                  </h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={9} lg={9} md={12} sm={12} xs={12}>
          <Card className="h-100">
            <Card.Body>
              <Row className="gutters">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <h6 className="ProfileText">Información Personal</h6>
                  <br />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="fullName">Nombre</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder='Nombre'
                      readOnly
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="eMail">Primer Apellido</h5>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Apellido"
                      readOnly
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="phone">Segundo Apellido</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Apellido"
                      readOnly
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="website">Cédula</h5>
                    <input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="12345678"
                      readOnly
                    />
                  </div>
                </Col>

                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <br />
                  <h6 className="ProfileText">Información de Usuario</h6>
                  <br />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="Street">Correo Electrónico</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="Street"
                      placeholder="correo@gmail.com"
                      readOnly
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="ciTy">Usuario</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="ciTy"
                      placeholder="Nombre de usuario"
                      readOnly
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className="EmployeeLabel">
                    <h5 htmlFor="sTate">Permisos</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="sTate"
                      placeholder="Rol"
                      readOnly
                    />
                  </div>
                </Col>
                <br />

                <Row>
                  <Col md={9} sm={9} lg={9}></Col>

                  <Col md={1} sm={1} lg={1}>
                    
                  </Col>
                  <Col md={1} sm={1} lg={1}>
                    <Button className="BtnRed">
                      <MdLogout />
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Profile