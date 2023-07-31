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
import cypress from "../assets/img/cypress-icon.png";

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
                                            Feb 2023 - Present
                                        </Typography> <br />
                                        <Typography  fontWeight="bold" variant="h5" component="span">
                                            Software Engineer & Machine Learning Intern <Typography variant="h5" color="secondary">@Asterisk Technologies</Typography>
                                        </Typography>
                                        <Typography></Typography> {/* TODO: add description in list */}
                                        <div className="item-exp mt-1">
                                            <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
                                            <i class="devicon-sass-plain colored" title="Sass"></i>
                                            <i class="devicon-react-original colored" title="React.js"></i>
                                            <i class="devicon-express-original" title="Express.js"></i>
                                            <i class="devicon-nodejs-plain colored" title="Node.js"></i>
                                            {isMobile && <br />}
                                            <i class="devicon-electron-original colored" title="Electron.js"></i>
                                            <i class="devicon-jest-plain colored" title="Jest"></i>
                                            <img id='cypress' src={cypress} title='Cypress'/>
                                            <i class="devicon-eslint-plain colored" title="ESLint"></i>
                                            <i class="devicon-mongodb-plain colored" title="MongoDB"></i>
                                            <i class="devicon-opencv-plain colored" title="OpenCV"></i>
                                            <i class='devicon-python-plain colored' title='Python'></i>
                                        </div>
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
                                                    Authored a technical blog on software engineering, producing 33 articles covering topics such as data structures &
                                                    algorithms, technologies & frameworks, and essential skills which received 2600 views and 178 followers to date.        
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
