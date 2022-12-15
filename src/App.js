import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { InteriorDesign } from "./components/InteriorDesign/InteriorDesign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="interiorDesign" element={<InteriorDesign />}></Route>
      </Routes>
    </>
  );
}

export default App;
