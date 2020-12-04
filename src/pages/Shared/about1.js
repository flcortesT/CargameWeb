import React, { Component } from "react";

import img1 from "../../images/team/Diego.png";
import img2 from "../../images/team/Lina.png";
import img3 from "../../images/team/Juan.png";
import img4 from "../../images/team/Julian.png";

class About1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-light">
                    Cargame &amp; una experiencia única para nuestros clientes{" "}
                  </h2>
                  <p className="text-muted pt-4">necesito mas informacion.</p>
                </div>
              </div>
            </div>
            <div className="row margin-t-50">
              <div className="col-lg-3 col-sm-6">
                <div className="team-box text-center">
                  <div className="team-wrapper">
                    <div className="team-member">
                      <img alt="" src={img1} className="img-fluid rounded" />
                    </div>
                  </div>
                  <h4 className="team-name">Diego Hernandez</h4>
                  <p className="text-uppercase team-designation">CEO</p>
                  <p className="text-uppercase team-designation">CARGAME LLEGA LEJOS POR TI                               </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-box text-center">
                  <div className="team-wrapper">
                    <div className="team-member">
                      <img alt="" src={img2} className="img-fluid rounded" />
                    </div>
                  </div>
                  <h4 className="team-name">Lina Velez</h4>
                  <p className="text-uppercase team-designation">JEFE ADMINISTRATIVA</p>
                  <p className="text-uppercase team-designation">CÁRGAME TECNIFICADA PARA BRINDARTE LA MEJOR EXPERIENCIA</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-box text-center">
                  <div className="team-wrapper">
                    <div className="team-member">
                      <img alt="" src={img3} className="img-fluid rounded" />
                    </div>
                  </div>
                  <h4 className="team-name">Juan Perez</h4>
                  <p className="text-uppercase team-designation">JEFE DE MERCADEO</p>
                  <p className="text-uppercase team-designation">EN CÁRGAME LA GENTE TRABAJA PARA LA GENTE Y NOSOTROS PARA ELLOS</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-box text-center">
                  <div className="team-wrapper">
                    <div className="team-member">
                      <img alt="" src={img4} className="img-fluid rounded" />
                    </div>
                  </div>
                  <h4 className="team-name">Julian Mateos</h4>
                  <p className="text-uppercase team-designation">JEFE DE SOPORTE</p>
                  <p className="text-uppercase team-designation">CÁRGAME, PARA QUE TU NECESIDAD SEA NUESTRA PREOCUPACIÓN</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About1;
