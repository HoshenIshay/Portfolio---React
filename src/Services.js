import React from 'react' ;
import './Services.css' ;

function Services() {
    return (
        <div className="services component__space" id="Services">
            <div className="heading">
                <h1 className="heading">Skills</h1>
                <p className="heading p__color">I enjoy turning complex problems into simple and beautiful code . </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">Server side</h1>
                                <p className="p services__text p__color">Python</p>
                                <p className="p services__text p__color">Java</p>
                                <p className="p services__text p__color">C# </p>
                                <p className="p services__text p__color">Node.js</p>
                                <p id="fake" className="p services__text p__color"></p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">Client side</h1>
                                <p className="p services__text p__color">JavaScript  + ES6 </p>
                                <p className="p services__text p__color">React</p>
                                <p className="p services__text p__color">Angular</p>
                                <p className="p services__text p__color">Vue.js</p>
                                <p id="fake" className="p services__text p__color"></p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">Web Design</h1>
                                <p className="p services__text p__color">HTML5 </p>
                                <p className="p services__text p__color">CSS3 </p>
                                <p className="p services__text p__color">Bootstrap , Material-UI</p>
                                <p className="p services__text p__color">XD</p>
                                <p id="fake" className="p services__text p__color"></p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">Databases</h1>
                                <p className="p services__text p__color">Mongo DB</p>
                                <p className="p services__text p__color">SQL Server </p>
                                <p className="p services__text p__color">MySQL</p>
                                <p className="p services__text p__color">Firebase </p>
                                <p id="fake"  className="p services__text p__color"></p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">Mobile app</h1>
                                <p className="p services__text p__color">React native</p>
                                <p className="p services__text p__color">Flutter</p>
                                <br/>
                                <br/>
                                <br/>
                                <p id="fake" className="p services__text p__color"></p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="services__box pointer">
                            <div className="icon">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div className="services__meta">
                                <h1 className="services__text">More</h1>
                                <p className="p services__text p__color">Linux </p>
                                <p className="p services__text p__color"> Assembler</p>
                                <p className="p services__text p__color">Technical Support</p>
                                <p id="fake" className="p services__text p__color"></p>
                                <br/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
