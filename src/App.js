import { Routes, Route, useNavigate } from "react-router-dom";
import { Clinic } from "./components/Clinic";
import { CurvedPath } from "./components/CurvedPath";
import { Home } from "./components/Home/Home";
import { InteriorDesign } from "./components/InteriorDesign/InteriorDesign";
import { Meta } from "./components/Meta";
import { Next } from "./components/Next";
import { Senior } from "./components/Senior";

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
      </Routes>
    </>
  );
}

export default App;
