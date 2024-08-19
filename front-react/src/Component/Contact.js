import React, { Component } from "react";
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgHome from '../images/background/homepage-one-banner.jpg'
import imgType from '../images/speakers/speaker-one.jpg'
function Home({paddingTop}) {
        return (
            <div>  
                <section class="page-title bg-title overlay-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="title">
                                    <h3>Contacts</h3>
                                </div>
                                <ol class="breadcrumb p-0 m-0">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Contacts</li>
                                </ol>
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
        )}