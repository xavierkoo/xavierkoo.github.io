import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import supportLocal from "../assets/img/supportLocal.png";
import monster from "../assets/img/monster-slayer.png";
import hangman from "../assets/img/hangman.png";
import portfolio from "../assets/img/portfolio.png";
import kaggle from "../assets/img/kaggle.png";
import ev from "../assets/img/ev.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const softwareProjects = [
        {
            title: "Support Local",
            description: "Full Stack eCommerce Web Application",
            imgUrl: supportLocal,
            projUrl: 'https://github.com/xavierkoo/support-local-backend'
        },
        {
            title: "Monster Slayer",
            description: "Browser Game",
            imgUrl: monster,
            projUrl: "https://github.com/xavierkoo/monster-slayer"
        },
        {
            title: "Hangman",
            description: "Browser Game",
            imgUrl: hangman,
            projUrl: "https://github.com/xavierkoo/hangman"
        },
        {
            title: "Portfolio Website",
            description: "Designing & developing a portfolio website",
            imgUrl: portfolio,
            projUrl: "https://github.com/xavierkoo/portfolio-website"
        },
    ];

    const mlProjects = [
        {
            title: "Facebook Humans or Robots",
            description: "Kaggle Competition",
            imgUrl: kaggle,
            projUrl: "https://github.com/xavierkoo/facebook-human-or-robots-kaggle"
        },
    ];

    const miscProjects = [
        {
            title: "EV Charging Model",
            description: "Spreadsheet Modelling & Analytics",
            imgUrl: ev,
            projUrl: "https://medium.com/@xavier2812/exploratory-model-for-ev-charging-infrastructure-in-singapore-f9a20e76ca3f"
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
                            <h2>Projects</h2>
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}