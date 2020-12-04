import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "./Scrollspy";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { Tab: "", isOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  /**
   * Sets active tab
   */
  setActiveTab = (tab) => {
    this.setState({ Tab: tab });
  };

  render() {
    return (
      <React.Fragment>
        <div id="is-sticky">
          <nav
            className="navbar navbar-expand-lg fixed-top navbar-custom sticky"
            id="nav-bar"
          >
            <div className="container">
              <Link className="navbar-brand logo text-uppercase" to="/">
                <i data-image-src="images/Asset 6.png"></i>Cargame{" "}
              </Link>

              <button
                className="navbar-toggler"
                onClick={this.toggleMenu}
                type="button"
              >
                <i className="mdi mdi-menu"></i>
              </button>
              <div
                className={
                  this.state.isOpen
                    ? "collapse navbar-collapse show"
                    : "collapse navbar-collapse"
                }
                style={{ display: this.state.isOpen ? "inline-grid" : "" }}
                id="navbarCollapse"
              >
                <ScrollspyNav
                  scrollTargetIds={[
                    "home",
                    "features",
                    "services",
                    "about",
                    "pricing",
                    "blog",
                    "contact",
                  ]}
                  activeNavClass="active"
                  scrollDuration="800"
                  headerBackground="true"
                  className={
                    this.state.isOpen
                      ? "navbar-nav ml-0 float-left"
                      : "navbar-nav navbar-center"
                  }
                >
                  <ul
                    className={
                      this.state.isOpen
                        ? "navbar-nav navbar-left"
                        : "navbar-nav ml-auto navbar-left"
                    }
                    id="mySidenav"
                  >
                    <li className="nav-item active">
                      <a href="#home" className="nav-link">
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#features" className="nav-link">
                        Quienes somos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#services" className="nav-link">
                        Servicios
                      </a>
                    </li>
                   
                    <li className="nav-item">
                      <a href="#pricing" className="nav-link">
                       Planes de negocio
                      </a>{" "}
                    </li>
                    
                    <li className="nav-item">
                      <a href="#blog" className="nav-link">
                        Noticias
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">
                        Contáctanos
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">
                        Login
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        Registrate
                      </a>
                    </li>
                  </ul>
                </ScrollspyNav>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
