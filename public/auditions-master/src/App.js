// import { useEffect, useState } from "react";
// import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import RegNo from "./components/RegNo";
import Success from "./components/Success";
// import Loader from "./components/loader/loader";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reg" element={<Form />} />
        <Route path="/success" element={<Success />} />
        <Route path="/regno" element={<RegNo />} />
        {/* <Route exact path="/register">
					<Landing />
				</Route> */}
      </Routes>
    </BrowserRouter>
    // <div className="App">
    // 	<Landing />
    // </div>
  );
}

export default App;
