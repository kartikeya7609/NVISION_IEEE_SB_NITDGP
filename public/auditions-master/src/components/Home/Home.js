import React, { useEffect, useState } from "react";
import Details from "../FormOld/Details";
import StepTwo from "../FormOld/StepTwo";
import StepThree from "../FormOld/StepThree";
import "./Home.css";
import Submit from "../../utilities/submit";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  const [data, setData] = useState({
    first_name: " ",
    last_name: " ",
    email: " ",
    year: " ",
    branch: " ",
    1: " ",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
    // make API call here
    Submit(formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <Details next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];
  console.log("data", data);

  useEffect(() => {
    document.querySelector(
      ".bar"
    ).style.background = `linear-gradient(90deg, rgb(0, 255, 0) ${
      (100 * (currentStep + 1)) / 3
    }%, lightgray ${(100 * currentStep + 1) / 3}%)`;
  }, [currentStep]);

  return (
    <div className="wrapper">
      {/* <Navbar /> */}
      <p className="glitch">IEEE Auditions 2024</p>
      <div className="card">
        {/* <Submit /> */}
        <div className="card-header">
          <div className="bar"></div>
          {/* <h1 class="glitch">{currentStep}</h1> */}
          {steps[currentStep]}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// <audio controls autoplay loop="true" style={{ height: "2" }}>
// 	<source
// 		src="https://assets.codepen.io/450456/glitch-track.mp3"
// 		type="audio/mp3"
// 	/>
// </audio>;
