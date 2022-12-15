import { Header2 } from "../Header2/Header2";
import nextCosmetics from "../../assets/img/Next-Cosmetics.jpg";
import metaPlaza from "../../assets/img/Meta-plaza.jpg";
import seniorHouse from "../../assets/img/Senior-house.jpg";
import fertilityClinic from "../../assets/img/Fertility-clinic.jpg";
import cp from "../../assets/img/Curved-path.jpg";

import "./InteriorDesign.scss";

export const InteriorDesign = () => {
  return (
    <>
      <Header2 />
      <div className="container">
        <div className="project project1">
          <img src={nextCosmetics} alt="nextCosmetics"></img>
          <p className="title">NEXT COSMETICS</p>
          <p className="date">Spring 2022</p>
        </div>
        <div className="project">
          <img src={metaPlaza} alt="nextCosmetics"></img>
          <p className="title">META PLAZA</p>
          <p className="date">Fall 2022</p>
        </div>
        <div className="project">
          <img src={nextCosmetics} alt="nextCosmetics"></img>
          <p className="title">SENIOR HOUSING</p>
          <p className="date">Spring 2022</p>
        </div>
        <div className="project">
          <img src={fertilityClinic} alt="nextCosmetics"></img>
          <p className="title">TWILIGHT FERTILITY CLINIC</p>
          <p className="date">Fall 2022</p>
        </div>
        <div className="project">
          <img src={cp} alt="nextCosmetics"></img>
          <p className="title">CP RESTAURANT</p>
          <p className="date">Spring 2022</p>
        </div>
      </div>
    </>
  );
};
