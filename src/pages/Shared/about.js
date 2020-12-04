import React, { Component } from "react";
import grAnaly from "../../images/Asset 6.png";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>
                   QUE HACEMOS ?{" "}
                  </h3>
                  <p className="text-muted web-desc">
                    Aprovechamos los espacios vacios de los transportadores para que las personas se puedan transportar y/o envíar su carga o encomiendas
                  </p>
                  <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                    <li className="">Viajes compartidos</li>
                    <li className="">Documentos y paquetes.</li>
                    <li className="">Carga y trasteos.</li>
                    <li className="">Servicio de grúa para carro o moto.</li>
                  </ul>
                  
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="features-img mx-auto mr-lg-0">
                  <img src={grAnaly} alt="macbook" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
