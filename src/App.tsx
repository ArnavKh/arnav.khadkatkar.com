import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Timeline from "./pages/Timeline";
import Lab from "./pages/Lab";

function App() {
  return (
    <BrowserRouter>
      <LayoutGroup>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </LayoutGroup>
    </BrowserRouter>
  );
}

export default App;