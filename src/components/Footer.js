import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/colour.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <div className="footer_align">
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p >Copyright 2023.Created by jagan</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
    </div>
  )
}
