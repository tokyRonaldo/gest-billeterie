import React, { Component } from "react";
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgHome from '../images/background/homepage-one-banner.jpg'
import imgSpeaker from '../images/speakers/featured-speaker.jpg'

function EventDetail({paddingTop}) {
        return (
            <div>  
                <section className="page-title bg-title overlay-dark">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12 text-center col" >
                                <div className="title">
                                    <h3>Evenements</h3>
                                </div>
                                <ol className="breadcrumb p-0 m-0 text-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Evenements</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" style={{padding: 60}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 align-self-center">
                                <div className="image-block" >
                                    <img src={imgHome} style={{maxWidth :`100%`, borderRadius : 0}} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 align-self-center">
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
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-main-md">Buy ticket</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-transparent-md">Read more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>  
        )}
    export default EventDetail;