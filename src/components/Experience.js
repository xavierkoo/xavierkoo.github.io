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
                                            Aug 2023 - Present
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Software Engineer <Typography variant="h5" color="secondary">@Asterisk Technologies</Typography>
                                        </Typography>
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
                                                    Architected independently an enterprise-level facilities management system (FMS), enabling a major private hospital client to oversee
                                                    hundreds of facility bookings and streamline admin for 1200+ employees, reducing task time by 50% with 0% booking error rate.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    Engineered automated facility access by integrating tablets as interactive booking displays with Human Interface Devices, seamlessly
                                                    linked to the FMS and door relays verifying QR Codes/TOTP for user access, achieving a 95% reduction in manual access requests and 4%
                                                    increase in employee productivity by eliminating manual security interventions.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Devised the FMS leveraging a unified database architecture for brand switching, centralized management, and user experience. Design choice
                                                reduces 95% of development work previously required for each new brand iteration for every new client deployment.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                Spearheaded front-end development with React, Bootstrap, and SASS, building 12 reusable components and 13 dynamic web pages. Pioneered a
                                                one-click data export feature to CSV format, enhancing user data accessibility. Wrote comprehensive unit, integration, and end-to-end tests
                                                with Jest, react-testing-library, and Cypress.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    Constructed backend with Express + Node by building 49 RESTful APIs including email integration with the SendGrid API, and MongoDB for data
                                                    storage. Users are authenticated with JSON Web Tokens and QR Codes/TOTP was generated securely leveraging a Network Time Protocol for precise
                                                    time synchronization. Wrote unit and integration tests with Jest.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    Employed Electron.js to package the React based interactive booking display app for seamless tablet installation. Utilized PM2 for a resilient,
                                                    automatic local server with 99% uptime, ensuring continuous facility security and operations with no interruptions.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    Enforced code styling and quality via ESLint. Developed basic CI/CD pipeline for automated build, test and deployment. Authored a wiki for documentation
                                                    of entire system. Manage new updates and fixes on live system via GitHub releases.
                                                </Typography>
                                            </li>
                                            <li className="mb-2">
                                                <Typography>
                                                    <b>Computer Vision:</b> Created a license plate recognition & detection tool by deploying YOLOv4 within the Darknet framework before switching to YOLOv7.
                                                    Integrated PaddleOCR for Optical Character Recognition. Trained model with Region Based Convolutional Neural Networks, on sourced data annotated with LabelImg.
                                                    Model achieved a mean Average Precision of 90%+
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
                                                    algorithms, technologies & frameworks, and essential skills which received 4600 views and 195 (peak) followers to date.        
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
