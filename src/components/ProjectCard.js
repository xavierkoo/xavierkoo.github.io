import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import windowIcon from "../assets/img/window.png";

export const ProjectCard = ({ title, description, imgUrl, projUrl, depUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span style={{padding: '10px', fontSize: '12px'}}>{description}</span> <br/>
          <span className="social-icon mt-2"> 
            {projUrl && (
              <a href={projUrl} target="_blank">
                <img src={navIcon2} alt="" />
              </a>
            )}
            {depUrl && (
              <a href={depUrl} target="_blank">
                <img src={windowIcon} alt="" />
              </a>
            )}
          </span>
        </div>
      </div>
    </Col>
  )
}