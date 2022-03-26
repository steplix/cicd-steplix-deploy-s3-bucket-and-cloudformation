import React from "react";

const HappyClients = () => {
    return (
        <div>
            <section className="page-section text-left" id="clients">
                <div className="container">
                    <h2 className="page-section-heading">Clientes felices</h2>
                    <hr className="primary small mb-5" />
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                data-interval="5000"
                            >
                                <div className="row align-items-center justify-content-between">
                                    <div
                                        className="col-6 col-sm-2 text-center"
                                        data-toggle="modal"
                                        data-target="#client-agrocanje"
                                    ></div>
                                    <div
                                        className="col-6 col-sm-2 text-center"
                                        data-toggle="modal"
                                        data-target="#client-sura"
                                    >
                                        <img
                                            src="assets/img/clients/client-sura.svg"
                                            alt="Sura Seguros"
                                            height="40px"
                                        />
                                    </div>
                                    <div
                                        className="col-6 col-sm-2 text-center"
                                        data-toggle="modal"
                                        data-target="#client-finket"
                                    >
                                        <img
                                            src="assets/img/clients/client-finket.svg"
                                            alt="Finket"
                                            height="60px"
                                        />
                                    </div>
                                    <div className="col-6 col-sm-2 text-center">
                                        <img
                                            src="assets/img/clients/client-c5n.svg"
                                            alt="C5N"
                                            height="35px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="5000">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-6 col-sm-2 text-center">
                                        <img
                                            src="assets/img/clients/client-diime.svg"
                                            alt="Diime Analytics"
                                            height="50px"
                                        />
                                    </div>
                                    <div className="col-6 col-sm-2 text-center mt-3">
                                        <img
                                            src="assets/img/clients/client-pow.svg"
                                            alt="POW"
                                            height="35px"
                                        />
                                    </div>
                                    <div className="col-6 col-sm-3 text-center">
                                        <img
                                            src="assets/img/clients/client-smartium.svg"
                                            alt="Smartium"
                                            height="60px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators position-relative mt-5">
                            <li
                                className="steplix-carousel-indicators active"
                                data-target="#carouselExampleInterval"
                                data-slide-to="0"
                            ></li>
                            <li
                                className="steplix-carousel-indicators"
                                data-target="#carouselExampleInterval"
                                data-slide-to="1"
                            ></li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyClients;
