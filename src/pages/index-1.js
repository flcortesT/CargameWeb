import React, { Component } from "react";
import { Link } from "react-router-dom";

//Layout css
import "../css/colors/cyan.css";

// Layouts
import Header from "./Layouts/header";
import Footer from "./Layouts/footer";
import FooterAlt from "./Layouts/footer-alt";

// Shared
import About from "./Shared/about";
import Services from "./Shared/services";
import About1 from "./Shared/about1";
import Pricing from "./Shared/pricing";
import Blog from "./Shared/blog";
import ContactUs from "./Shared/contact-us";
import Register from "./Shared/registerUser";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";


class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("nav-bar").classList.add("navbar-white");
  }

  render() {
    return (
      <React.Fragment>
        {/*  Header */}
        <Header />

        {/* Home Section */}
        <section
          className="section bg-home home-half"
          id="home"
          data-image-src="images/skateboard.jpg"
        >
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-white text-center">
                <h4 className="home-small-title">Cargame</h4>
                <h1 className="home-title">
                  Somos una plataforma digital que búsca acercar las regiones
                  más apartadas con las ciudades principales.
                </h1>
                <p className="padding-t-15 home-desc mx-auto">
                  Conectamos a transportadores con usuarios generadores de
                  carga.
                </p>
                <p className="play-shadow margin-l-r-auto">
                  <Link
                    to="#"
                    onClick={this.openModal}
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-center"></i>
                  </Link>
                </p>

                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="D7lRVnlIL8Y"
                  onClose={() => this.setState({ isOpen: false })}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <About />

        {/* Services */}
        <Services />

        {/* About Us */}
        <About1 />

        {/* New memeber*/}
        <Register />

        {/* Pricing */}
        <Pricing />

        {/* Blog */}
        <Blog />

        {/* ContactUs */}
        <ContactUs />

        {/* Footer */}
        <Footer />

        {/* Footer Alt */}
        <FooterAlt />
      </React.Fragment>
    );
  }
}

export default Index1;
