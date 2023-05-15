import { Header2 } from "../Header2/Header2";

import nextCosmetics from "../../assets/img/Next-Cosmetics.jpg";
import metaPlaza from "../../assets/img/Meta-plaza.jpg";
import seniorHouse from "../../assets/img/Senior-house.jpg";
import fertilityClinic from "../../assets/img/Fertility-clinic.jpg";
import cp from "../../assets/img/Curved-path.jpg";
import malibu from "../../assets/projects/interiorDesign/LA_Malibu_Loft_cover.png";
import birdcage from "../../assets/projects/interiorDesign/The_Birdcage_Restaurant.png";
import { Link } from "react-router-dom";

import "../Project.scss";
import { Col, Row } from "antd";

export const InteriorDesign = () => {
  return (
    <>
      <Header2 url="/interior-design" />
      <Row>
        <center>
          <Col span={17} className="container">
            <Link className="link" to="next-cosmetics">
              <div className="project project1">
                <img src={nextCosmetics} alt="next-cosmetics"></img>
                <p className="title">NEXT COSMETICS</p>
                <p className="date">Spring 2022</p>
              </div>
            </Link>
            <Link className="link" to="meta-plaza">
              <div className="project">
                <img src={metaPlaza} alt="meta-plaza"></img>
                <p className="title">META PLAZA</p>
                <p className="date">Fall 2022</p>
              </div>
            </Link>
            <Link className="link" to="senior-housing">
              <div className="project">
                <img src={seniorHouse} alt="senior-housing"></img>
                <p className="title">SENIOR HOUSING</p>
                <p className="date">Spring 2022</p>
              </div>
            </Link>
            <Link className="link" to="fertility-clinic">
              <div className="project">
                <img src={fertilityClinic} alt="fertility-clinic"></img>
                <p className="title">TWILIGHT FERTILITY CLINIC</p>
                <p className="date">Fall 2022</p>
              </div>
            </Link>
            <Link className="link" to="curved-path">
              <div className="project">
                <img src={cp} alt="curved-path"></img>
                <p className="title">CP RESTAURANT</p>
                <p className="date">Spring 2022</p>
              </div>
            </Link>
            <Link className="link" to="malibu-loft">
              <div className="project">
                <img src={malibu} alt="malibu-loft"></img>
                <p className="title">LA Malibu Loft</p>
                <p className="date">Fall 2020</p>
              </div>
            </Link>
            <Link className="link" to="birdcage-restaurant">
              <div className="project">
                <img src={birdcage} alt="birdcage-restaurant"></img>
                <p className="title">The Birdcage Restaurant</p>
                <p className="date">Fall 2020</p>
              </div>
            </Link>
          </Col>
        </center>
      </Row>
    </>
  );
};
