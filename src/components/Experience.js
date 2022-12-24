import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Typography from "@mui/material/Typography";

export const Experience = () => {
    
      return (
        <section className="experiences" id="experiences">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 className="mt-3">
                                Experience (WORK IN PROGRESS)
                            </h2>
                            <p2>Lorem Ipsum </p2>

                            <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="text.dark"
                                >
                                YEAR
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector  />
                                <TimelineDot color="primary">
                                    <CodeIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    JOB TITLE @ COMPANY NAME
                                </Typography>
                                <Typography>JOB DESCRIPTION</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {/* <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                variant="body2"
                                color="text.dark"
                                >
                                10:00 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                                </TimelineContent>
                            </TimelineItem> */}
                            </Timeline>

                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
      )
}