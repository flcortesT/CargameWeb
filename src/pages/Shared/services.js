import React, { Component } from "react";
import { Col, Row } from "reactstrap";


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <div className="container">
            <Row>
              <Col lg="8" className="offset-lg-2">
                <h1 className="section-title text-center">
                  Nuestros servicios
                </h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                  Pensando en prestar un servicio eficiente tanto para nuestros
                  usuarios como nuestros transportistas, disponemos de un
                  catalogo de servicios.
                </p>
              </Col>
            </Row>
            <div className="row margin-t-30">
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-diamond text-custom"></i>
                    <div className="media-body ml-4">
                      <h3>Aprovecha tu camión</h3>
                      <p className="pt-2 text-muted">
                        Aprovecha ese espacio vacío que queda en tu camión a la
                        hora de llevar un flete. Este servicio también te ayuda
                        a encontrar carga con más facilidad y rapidez cuando tu
                        camión quede totalmente vacío.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-display2 text-custom"></i>
                    <div className="media-body ml-4">
                      <h4>Viajes compartidos</h4>
                      <p className="pt-2 text-muted">
                        Cuando viajes en tu vehículo, aprovecha al 100% tu
                        carro, a la vez que optimizas los costos de transporte.
                        Un viajero podría tener un espacio libre en baúl de tu
                        vehículo, así como una o dos sillas disponibles para
                        compartir su viaje.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-piggy text-custom"></i>
                    <div className="media-body ml-4">
                      <h4>Comparte tu maleta</h4>
                      <p className="pt-2 text-muted">
                        Puedes ganar dinero extra mientras viajas en bus,
                        o barco, lleva documentos o una encomienda pequeña.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            <Row>
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-science text-custom"></i>
                    <div className="media-body ml-4">
                      <h4>Lleva documentos en el avión</h4>
                      <p className="pt-2 text-muted">
                        Estamos seguros que siempre tendras un espacio para
                        llevar documentos mientras viajas en un avión.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-news-paper text-custom"></i>
                    <div className="media-body ml-4">
                      <h4>Pide tu grúa</h4>
                      <p className="pt-2 text-muted">
                        Si lo llegas a necesitar, ¡relajate! CÁRGAME te ayuda a
                        solicitar servicio de grua, de una manera fácil, rápida
                        y eficiente.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="margin-t-20">
                <div className="services-box">
                  <div className="media">
                    <i className="pe-7s-plane text-custom"></i>
                    <div className="media-body ml-4">
                      <h4>¡Compra tu SOAT!</h4>
                      <p className="pt-2 text-muted">
                        Si eres usuario o transportador, te facilitamos la
                        compra de tu Seguro Obligatorio de Accidentes de
                        Tránsito (SOAT), seguro todo riesgo, seguros especiales
                        para carga de alta dimensión y cuantía
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Services;
