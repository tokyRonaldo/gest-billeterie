import React, { Component } from "react";
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgHome from '../images/background/homepage-one-banner.jpg'
import imgType from '../images/speakers/speaker-one.jpg'
function Home({paddingTop}) {
        return (

            <div>

            <section  className="banner bg-banner-one overlay" style={{ marginTop: `${paddingTop}px` }}>
            <div className="container" >
                <div className="row ">
                    <div className="col-lg-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{border :`1px solid #776e6e`}}>
                            <div className="carousel-inner" >
                            <div className="carousel-item active">
                            <img src={imgHome} className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>test</h5>
                                <p>ts</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" style={{height : `4rem`}} aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" style={{height : `4rem`}} aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                            </div>                            
                    </div>
                </div>
            </div>
        </section>


        <section className="sectionType type">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3><span className="alternate">Types</span></h3>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="speaker-item">
                        <div className="image">
                            <img src={imgType} alt="speaker" className="img-fluid" />
                        </div>
                        <div className="content text-center">
                            <h5><a href="single-speaker.html">Johnathan Franco</a></h5>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="speaker-item">
                        <div className="image">
                            <img src="images/speakers/speaker-two.jpg" alt="speaker" className="img-fluid" />
                        </div>
                        <div className="content text-center">
                            <h5><a href="single-speaker.html">Johnathan Franco</a></h5>
                            <p>Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="section about bg-speaker overlay-lighter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 align-self-center">
                        <div className="image-block bg-about">
                            <img className="img-fluid" src="images/speakers/featured-speaker.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 align-self-center">
                        <div className="content-block">
                            <h2>About The <span className="alternate">Eventre</span></h2>
                            <div className="description-one">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
                                </p>
                            </div>
                            <div className="description-two">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="section contacts">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title">
                            <h3><span class="alternate">Contact</span></h3>
                            <div className="row d-flex ">
                            <div className="d-flex justify-content-center">
                            <span className="pr-3"><i className="fa-brands fa-facebook fa-lg"></i></span><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit.</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>

    );
}

export default Home;