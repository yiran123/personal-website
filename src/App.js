import { Routes, Route, useNavigate } from "react-router-dom";
import { Clinic } from "./components/InteriorDesign/projects/Clinic";
import { CurvedPath } from "./components/InteriorDesign/projects/CurvedPath";
import { Home } from "./components/Home/Home";
import { InteriorDesign } from "./components/InteriorDesign/InteriorDesign";
import { Architecture } from "./components/Architecture/Architecture";
import { Meta } from "./components/InteriorDesign/projects/Meta";
import { Next } from "./components/InteriorDesign/projects/Next";
import { Senior } from "./components/InteriorDesign/projects/Senior";
import { UXUI } from "./components/UXUI/UXUI";
import { Buku } from "./components/UXUI/projects/Buku";
import { SFACC } from "./components/UXUI/projects/SFACC";
import { MenuWizard } from "./components/UXUI/projects/MenuWizard";
import { MuseumOfEmotions } from "./components/Architecture/projects/MuseumofEmotions";
import { NewsStand } from "./components/Architecture/projects/NewsStand";
import { Model } from "./components/Model/Model";
import { Indep } from "./components/Model/projects/Indep";
import { MalibuLoft } from "./components/InteriorDesign/projects/MalibuLoft";
import { Birdcage } from "./components/InteriorDesign/projects/Birdcage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="interior-design" element={<InteriorDesign />}></Route>
        <Route path="interior-design/next-cosmetics" element={<Next />} />
        <Route path="interior-design/meta-plaza" element={<Meta />} />
        <Route path="interior-design/senior-housing" element={<Senior />} />
        <Route path="interior-design/fertility-clinic" element={<Clinic />} />
        <Route path="interior-design/curved-path" element={<CurvedPath />} />
        <Route path="interior-design/malibu-loft" element={<MalibuLoft />} />
        <Route
          path="interior-design/birdcage-restaurant"
          element={<Birdcage />}
        />
        <Route path="architecture" element={<Architecture />}></Route>
        <Route
          path="architecture/museum-of-emotions"
          element={<MuseumOfEmotions />}
        ></Route>
        <Route path="architecture/news-stand" element={<NewsStand />}></Route>
        <Route path="uxuiGraphic-design" element={<UXUI />}></Route>
        <Route path="uxuiGraphic-design/buku" element={<Buku />}></Route>
        <Route path="uxuiGraphic-design/SFACC" element={<SFACC />}></Route>
        <Route
          path="uxuiGraphic-design/menu-wizard"
          element={<MenuWizard />}
        ></Route>
        <Route path="modelling" element={<Model />}></Route>
        <Route path="modelling/indep-chair-cabinet" element={<Indep />}></Route>
      </Routes>
    </>
  );
}

export default App;
