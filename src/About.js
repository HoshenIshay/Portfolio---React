import React from 'react';
import './About.css'
import aboutImg from "./img/AboutIMG.png"
import CV from "./img/Hoshen Ishay CV.pdf";

function About() {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector(".bottom__to__top")
        upToTop.classList.toggle("active", window.scrollY > 0)
    })
    return (
        <div className="about component__space" id="About">
            <div className="container">
                <div className="row">
                    <div className="col__2" id="img__col">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                            I’m Hoshen , a passionate full-stack developer.
                            <br/>
                            Since I was a girl , I’ve always loved computers , and I started programming as a teenager .
                            </p>
                            <p className="about__text p__color">
                            After high school , I followed my dreams and studied software engineering and development .
                            <br/>
                            Finally , I could use my logical side to code and my creative side to design .
                            </p>
                            <p className="about__text p__color">
                            These days my time is spent coding , designing , learning and researching .
                            <br/>
                            Out of the office you’ll find me playing chess , solving a Hungarian cube , and listening to music :)
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href={CV} download="Hoshen Ishay CV.pdf"><button className="about btn pointer" >Download CV</button></a>
                                <a href="#Contact"><button className="about btn pointer">Contact me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up__to__top__btn">
                <a href="#" className="bottom__to__top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About
