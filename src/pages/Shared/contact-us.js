
import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class ContatUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Mantente en contacto</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Prosperamos cuando se nos ocurren ideas innovadoras, pero también entendemos que un concepto inteligente debe ser respaldado con resultados medibles.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mt-4 pt-4">
                                    <p className="mt-4"><span className="h5">Lugar de origen:</span><br /> <span className="text-muted d-block mt-2">Villavicencio, Meta - Colombia</span></p>
                                    <p className="mt-4"><span className="h5">Horario de trabajo:</span><br /> <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                   <AvField type="text" name="name" className="form-control"  placeholder="Nombre*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control"  placeholder="Email*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <AvField type="text"   name="subject" className="form-control"  placeholder="Comentario.."  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea name="comments"  id="comments" rows="4" className="form-control" placeholder="Su mensaje..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Enviar mensaje" />
                                                <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default ContatUs;


