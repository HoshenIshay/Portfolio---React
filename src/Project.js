import React from 'react' ;
import './Project.css' ;
import Project1 from './img/RecipesPRO.jpg' ;
import Project2 from './img/ToDoListPRO.jpg' ;
import Project3 from './img/PlanetsPRO.jpg' ;
import Project4 from './img/keyboardPRO.jpg' ;
import Project5 from './img/ClockPRO.jpg' ;
import Project6 from './img/HamburgerPRO.jpg' ;


function Project() {
    return (
        <div className="project component__space" id="Project">
            <div className="heading">
                <h1 className="heading">My latest projects</h1>
                <p className="heading p__color">See full projects cases on GitHub </p>
                <p className="heading p__color">Any interests on collaborathing ?</p>
                <p className="heading p__color">Just drop me a line !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Recipe Website</h5>
                                <h4 className="project__text">Angular & c# - Recipe Website</h4>
                                <a href="https://github.com/HoshenIshay/Recipes-site-Angular" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">To Do List</h5>
                                <h4 className="project__text">React - Task management system</h4>
                                <a href="https://github.com/HoshenIshay/Task-management-system--react" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Solar system</h5>
                                <h4 className="project__text">JavaScript - Solar system</h4>
                                <a href="https://github.com/HoshenIshay/Solar-System-java-script" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">keyboard</h5>
                                <h4 className="project__text">React - keyboard</h4>
                                <a href="https://github.com/HoshenIshay/react-key-board" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Clock</h5>
                                <h4 className="project__text">JavaScript - Clock</h4>
                                <a href="https://github.com/HoshenIshay/javaScript-clock" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Hamburger game</h5>
                                <h4 className="project__text">JavaSctipt - Hamburger game</h4>
                                <a href="https://github.com/HoshenIshay/Hamburger-game" className="project__btn">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="view__more__btn d__flex align__item__center justify__content__center pxy__30">
                        <button onClick={()=> window.open("https://github.com/HoshenIshay", "_blank")} className="view__more btn__hover pinter btn">View more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
