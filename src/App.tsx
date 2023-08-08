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

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/illustration" element={<Illustration />} />
        <Route path="/portfolio/architecture" element={<Architecture />} />
        <Route path="/portfolio/ui-ux" element={<UI_UX />} />
        <Route path="/portfolio/code" element={<Code />} />
        <Route path="/portfolio/ui_ux/postit" element={<PostIt />} />

        {/* catch all */}

        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;
