import languages from "../assets/img/languages.png";
import fl from "../assets/img/fl.png";
import databases from "../assets/img/databases.png";
import tools from "../assets/img/tools.png";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={languages} alt="Image" />
                                    <h5>Languages</h5>
                                </div>
                                <div className="item2">
                                    <img src={fl} alt="Image" />
                                    <h5>Frameworks & Libraries</h5>
                                </div>
                                <div className="item3">
                                    <img src={databases} alt="Image" />
                                    <h5>Databases</h5>
                                </div>
                                <div className="item">
                                    <img src={tools} alt="Image" />
                                    <h5>Tools</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}