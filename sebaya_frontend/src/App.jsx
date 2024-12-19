import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
};

export default App;
