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
                            <h2 className="mt-5">
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
                                    2018 - 2021
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="primary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <Typography  fontWeight="bold" variant="h5" component="span">
                                        Pilot Trainee <Typography variant="h5" color="primary">@Republic Of Singapore Air Force</Typography>
                                    </Typography>
                                    <Typography> - Represented Singapore as a pilot-in-training overseas in a fast-paced, high-stress environment alongside the Royal Australian Air Force for 7 months and attained 44 flying hours flying two aircraft, BAE Systems CT4/B and Pilatus PC-21.</Typography>
                                    <Typography> - Maintained smooth daily operations of squadron. Ensured all ops duties are carried out efficiently and accurately.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: "auto 0" }}
                                    align="right"
                                    variant="h6"
                                    color="text.dark"
                                    >
                                    2017 - 2018
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="primary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <Typography fontWeight="bold" variant="h5" component="span">
                                    Business Development & Community Management Executive  <Typography variant="h5" color="primary">@Bountie Technologies</Typography>
                                    </Typography>
                                    <Typography> - Identified and pitched to more than 10 sales leads for Bountie's cryptocurrency ICO, securing 50% of sales leads.</Typography>
                                    <Typography> - Created and oversee the growth of Bountie's 25,000 strong Telegram group and 3000 followers Instagram account.</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                    sx={{ m: "auto 0" }}
                                    align="right"
                                    variant="h6"
                                    color="text.dark"
                                    >
                                    2017 - 2018
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineConnector  />
                                    <TimelineDot color="primary">
                                        <CodeIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <Typography  fontWeight="bold" variant="h5" component="span">
                                    Market Research Consultant <Typography variant="h5" color="primary">@Jumbo Group of Restaurants</Typography>
                                    </Typography>
                                    <Typography> - Led overseas market research in VN, TH, and ID, interviewing 100+ locals to develop strategies for Jumbo's expansion.</Typography>
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