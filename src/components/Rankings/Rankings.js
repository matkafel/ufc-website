import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import RankingsData from './RankingsData';


const Rankings = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <div className="RankingsPage">
            <div className="first-page">
                <div className="container">
                    <Navigation />
                    <div className="text">
                        <h1 data-aos="fade-up">UFC</h1>
                        <p>Rankings</p>
                    </div>
                    <div className="icon-scroll"></div>
                </div>
            </div>
            {RankingsData.map((data) => {
                return (
                    <div data-aos="zoom-in" key={data.Record} className="ranking-page" style={{ backgroundImage: `url(${data.Flag})` }} >
                        <div className="container" >
                            <div className="flex">
                                <div className="ranking">
                                    <ol>
                                        <li>{data.Nr1}</li>
                                        <li>{data.Nr2}</li>
                                        <li>{data.Nr3}</li>
                                        <li>{data.Nr4}</li>
                                        <li>{data.Nr5}</li>
                                        <li>{data.Nr6}</li>
                                        <li>{data.Nr7}</li>
                                        <li>{data.Nr8}</li>
                                        <li>{data.Nr9}</li>
                                        <li>{data.Nr10}</li>
                                        <li>{data.Nr11}</li>
                                        <li>{data.Nr12}</li>
                                        <li>{data.Nr13}</li>
                                        <li>{data.Nr14}</li>
                                        <li>{data.Nr15}</li>
                                    </ol>
                                </div>
                                <div className="text">
                                    <h1 data-aos="fade-up">UFC</h1>
                                    <p>{data.Division}</p>
                                </div>
                                <div className="image">
                                    <img src={data.Img} alt={data.Nr1} />
                                    <p className="record">{data.Record}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default Rankings;