import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Missing from "./components/Missing";
import Illustration from "./pages/portfolio/Illustration/Illustration";
import Architecture from "./pages/portfolio/Architecture/Architecture";
import UI_UX from "./pages/portfolio/UI_UX/UI_UX";
import "./App.css";
import PostIt from "./pages/portfolio/UI_UX/PostIt";
import Code from "./pages/portfolio/Code/Code";

// import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

// let element: IParallax | null;

// interface scrollSectionProps {
//   scrollSection: () => void;
// }

// const scrollID = (position: number) => {
//   // console.log("scroll to working the position is " + position);
//   element?.scrollTo(3);
//   console.log(position);
//   // thisthing = position;
//   // console.log(thisthing);
//   return position;
// };
// const handleScrollID = () => {};

const App: React.FC = () => {
  return (
    <div>
      <Navbar
      // scrollID={(position) => {
      //   scrollID(position);
      // }}
      />

      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/illustration" element={<Illustration />} />
        <Route path="/portfolio/architecture" element={<Architecture />} />
        <Route path="/portfolio/ui_ux" element={<UI_UX />} />
        <Route path="/portfolio/code" element={<Code />} />
        <Route path="/portfolio/ui_ux/postit" element={<PostIt />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;

// {/* <header>
// <Navbar />
// </header>
// <Routes>
// {/* public routes */}
// <Route path="/" element={<Home />} />

// {/* catch all */}
// <Route path="*" element={<Missing />} />
// </Routes> */}
