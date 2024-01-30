import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CodeIcon from '@mui/icons-material/Code';
import Typography from "@mui/material/Typography";
import cypress from "../assets/img/cypress-icon.webp";

export const Experience = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
        return (
            <section className="experiences" id="experiences">
                <Container>
                    <Row>
                        <Col>
                            <div>
                            <h2 className="m-5" style={{ fontSize: '45px', fontWeight: '700', textAlign: 'center' }}>
                                Experiences
                            </h2>
                                <Timeline 
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                            flex: 0,
                                            padding: 0,
                                        },
                                    }}
                                >
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector  />
                                            <TimelineDot color="secondary">
                                                <CodeIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: "15px", px: 2 }}>
                                        <Typography variant="p" component="span">
                                            Jan 2024 - Apr 2024
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Teaching Assistant <Typography variant="h5" color="secondary">@Singapore Management University</Typography>
                                        </Typography>
                                        <div className="item-exp mt-1 mb-4">
                                            <i className='devicon-java-plain colored' title='Java'></i>
                                            <i className='devicon-docker-plain colored' title='Docker'></i>
                                            <i class="devicon-amazonwebservices-original colored" title='AWS'></i>
                                            <i class="devicon-flask-original" title='Flask'></i>
                                        </div>
                                        <ul>
                                            <li className="mb-2">
                                                <Typography>
                                                    CS301 - IT Solution Architecture (AY23/24 Sem 2, under Prof. Ouh Eng Lieh)
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    IS213 - Enterprise Solution Development (AY23/24 Sem 2, under Prof. Jiang Lingxiao)
                                                </Typography>
                                            </li>
                                        </ul>
                                        </TimelineContent>
                                    </TimelineItem>
                                     <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector  />
                                            <TimelineDot color="secondary">
                                                <CodeIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: "15px", px: 2 }}>
                                        <Typography variant="p" component="span">
                                            Aug 2023 - Jan 2024
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Software Engineer <Typography variant="h5" color="secondary">@Asterisk Technologies</Typography>
                                        </Typography>
                                        <div className="item-exp mt-1 mb-4">
                                            <i class="devicon-flutter-plain colored" title="Flutter"></i>
                                            <i class="devicon-dart-plain colored" title="Dart"></i>
                                            <i class="devicon-react-original colored" title="React.js"></i>
                                            <i class="devicon-express-original" title="Express.js"></i>
                                            <i class="devicon-nodejs-plain colored" title="Node.js"></i>
                                            <i class="devicon-sqlite-plain colored" title="SQLite"></i>
                                        </div>
                                        <ul>
                                            <li className="mb-2">
                                                <Typography>
                                                  Deployed an internal remote device monitoring tool using React and Express + Node, decreasing error notification time by 100%.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Spearheaded the software rewrite of a visitor management system for a major client using Flutter, Riverpod and SQLite.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Developed further enhancements and internal tools for the hospital's facilities management system.
                                                </Typography>
                                            </li>
                                        </ul>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector  />
                                            <TimelineDot color="secondary">
                                                <CodeIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: "15px", px: 2 }}>
                                        <Typography variant="p" component="span">
                                            Feb 2023 - Aug 2023
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Software Engineer & Machine Learning Intern <Typography variant="h5" color="secondary">@Asterisk Technologies</Typography>
                                        </Typography>
                                        <div className="item-exp mt-1">
                                            <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
                                            <i class="devicon-sass-plain colored" title="Sass"></i>
                                            <i class="devicon-react-original colored" title="React.js"></i>
                                            <i class="devicon-express-original" title="Express.js"></i>
                                            <i class="devicon-nodejs-plain colored" title="Node.js"></i>
                                            <i class="devicon-electron-original colored" title="Electron.js"></i>
                                            {isMobile && <br />}
                                            <i class="devicon-jest-plain colored" title="Jest"></i>
                                            <img id='cypress' src={cypress} title='Cypress'/>
                                            <i class="devicon-eslint-plain colored" title="ESLint"></i>
                                            <i class="devicon-mongodb-plain colored" title="MongoDB"></i>
                                            <i class="devicon-opencv-plain colored" title="OpenCV"></i>
                                            <i class='devicon-python-plain colored' title='Python'></i>
                                        </div>
                                        <ul>
                                            <li className="mb-2">
                                                <Typography>
                                                Architected independently an organization wide facilities management system (FMS), enabling a major private hospital client to oversee thousands 
                                                of bookings, and streamlining admin for 1200+ employees with 0% booking error rate.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Engineered automated facility access by integrating tablets as interactive facility displays, seamlessly linked to the FMS and facility door relays, 
                                                allowing automated user access via QR Code/TOTP, achieving a 100% reduction in manual facility access requests by users.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Spearheaded front-end development with React, Bootstrap, and SASS, building 12 reusable components and 13 dynamic and mobile-responsive web pages.
                                                Pioneered a one-click CSV data export feature, enhancing user data accessibility.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Constructed backend with Express and Node.js, creating 50 RESTful APIs including email integration with SendGrid API. Implemented MongoDB with a 
                                                unified database architecture for brand switching, reducing development time for client deployments. User authentication and secure facility access 
                                                accomplished with JWTs and QR/TOTP, generated securely with Network Time Protocol.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Enforced code styling and quality via ESLint. Wrote comprehensive unit, integration, and end-to-end tests with Jest, react-testing- library, 
                                                and Cypress. Devised basic CI/CD pipeline for automated build, test, and deployment. Authored wiki for documentation of system and managed new 
                                                updates and bug fixes on live system via GitHub releases.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Employed Electron.js to package React based interactive facility display app for seamless installation on tablets. Utilized PM2 for a resilient, 
                                                automatic local server with 99% uptime, ensuring continuous facility operations and security with no disruptions.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Developed a license plate detection and character recognition tool using YOLOv4 and Darknet, subsequently transitioning to YOLOv7. Integrated 
                                                PaddleOCR for robust Optical Character Recognition. Trained the model using Region Based Convolutional Neural Networks on annotated data labelled 
                                                with LabelImg. Achieved a mean Average Precision of 90%+.
                                                </Typography>
                                            </li>
                                        </ul>  
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector  />
                                            <TimelineDot color="secondary">
                                                <CodeIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>                                
                                        <TimelineContent sx={{ py: "15px", px: 2 }}>
                                        <Typography variant="p" component="span">
                                            Jan 2023 - Present
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Technical Writer <Typography variant="h5" color="secondary">@Medium Blog</Typography>
                                        </Typography>
                                        <ul>
                                            <li>
                                                <Typography>
                                                    Authored a technical blog on software engineering, producing 44 articles covering topics such as data structures &
                                                    algorithms, technologies & frameworks, and essential skills which received more than 5500 views and 197 (peak) followers to date.        
                                                </Typography>
                                            </li>
                                        </ul>                                          
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector  />
                                            <TimelineDot color="secondary">
                                                <CodeIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: "15px", px: 2 }}>
                                        <Typography variant="p" component="span">
                                            Dec 2018 - Jan 2021
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Pilot Trainee <Typography variant="h5" color="secondary">@Republic Of Singapore Air Force</Typography>
                                        </Typography>
                                        <ul>
                                            <li><Typography> Represented Singapore as a pilot-in-training overseas in a fast-paced, high-stress environment alongside the Royal Australian Air Force for 7 months and attained 44 flying hours flying two aircraft, BAE Systems CT4/B and Pilatus PC-21.</Typography></li>
                                            <li><Typography> Maintained smooth daily operations of squadron. Ensured all ops duties are carried out efficiently and accurately.</Typography></li>
                                        </ul>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
