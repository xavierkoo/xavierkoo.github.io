import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.webp";

export const Skills = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                My Technical Toolbox: Diverse Skills for Building Innovative Software Solutions.
              </p>
              <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '200px' }}>
                <Carousel.Item>
                  <h4>Languages</h4>
                  <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <i className='devicon-html5-plain colored'></i>
                    <i className='devicon-css3-plain colored'></i>
                    <i className='devicon-sass-original colored'></i>
                    <i className='devicon-javascript-plain colored'></i>
                    <i className='devicon-python-plain colored'></i>
                    <i className='devicon-java-plain colored'></i>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Frameworks & Libraries</h4>
                  <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <i className='devicon-bootstrap-plain colored'></i>
                    <i className='devicon-react-original colored'></i>
                    <i className='devicon-vuejs-plain colored'></i>
                    <i className='devicon-express-original'></i>
                    <i className='devicon-nodejs-plain colored'></i>
                    <i className='devicon-electron-original colored'></i>
                    <i className='devicon-spring-plain colored'></i>
                    <i className='devicon-jest-plain colored'></i>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Databases</h4>
                  <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <i className='devicon-mongodb-plain colored'></i>
                    <i className='devicon-mysql-plain colored'></i>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Tools</h4>
                  <div className='item' style={{ marginTop: '20px', height: '100px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <i className='devicon-docker-plain colored'></i>
                    <i className='devicon-git-plain colored'></i>
                    <i className='devicon-github-original'></i>
                    <i class="devicon-intellij-plain colored"></i>
                    <i className='devicon-eslint-original colored'></i>
                    <i className='devicon-heroku-original colored'></i>
                    <i className='devicon-jira-plain colored'></i>
                    <i className='devicon-figma-plain colored'></i>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};