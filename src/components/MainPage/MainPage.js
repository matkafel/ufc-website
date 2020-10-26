import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';



const MainPage = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <div className="MainPage">
                <div className="home-page-container">
                    <div className="container">
                        <Navigation />
                        <div className="text">
                            <h1 data-aos="slide-up">Jon Jones</h1>
                            <p data-aos="slide-up">Goes for the heavyweight belt</p>
                        </div>
                        <div className="info-wrapper">
                            <div className="schedule">
                                <h2 >Schedule</h2>
                                <div className="schedule-flex">
                                    <div className="schedule-item">
                                        <h3>UFC 254</h3>
                                        <p>Khabib vs Geathje</p>
                                    </div>
                                    <div className="schedule-item">
                                        <h3>UFC 255</h3>
                                        <p>Figueiredo vs Perez</p>
                                    </div>
                                    <div className="schedule-item">
                                        <h3>UFC 256</h3>
                                        <p>Nunes vs Anderson</p>
                                    </div>
                                </div>
                            </div>
                            <div className="latestNews">
                                <h2 >Latest News</h2>
                                <div className="lastNews">
                                    <div className="img "></div>
                                    <p>Adesanya still undefeated</p>
                                </div>
                                <div className="lastNews">
                                    <div className="img news2"></div>
                                    <p>Legendary Polish Power</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="News">
                    <div className="container">
                        <h2>News</h2>
                        <div className="news-wrapper">
                            <div data-aos="slide-right" className="bigNews">
                                <div data-aos="zoom-in" className="info">
                                    Legendary Polish Power is still alive Jan Błachowicz knocked out Domink Reyes and become a champion
                                </div>
                            </div>
                            <div className="smallNews-flex">
                                <div data-aos="slide-left" className="smallNews">
                                    <div data-aos="zoom-in" className="info">
                                        Chandler in UFC
                                    </div>
                                </div>
                                <div data-aos="slide-left" className="smallNews">
                                    <div data-aos="zoom-in" className="info">
                                        Kamaru Usman was injured
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Big-picture" data-aos="zoom-in">
                    <div className="container">
                        <h2>The King is Back</h2>
                        <div className="icon-scroll"></div>
                    </div>
                </div>


                <div className="Comeback-page">
                    <div className="container">
                        <div className="flex">
                            <div className="first">
                                <div data-aos="zoom-in" className="img"></div>
                            </div>
                            <div className="second">
                                <h3 data-aos="fade-up">The King is back</h3>
                                <p data-aos="fade-up">CONOR MCGREGOR</p>
                                <p data-aos="fade-up" className="text">Conor McGregor is coming out of retirement once again
                                to win the championship belt again,
                                but to get a chance of a rematch with Khabib
                                he will have to beat another opponent.
                                All of this indicates that it will be Dustin Poirier
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="imgPorier"></div>
                </div>

                <div data-aos="zoom-in" className="Fight-island">
                    <div className="container">
                        <div className="text">
                            <h3>Fight island</h3>
                            <span>Everything you need to know</span>
                            <h4>Where is Fight Island</h4>
                            <p data-aos="fade-left">Return to UFC FIGHT ISLAND will be held on Yas Island, one of the Emirates most popular leisure, shopping, and entertainment destinations, and the location of the first edition of UFC FIGHT ISLAND this past July.  UFC will produce five events for Return to UFC FIGHT ISLAND, including two Pay Per Views and three Fight Nights.</p>
                            <h4>What is the Fight Island Schedule?</h4>
                            <p data-aos="fade-right">The first four events, including UFC 253: ADESANYA VS. COSTA, and the three proceeding FIGHT NIGHTS, will be broadcast live in prime time in the United States, while UFC 254: KHABIB VS. GAETHJE will be broadcast in prime time in Abu Dhabi</p>
                            <div className="icon-scroll"></div>
                        </div>
                    </div>
                </div>


                <div className="Records">
                    <div className="container">
                        <h1>Records</h1>
                        <div className="flex">
                            <div data-aos="fade-right" className="record">
                                <div className="img">
                                    <div className="text">
                                        <p className="number">36</p>
                                        <p className="author">Jim Miller</p>
                                    </div>
                                </div>
                                <p className="subtitle">Most Fight</p>
                            </div>
                            <div data-aos="fade-up" className="record">
                                <div className="img mostWin">
                                    <div className="text">
                                        <p className="number">23</p>
                                        <p className="author">Donald Cerrone</p>
                                    </div>
                                </div>
                                <p className="subtitle">Most Win</p>
                            </div>
                            <div data-aos="fade-left" className="record">
                                <div className="img mostKo">
                                    <div className="text">
                                        <p className="number">12</p>
                                        <p className="author">Victor Belfort</p>
                                    </div>
                                </div>
                                <p className="subtitle">Most KO</p>
                            </div>
                            <div data-aos="fade-right" className="record">
                                <div className="img mostFinishes">
                                    <div className="text">
                                        <p className="number">16</p>
                                        <p className="author">Charles Oliveira</p>
                                    </div>
                                </div>
                                <p className="subtitle">Most Finishes</p>
                            </div>
                            <div data-aos="fade-up" className="record">
                                <div className="img fastestFinishes">
                                    <div className="text">
                                        <p className="number">0.05</p>
                                        <p className="author">Jorge Masvidal</p>
                                    </div>
                                </div>
                                <p className="subtitle">Fastest KO</p>
                            </div>
                            <div data-aos="fade-left" className="record">
                                <div className="img mostDefeated">
                                    <div className="text">
                                        <p className="number">11</p>
                                        <p className="author">Demitrious Johnson</p>
                                    </div>
                                </div>
                                <p className="subtitle">Defeated Belt</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Future">
                    <div className="container">
                        <div className="flex">
                            <div data-aos="fade-right" className="wrapper">
                                <div className="content">
                                    <p>Just happend</p>
                                    <div className="img"></div>
                                    <p>Adesanya vs Costa</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div data-aos="fade-left" className="content">
                                    <p>Up next</p>
                                    <div className="img imgSecond"></div>
                                    <p>Nurmagomedov vs Geathje</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default MainPage;