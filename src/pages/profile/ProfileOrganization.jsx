import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CreateVolunteering from "../organization/components/CreateVolunteering";
import CreateEvent from "../organization/components/CreateEvent";
import EditEvent from "../organization/components/EditEvent";
import EditVolunteering from "../organization/components/EditVolunteering";

function Profile() {

  const { user } = useAuth();

  return (
    <>
      <Container className='mt-5 mb-20'>
        <Row className="gutters">
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <Card className="h-100">
              <Card.Body>
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://www.kindpng.com/picc/m/794-7947724_transparent-manufacturing-icon-png-public-sector-png-png.png"
                        alt="User Avatar"
                      />
                    </div>
                    <h5 className="user-name">
                      {user.organization.name}
                    </h5>
                    <h6 className="user-email">{user.mail}</h6>
                  </div>
                  <div className="about">
                    <h5>
                      {user.organization.verified === true ? 'Verificado' : 'No verificado'}
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
                    <h6 className="ProfileText">Información Corporativa</h6>
                    <br />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className="EmployeeLabel">
                      <h5 htmlFor="fullName">Nombre</h5>
                      <input
                        value={user.organization.name}
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
                      <h5 htmlFor="eMail">Cédula jurídica</h5>
                      <input
                        value={user.organization.cedula}
                        type="text"
                        className="form-control"
                        id="eMail"
                        placeholder="Apellido"
                        readOnly
                      />
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className="EmployeeLabel">
                      <h5 htmlFor="phone">Dirección</h5>
                      <input
                        value={user.organization.address}
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
                      <h5 htmlFor="website">Cuenta IBAN</h5>
                      <input
                        value={`CR${user.organization.bankaccount}`}
                        type="text"
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
                        value={user.mail}
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
                      <h5 htmlFor="sTate">Permisos</h5>
                      <input
                        value="Organización"
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
                    <Col md={1} sm={1} lg={1}></Col>

                    <Col md={1} sm={1} lg={1}>
                      <NavLink exact to="/logout" activeclassname="activeClicked">
                        <Button>
                          <MdLogout />
                        </Button>
                      </NavLink>
                    </Col>
                  </Row>

                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br></br> <br></br>


        <div className="grid place-content-center ">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900 pt-12 pb-4 ">
              Mis voluntariados publicados
            </h3>

            {user.organization.verified === true ?

              <div className="text-center">
                <CreateVolunteering organizationId={user.organization.id} />
              </div>

              : <p className="text-red-500 underline">Verifica tu usuario para crear voluntariados</p>}

            <div>
              <p className="w-48 text-center pt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
              </p>
            </div>
          </div>
        </div>

        <hr
          class="my-12 h-px border-t-0 bg-400 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        <Container className="mt-5">
          <div className="row">
            {user.organization.volunteerings?.map((item) => (
              <div className="col">
                <Card className="mb-3 card">
                  <Card.Body>
                    <h4>{item.projectName}</h4>
                    <h6>{item.category}</h6>
                    <p>
                      La fecha de inicio del voluntariado es:{" "}
                      {item.startDate.substr(0, 10)} y termina en:{" "}
                      {item.finishDate.substr(0, 10)}
                    </p>
                    <Link to={`/volunteering/${item.id}`}>
                      <button className="acceptButton">Ver</button>
                    </Link>
                    <EditVolunteering Volunteering={item}/>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>

        <br></br>       <br></br>


        <div className="grid place-content-center ">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900 pt-12 pb-4 ">
              Mis eventos ofrecidos
            </h3>

            {user.organization.verified === true ?

              <div className="text-center">
                <CreateEvent organizationId={user.organization.id} />
              </div>

              : <p className="text-red-500 underline">Verifica tu usuario para crear eventos</p>}

            <div>
              <p className="w-48 text-center pt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
              </p>
            </div>
          </div>
        </div>


        <hr
          class="my-12 h-px border-t-0 bg-400 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        <Container className="mt-5">
          <div className="row">
            {user.organization.events?.map((item) => (
              <div className="col">
                <Card className="mb-3 card">
                  <Card.Body>
                    <h4>{item.name}</h4>
                    <h6>{item.category}</h6>
                    <p>
                      La fecha de la actividad es {(item.date).substr(0, 10)}
                    </p>
                    <Link to={`/activities/${item.id}`}>
                      <button className="acceptButton">Detalles</button>
                    </Link>
                    <EditEvent Event={item}/>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>

      </Container>

    </>
  )
}

export default Profile