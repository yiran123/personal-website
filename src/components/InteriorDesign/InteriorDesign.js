import { Header2 } from "../Header2/Header2";

import nextCosmetics from "../../assets/img/Next-Cosmetics.jpg";
import metaPlaza from "../../assets/img/Meta-plaza.jpg";
import seniorHouse from "../../assets/img/Senior-house.jpg";
import fertilityClinic from "../../assets/img/Fertility-clinic.jpg";
import cp from "../../assets/img/Curved-path.jpg";
import { Link } from "react-router-dom";

import "./InteriorDesign.scss";

export const InteriorDesign = () => {
  return (
    <>
      <Header2 />
      <div className="container">
        <Link style={{ textDecoration: "none" }} to="NextCosmetics">
          <div className="project project1">
            <img src={nextCosmetics} alt="NextCosmetics"></img>
            <p className="title">NEXT COSMETICS</p>
            <p className="date">Spring 2022</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="MetaPlaza">
          <div className="project">
            <img src={metaPlaza} alt="MetaPlaza"></img>
            <p className="title">META PLAZA</p>
            <p className="date">Fall 2022</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="SeniorHousing">
          <div className="project">
            <img src={seniorHouse} alt="nextCosmetics"></img>
            <p className="title">SENIOR HOUSING</p>
            <p className="date">Spring 2022</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="FertilityClinic">
          <div className="project">
            <img src={fertilityClinic} alt="nextCosmetics"></img>
            <p className="title">TWILIGHT FERTILITY CLINIC</p>
            <p className="date">Fall 2022</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="CurvedPath">
          <div className="project">
            <img src={cp} alt="nextCosmetics"></img>
            <p className="title">CP RESTAURANT</p>
            <p className="date">Spring 2022</p>
          </div>
        </Link>
      </div>
    </>
  );
};
