import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CodeIcon from '@mui/icons-material/Code';
import Typography from "@mui/material/Typography";

export const Experience = () => {
    
      return (
        <section className="experiences" id="experiences">
            <Container>
                <Row>
                    <Col>
                        <div>
                        <h2 className="m-5" style={{ fontSize: '45px', fontWeight: '700', textAlign: 'center' }}>
                            Experiences
                        </h2>
                            <Timeline position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: "auto 0" }}
                                    align="right"
                                    variant="h6"
                                    color="text.dark"
                                    >
                                    Feb 2023 - Present
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="secondary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <Typography  fontWeight="bold" variant="h5" component="span">
                                    Software Engineer <Typography variant="h5" color="secondary">@Asterisk Technologies</Typography>
                                    </Typography>
                                    <ul>
                                        <li><Typography></Typography></li> {/* TODO: add description */}
                                    </ul>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: "auto 0" }}
                                    align="right"
                                    variant="h6"
                                    color="text.dark"
                                    >
                                    Jan 2023 - Present
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="secondary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <Typography  fontWeight="bold" variant="h5" component="span">
                                    Technical Writer <Typography variant="h5" color="secondary">@Medium Blog</Typography>
                                    </Typography>
                                    <ul>
                                        <li><Typography></Typography></li> {/* TODO: add description */}
                                    </ul>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: "auto 0" }}
                                    align="right"
                                    variant="h6"
                                    color="text.dark"
                                    >
                                    Dec 2018 - Jan 2021
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="secondary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
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
