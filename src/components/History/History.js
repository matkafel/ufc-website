import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import TimelineDate from './TimelineDate';

const History = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <div className="HistoryPage">
                <div className="main-page">
                    <div className="container">
                        <Navigation />
                        <div className="text">
                            <h1 data-aos="fade-up">the ufc's 10 hall of fame moments</h1>
                        </div>
                        <div className="icon-scroll"></div>
                    </div>
                </div>

                <div className="Timeline-page">
                    <div className="container">
                        <div className="timeline">
                            <ul>
                                {TimelineDate.map((data) => {
                                    return (
                                        <li key={data.title}>
                                            <div className="timeline-content">
                                                <h3 className="date">{data.date}</h3>
                                                <h1>{data.title}</h1>
                                                <p>{data.description}</p>
                                                <img src={data.img} data-aos={data.animation} alt={data.title} />
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default History;