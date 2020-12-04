import React, { Component } from "react";
import { Link } from "react-router-dom";

class WebsiteDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-white">Cargame un sueño hecho realidad</h2>
                <p className="padding-t-15 home-desc mx-auto">
                  Un servicio colaborativo tiene una gran responsabilidad para
                  nosotros por esta razon en las plataformas moviles se
                  encuentra nuestra solución disponible.
                </p>
                <Link
                  to="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                  }}
                  className="btn btn-bg-white margin-t-30 waves-effect waves-light"
                >
                  Ver plan & precios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
