import React from 'react';
import Navigation from '../Navigation/Navigation';
import HallOfFameData from '../HallOfFame/HallOfFameData';


const HallOfFame = () => {
    return (
        <div className="outer-wrapper">
            <div className="wrapper">
                <div className="slide first">
                    <div className="container">
                        <Navigation />
                        <div className="text">
                            <h1 >UFC</h1>
                            <p>Hall Of Fame</p>
                        </div>
                    </div>
                </div>

                {HallOfFameData.map(data => {
                    return (
                        <div className="slide two" style={{ backgroundImage: `url(${data.Img})` }} key={data.Name} >
                            <div className="container">
                                <Navigation />
                                <div className="info-wrapper">
                                    <p className="kind">{data.Award}</p>
                                    <p className="hall">Hall of</p>
                                    <p className="fame">Fame</p>
                                    <p className="name">{data.Name}</p>
                                    <p className="achievements">{data.Achievements}</p>
                                </div>

                                <div className="firstLastName">
                                    <p>{data.FirstName}</p>
                                    <p>{data.LastName}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HallOfFame;
