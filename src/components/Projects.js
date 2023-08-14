import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import supportLocal from "../assets/img/supportLocal.webp";
import monster from "../assets/img/monster-slayer.png";
import hangman from "../assets/img/hangman.png";
import portfolio from "../assets/img/portfolio.png";
import kaggle from "../assets/img/kaggle.png";
import ev from "../assets/img/ev.png";
import irecycle from "../assets/img/irecycle.png";
import oracle from "../assets/img/oracle.png";
import heicoders from "../assets/img/heicoders.png";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import greenventure from "../assets/img/greenventure.png";
import leapaheadx from "../assets/img/leapaheadx.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const softwareProjects = [
        {
            title: "LeapAheadX",
            description: "LeapAheadX is a form management system to digitalize the form management processes of the client company Quantum Leap. Developed with Object-Oriented Programming (OOP) principles, Vue.js/Vite, Bootstrap, Sass, Spring Boot MVC, and MySQL.",
            imgUrl: leapaheadx,
            projUrl: 'https://github.com/xavierkoo/leapaheadx',
        },
        {
            title: "GreenVenture",
            description: "GreenVenture is a mobile application that incentivizes users to recycle by providing rewards. Microservices-based architecture that utilizes OAuth2 with Facebook SSO Login for authentication, Vue.js and React.js, Flask and Node.js + Express.js, MySQL and MongoDB, and employs Docker, LavinMQ, and nodemailer.",
            imgUrl: greenventure,
            projUrl: 'https://github.com/xavierkoo/greenventure-main',
        },
        {
            title: "Support Local",
            description: "Full-stack web application to serve as an eCommerce platform for local businesses, employing HTML, CSS, Bootstrap, Vue.js, Node.js, Express.js, MongoDB.",
            imgUrl: supportLocal,
            projUrl: 'https://github.com/xavierkoo/support-local-backend',
            depUrl: 'https://support-local-frontend.onrender.com',
        },
        {
            title: "Monster Slayer",
            description: "Browser Game created with HTML, CSS, Bootstrap & Vue.js.",
            imgUrl: monster,
            projUrl: "https://github.com/xavierkoo/monster-slayer",
            depUrl: 'https://monster-slayer-vue-game.netlify.app/'
        },
        {
            title: "Hangman",
            description: "Browser Game created with HTML, CSS, JavaScript.",
            imgUrl: hangman,
            projUrl: "https://github.com/xavierkoo/hangman",
            depUrl: 'https://hangman-game-689910.netlify.app/'
        },
        {
            title: "Portfolio Website",
            description: "Designing & developing a portfolio website with HTML, CSS, Bootstrap & React.js. Google Analytics is implemented with react-ga4",
            imgUrl: portfolio,
            projUrl: "https://github.com/xavierkoo/xavierkoo.github.io",
            depUrl: 'https://xavierkoo.github.io/'
        },
    ];

    const mlProjects = [
        {
            title: "Facebook Humans or Robots",
            description: "Kaggle Competition to determine if auction bids are made by humans or robots.",
            imgUrl: kaggle,
            projUrl: "https://github.com/xavierkoo/facebook-human-or-robots-kaggle",
            depUrl: 'https://www.kaggle.com/competitions/ai200-dec-2021-human-or-bot/overview'
        },
    ];

    const miscProjects = [
        {
            title: "Oracle Certified Foundations Associate, Java",
            description: "Oracle Java Certification.",
            imgUrl: oracle,
            depUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7021571107EBACF10CEBF555B3AA492FCB2EEC46A68DADBD70477A29390A6EB4",
        },
        {
            title: "AI200: Applied Machine Learning",
            description: "Machine Learning course by Heicoders Academy.",
            imgUrl: heicoders,
            depUrl: "https://cert.heicodersacademy.com/KoGXmhqZKWhwICc8",
        },
        {
            title: "EV Charging Model",
            description: "Spreadsheet Modelling & Analytics that explores EV charging in Singapore.",
            imgUrl: ev,
            projUrl: "https://github.com/xavierkoo/evchargingmodel",
            depUrl: 'https://medium.com/@xavier2812/exploratory-model-for-ev-charging-infrastructure-in-singapore-f9a20e76ca3f'
        },
        {
            title: "iRecycle",
            description: "UI/UX project of an app that motivate users to recycle.",
            imgUrl: irecycle,
            depUrl: "https://aaronkwah.dev/irecycle",
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""} >
                            <h2>Projects & Certifications</h2>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 mt-3 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Software</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ML/AI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Misc.</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            softwareProjects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            mlProjects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            miscProjects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background-img2"></img>
        </section>
    )
}
