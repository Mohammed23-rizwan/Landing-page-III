import Home from "./home1";
import Page from "./components/Page2/page";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user-info" element={<Page />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
