
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "../pages/Home";
import Donate from "./components/Donate";
import Exchange from "./components/Exchange";
//import Navbar from "./components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/donate" element={<Donate />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
