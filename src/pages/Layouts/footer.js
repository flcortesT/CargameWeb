
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 margin-t-20">
                                <h4>CARGAME</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Ppal</Link></li>
                                        <li><Link  onClick={evt => {  evt.preventDefault(); } } to="#">Acerca de nosotros</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Contáctanos</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Información</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Términos & Condiciones</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Politica de privacidad</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Acerca de nosotros</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Premios</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Soporte</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Preguntas frecuentes</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">PQRs</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Nuevas opciones</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Subscríbete</h4>
                                <div className="text-muted margin-t-20">
                                    <p>En cargame estamos innovandonos todo el tiempo en beneficio de nuestros socios y usuarios por eso los invitamos a que esten al día de nuestros nuevas opciones y noticias de cargame.</p>
                                </div>
                                <form className="form subscribe">
                                    <input placeholder="Email" className="form-control" required />
                                    <Link onClick={evt => {  evt.preventDefault(); } } to="#" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Footer;


