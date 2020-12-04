import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="registerUser">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="section-title text-center">Nuevo miembro transportista</h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle font-secondary text-muted text-center padding-t-30">
                  Registro de nuevo miembro transportista. bienvenido
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default RegisterUser;
