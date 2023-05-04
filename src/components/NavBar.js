import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.png';
import navIcon4 from '../assets/img/nav-icon4.png';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
                    <Nav.Link href="https://medium.com/@xavier2812" target="_blank" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Blog</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/xavier-koo/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/xavierkoo" target="_blank"><img src={navIcon2} alt="" /></a>
                        <a href="mailto:xavier.koo.2021@scis.smu.edu.sg" target="_blank"><img src={navIcon4} alt="" /></a>
                        <a href="https://github.com/xavierkoo/portfolio-website/raw/main/public/Xavier-Koo-Resume.pdf" target="_blank"><img src={navIcon3} alt="" /></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}