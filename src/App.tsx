import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </BrowserRouter>
  );
}

export default App;