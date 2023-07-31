import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.webp";
import cypress from "../assets/img/cypress-icon.png";

export const Skills = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='skill-container'>
      <section className='skill' id='skills'>
        <Container>
          <Row>
            <Col>
              <div className='skill-bx'>
                <h2>Skills</h2>
                <p>
                  My Technical Toolbox: Diverse Skills for Building Innovative Software Solutions.
                </p>
                <div className='desktop-container'>
                  <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '200px' }}>
                    <Carousel.Item>
                      <h4>Languages</h4>
                      <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        <i className='devicon-html5-plain colored' title='HTML5'></i>
                        <i className='devicon-css3-plain colored' title='CSS3'></i>
                        <i className='devicon-sass-original colored' title='Sass'></i>
                        <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                        <i className='devicon-python-plain colored' title='Python'></i>
                        <i className='devicon-java-plain colored' title='Java'></i>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h4>Frameworks & Libraries</h4>
                      <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        <i className='devicon-bootstrap-plain colored' title='Bootstrap'></i>
                        <i className='devicon-react-original colored' title='React.js'></i>
                        <i className='devicon-vuejs-plain colored' title='Vue.js'></i>
                        <i className='devicon-express-original' title='Express.js'></i>
                        <i className='devicon-nodejs-plain colored' title='Node.js'></i>
                        <i className='devicon-electron-original colored' title='Electron.js'></i>
                        <i className='devicon-spring-plain colored' title='Spring/Spring Boot'></i>
                        <i className='devicon-jest-plain colored' title='Jest'></i>
                        <i class="devicon-opencv-plain colored" title='OpenCV'></i>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h4>Databases</h4>
                      <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        <i className='devicon-mongodb-plain colored' title='MongoDB'></i>
                        <i className='devicon-mysql-plain colored' title='MySQL'></i>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h4>Tools</h4>
                      <div className='item' style={{ marginTop: '20px', height: '120px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        <i className='devicon-docker-plain colored' title='Docker'></i>
                        <i className='devicon-git-plain colored' title='Git'></i>
                        <i className='devicon-github-original' title='GitHub'></i>
                        <img src={cypress} style={{marginBottom: '45px', marginLeft: '10px', height: '65px', width: '65px'}} title='Cypress'/>
                        <i class="devicon-intellij-plain colored" title='IntelliJ IDEA'></i>
                        <i className='devicon-eslint-original colored' title="ESLint"></i>
                        <i class="devicon-npm-original-wordmark colored" title='npm'></i>
                        <i className='devicon-heroku-original colored' title='Heroku'></i>
                        <i className='devicon-jira-plain colored' title='Jira'></i>
                        <i className='devicon-figma-plain colored' title='Figma'></i>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className='mobile-container'>
                  <h5>Languages</h5>
                  <div className='mobile-skill'>
                    <i className='devicon-html5-plain colored' title='HTML5'></i>
                    <i className='devicon-css3-plain colored' title='CSS3'></i>
                    <i className='devicon-sass-original colored' title='Sass'></i>
                    <i className='devicon-javascript-plain colored' title='JavaScript'></i>
                    <i className='devicon-python-plain colored' title='Python'></i>
                    <i className='devicon-java-plain colored' title='Java'></i>
                  </div>
                  <h5 className='mt-4'>Frameworks & Libraries</h5>
                  <div className='mobile-skill'>
                    <i className='devicon-bootstrap-plain colored' title='Bootstrap'></i>
                    <i className='devicon-react-original colored' title='React.js'></i>
                    <i className='devicon-vuejs-plain colored' title='Vue.js'></i>
                    <i className='devicon-express-original' title='Express.js'></i>
                    <i className='devicon-nodejs-plain colored' title='Node.js'></i> <br />
                    <i className='devicon-electron-original colored' title='Electron.js'></i>
                    <i className='devicon-spring-plain colored' title='Spring/Spring Boot'></i>
                    <i className='devicon-jest-plain colored' title='Jest'></i>
                    <i class="devicon-opencv-plain colored" title='OpenCV'></i>
                  </div>
                  <h5 className='mt-4'>Databases</h5>
                  <div className='mobile-skill'>
                    <i className='devicon-mongodb-plain colored' title='MongoDB'></i>
                    <i className='devicon-mysql-plain colored' title='MySQL'></i>
                  </div>
                  <h5 className='mt-4'>Tools</h5>
                  <div className='mobile-skill'>
                    <i className='devicon-docker-plain colored' title='Docker'></i>
                    <i className='devicon-git-plain colored' title='Git'></i>
                    <i className='devicon-github-original' title='GitHub'></i>
                    <img src={cypress} style={{marginBottom: '18px', marginLeft: '10px', height: '30px', width: '30px'}} title='Cypress'/>
                    <i class="devicon-npm-original-wordmark colored" title='npm'></i> <br />
                    <i class="devicon-intellij-plain colored" title='IntelliJ IDEA'></i>
                    <i className='devicon-eslint-original colored' title="ESLint"></i>
                    <i className='devicon-heroku-original colored' title='Heroku'></i>
                    <i className='devicon-jira-plain colored' title='Jira'></i>
                    <i className='devicon-figma-plain colored' title='Figma'></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt='Image' />
      </section>
    </div>
  );
};