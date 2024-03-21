import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import supportLocal from "../assets/img/supportLocal.webp";
import monster from "../assets/img/monster-slayer.png";
import hangman from "../assets/img/hangman.png";
import portfolio from "../assets/img/portfolio.png";
import kaggle from "../assets/img/kaggle.png";
import license from "../assets/img/license.png";
import ev from "../assets/img/ev.png";
import irecycle from "../assets/img/irecycle.png";
import oracle from "../assets/img/oracle.png";
import heicoders from "../assets/img/heicoders.png";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import greenventure from "../assets/img/greenventure.png";
import leapaheadx from "../assets/img/leapaheadx.png";
import psa from "../assets/img/psa.png";
import aws from "../assets/img/aws.png";
import auth from "../assets/img/auth.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const softwareProjects = [
        {
            title: "[Champion 🏆] PSA Code Sprint 2023",
            description: "Led winning team ByTheSea in developing a next-gen HR platform that enhances PSA’s HR strategy in 3 key areas: Talent, Experience & Engagement. Utilized LangChain, ChromaDB, Streamlit, FastAPI, Vue.js, and OpenAI API; competed against 100+ teams.",
            imgUrl: psa,
            projUrl: 'https://github.com/xavierkoo/psa-codesprint-2023',
            depUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7122807331519696900?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxXggErcFRK2%2F%2BZRXFfuxcg%3D%3D',
        },
        {
            title: "Authentication System - Ascenda Loyalty",
            description: "Engineered a highly scalable and secure authentication system for the client company with AWS (Cognito, S3, Lambda, CloudFront,Route 53, WAF, API Gateway), and React TypeScript.",
            imgUrl: auth,
            projUrl: 'https://github.com/xavierkoo/authentication-system',
        },
        {
            title: "Form Management System - Quantum Leap Inc.",
            description: "Developed an FMS for the client company to digitalize form management processes with Vue.js/Vite, Bootstrap, SASS, Java Spring Boot, Docker & MySQL, adhering to OOP principles and employing UML, ERD & Use Case Diagrams.",
            imgUrl: leapaheadx,
            projUrl: 'https://github.com/xavierkoo/leapaheadx',
        },
        {
            title: "GreenVenture",
            description: "▪	Constructed a web app incentivizing and rewarding users to recycle, utilizing a scalable microservices-based architecture with React, Express.js, Node.js, MongoDB, and Docker and integrated a messaging system using AMQP based LavinMQ message broker with nodemailer for user emails.",
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
            title: "License Plate Detection and Recognition",
            description: "License Plate Detection and Recognition Tool built upon YOLOv4/YOLOv7 for license plate detection and PaddleOCR for license plate character recognition.",
            imgUrl: license,
            depUrl: 'https://github.com/xavierkoo/computer_vision_anpr_alpr'
        },
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
            title: "AWS Certified Solutions Architect – Associate",
            description: "AWS Certification by Amazon Web Services.",
            imgUrl: aws,
            depUrl: "https://www.credly.com/badges/3fd2c590-3850-478c-912b-b804eb82eff2/linked_in_profile",
        },
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
                                    <Nav.Link eventKey="first">Software Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ML/AI Projects</Nav.Link>
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
