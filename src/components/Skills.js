import '../../src/App.css';
import colorSharp from "../assets/img/color-sharp.webp";
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
                            <p>As an aspiring software engineer, I possess expertise in a wide range of technical skills.<br></br>I am passionate about my work and always eager to learn more.</p>
                            <div className="item">
                                <i class="devicon-html5-plain-wordmark colored"></i>
                                <i class="devicon-css3-plain-wordmark colored"></i>
                                <i class="devicon-sass-original colored"></i>
                                <i class="devicon-javascript-plain colored"></i>                      
                                <i class="devicon-python-plain-wordmark colored"></i>
                                <i class="devicon-java-plain-wordmark colored"></i>
                            </div>
                            <h5>Languages</h5>
                            <div className="item">
                                <i class="devicon-bootstrap-plain-wordmark colored"></i>
                                <i class="devicon-react-original-wordmark colored"></i>
                                <i class="devicon-vuejs-plain-wordmark colored"></i>
                                <i class="devicon-express-original-wordmark"></i>
                                <i class="devicon-nodejs-plain-wordmark colored"></i>
                                <i class="devicon-spring-plain-wordmark colored"></i>
                                <i class="devicon-jest-plain colored"></i>
                            </div>
                            <h5>Frameworks & Libraries</h5>
                            <div className="item">
                                <i class="devicon-mongodb-plain-wordmark colored"></i>
                                <i class="devicon-mysql-plain-wordmark colored"></i>
          
                            </div>
                            <h5>Databases</h5>
                            <div className="item">
                                <i class="devicon-docker-plain-wordmark colored"></i>
                                <i class="devicon-git-plain-wordmark colored"></i>  
                                <i class="devicon-github-original-wordmark"></i>
                                <i class="devicon-eslint-original-wordmark colored"></i>
                                <i class="devicon-heroku-original-wordmark colored"></i>
                                <i class="devicon-jira-plain-wordmark colored"></i>
                                <i class="devicon-figma-plain colored"></i>
                                
                            </div>
                            <h5>Tools</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
