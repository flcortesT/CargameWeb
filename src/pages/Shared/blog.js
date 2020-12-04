import React, { Component } from "react";
import { Link } from "react-router-dom";

import img3 from "../../images/blog/img-3.jpg";
import img2 from "../../images/blog/img-2.jpg";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section  bg-web-desc" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-white text-center">Ultimas noticias - Cargame -</h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle text-white text-muted text-center font-secondary padding-t-30">
                 reunion del dia de hoy con el equipo de mercadeo y contenido
                </p>
              </div>
            </div>
            <div className="row margin-t-30">
              <div className="col-lg-4">
                <div className="blog-box margin-t-30">
                  <img src={img3} className="img-fluid rounded" alt="" />
                  <div>
                    <h5 className="mt-4 text-muted text-white">UI & UX Design</h5>
                    <h4 className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="blog-title text-white"
                      >
                        {" "}
                        Mas informacion de cargame{" "}
                      </Link>
                    </h4>
                    <p className="text-muted text-white">
                     mas informacion de cargame ...
                    </p>
                    <div className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="read-btn"
                      >
                        Leer más <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-box margin-t-30">
                  <img src={img2} className="img-fluid rounded" alt="" />
                  <div>
                    <h5 className="mt-4 text-muted text-white">Digital Marketing</h5>
                    <h4 className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="blog-title text-white"
                      >
                        mas información
                      </Link>
                    </h4>
                    <p className="text-muted text-white">
                     Datos datos datos ...
                    </p>
                    <div className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="read-btn"
                      >
                        Leer más <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-box margin-t-30">
                  <img src={img3} className="img-fluid rounded" alt="" />
                  <div>
                    <h5 className="mt-4 text-muted text-white">Puerta a puerta</h5>
                    <h4 className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="blog-title text-white"
                      >
                        Más información
                      </Link>
                    </h4>
                    <p className="text-muted text-white">
                     Más informacion
                    </p>
                    <div className="mt-3">
                      <Link
                        to="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                        }}
                        className="read-btn"
                      >
                        Leer más <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
