import React, {Component} from "react";

import './index.css';

class About extends Component {
    render(){
    return (
        <>
        <div className="about">
            <div className="about-heading">
                <h1 className="about-heading1">About Me</h1>
                <h2 className="about-heading2"><i className="about-dash bi bi-dash-lg"></i>who i am<i className="about-dash bi bi-dash-lg"></i></h2>
            </div>
            <div className="about-cards1">
                <div className="about-card3">
                    <h1 className="about-card3-heading">I'm <span className="about-card3-heading-span1">RAVIKRUSHNA</span>  and I'm a <span className="about-card3-heading-span1">Web</span> <span className="about-card3-heading-span2">Developer</span></h1>
                    <div className="about-card3-items">
                        <p className="about-card3-para"><span className="about-card3-para-span1">Able</span>. I am able to handle multiple tasks on a daily basis.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span2">Creative</span>. I use a creative approach to problem solve.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span1">Dependable</span>. I am a dependable person who is great at time management.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span2">Energitic</span>. I am always energetic and eager to learn new skills.</p>
                    </div>
                </div>
                <div className="about-card4">
                    <div className="about-person-details">
                        <i className="person-icon bi bi-person"></i>
                        <div className="about-person">
                            <p className="about-person-contact">Contact :<br />9000071401</p>
                        </div>
                    </div>
                    <div className="about-address-details">
                        <i className="address-icon bi bi-geo-alt"></i>
                        <div className="about-address">
                            <p className="about-address-route">Address:<br />Kurnool, A.P.</p>
                        </div>
                    </div>
                    <div className="about-email-details">
                        <i className="email-icon bi bi-envelope"></i>
                        <div className="about-email">
                            <p className="about-email-address">E-mail :<br />ravikrushna963@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-cards">
                <div className="about-card-wrap">
                    <label className="about-card1-label" htmlFor="about-card1"><span className="about-card2-label-span">Q</span>ual<span className="about-card2-label-span">i</span>f<span className="about-card2-label-span">i</span>cat<span className="about-card2-label-span">i</span>on:</label>
                    <div className="about-card1" id="about-card1">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                            <th className="about-table-contents-heading" scope="col">Institute</th>
                            <th className="about-table-contents-heading" scope="col">Degree</th>
                            <th className="about-table-contents-heading" scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="about-table-contents" scope="row">SV Art's College, Tirupati</th>
                            <td className="about-table-contents">BSc - Mathematics</td>
                            <td className="about-table-contents">7.6 CGPA</td>
                            </tr>
                            <tr>
                            <th className="about-table-contents" scope="row">St.Mary's Jr College, Kurnool</th>
                            <td className="about-table-contents">MPC</td>
                            <td className="about-table-contents">8.7 CGPA</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="about-card-wrap">
                    <label className="about-card2-label" htmlFor="about-card2">M<span className="about-card2-label-span">y</span> Ski<span className="about-card2-label-span">ll</span>s:</label>
                    <div className="about-card2" id="about-card2">
                        <img className="about-logos" src="data:image/png;base64,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" alt="html" />
                        <img className="about-logos" src="https://img.icons8.com/officel/344/react.png" alt="react" />
                        <img className="about-logos" src="https://img.icons8.com/ios-filled/344/html-5--v1.png" alt="html" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/css.png" alt="css" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/bootstrap.png" alt="bootstrap" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/python--v1.png" alt="python" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/javascript--v1.png" alt="javascript" />
                        {/* <img className="about-logos" src="https://img.icons8.com/fluency/344/node-js.png" alt="node" /> */}
                        <img className="about-logos" src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Sql-icon.png" alt="html" />

                        <img className="about-logos" src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="express" />
                        <img className="about-logos" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="mongodb" />
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
    }
}

export default About;
