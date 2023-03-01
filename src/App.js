import { Routes, Route, useNavigate } from "react-router-dom";
import { Clinic } from "./components/InteriorDesign/projects/Clinic";
import { CurvedPath } from "./components/InteriorDesign/projects/CurvedPath";
import { Home } from "./components/Home/Home";
import { InteriorDesign } from "./components/InteriorDesign/InteriorDesign";
import { Architecture } from "./components/Architecture/Architecture";
import { Meta } from "./components/InteriorDesign/projects/Meta";
import { Next } from "./components/InteriorDesign/projects/Next";
import { Senior } from "./components/InteriorDesign/projects/Senior";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="interiorDesign" element={<InteriorDesign />}></Route>
        <Route path="interiorDesign/NextCosmetics" element={<Next />} />
        <Route path="interiorDesign/MetaPlaza" element={<Meta />} />
        <Route path="interiorDesign/SeniorHousing" element={<Senior />} />
        <Route path="interiorDesign/FertilityClinic" element={<Clinic />} />
        <Route path="interiorDesign/CurvedPath" element={<CurvedPath />} />
        <Route path="architecture" element={<Architecture />}></Route>
      </Routes>
    </>
  );
}

export default App;
