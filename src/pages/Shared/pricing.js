import React, { Component } from "react";
import grAnaly from "../../images/PlanNegocio.png";
import grAnaly2 from "../../images/PlanNegocio2.png";
import grAnaly3 from "../../images/PlanNegocio3.png";
import grAnaly4 from "../../images/PlanNegocio4.png";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="section-title text-center">PLAN DE NEGOCIOS</h1>
                <div className="section-title-border margin-t-20"></div>
              </div>
            </div>
            <div className="row margin-t-50">
              <div className="col-lg-4">
              <img
                    src={grAnaly}
                    alt="macbook"
                    className="img-fluid"
                    width="100%"
                    height="100%"
                  />
              </div>
              <div className="col-lg-4">
              <img
                    src={grAnaly2}
                    alt="macbook"
                    className="img-fluid"
                    width="100%"
                    height="100%"
                  />
              </div>
              <div className="col-lg-4">
              <img
                    src={grAnaly3}
                    alt="macbook"
                    className="img-fluid"
                    width="100%"
                    height="100%"
                  />
              </div>
            </div>
            <div className="row margin-t-50">
            <div className="col-lg-12">
            <img
                    src={grAnaly4}
                    alt="macbook"
                    className="img-fluid"
                    width="100%"
                    height="100%"
                  />
            </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
