import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Report from "./Report";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
