import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/xavier-koo/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/xavierkoo" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/xavierkoo/portfolio-website/raw/main/public/Xavier-Koo-Resume.pdf" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="mt-2">Developed by Xavier Koo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}