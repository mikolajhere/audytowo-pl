import { useState, useEffect } from "react";
import { UseMultistepForm } from "./components/UseMultistepForm";
import { ThankYouForm } from "./components/ThankYouForm";
import { useAddHiddenInputs } from "./scripts/Hidden";
import "./styles/App.css";
import { CityView } from "./components/CityView";
import { PhoneView } from "./components/PhoneView";
import { EmailView } from "./components/EmailView";
import { HomeTypeView } from "./components/HomeTypeView";
import { HomeAreaView } from "./components/HomeAreaView";
import { PlanView } from "./components/PlanView";

const INITIAL_DATA = {
  dataLog: "",
  dataPhone: "",
  dataEmailTemplate: "audytowo.com.php",
  dataSMSTemplate: "audytowo.com.php",
  "dataValues[serviceDataType]": 574,
  "dataValues[serviceClientChannel]": 39,
  "dataValues[serviceClientSource]": 651,
  "dataValues[serviceDataAddressCityText]": "",
  "dataValues[serviceDataAddress]": "",
  "dataValues[serviceDataFlatArea]": "",
  "dataValues[serviceClientClientHasFloorPlan]": "",
  dataUpdateEmail: "",
  docs: "",
  submit: 1,
  tips: "",
  street: "",
};

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  // Callback function to update data state
  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  useAddHiddenInputs("my-form", updateData);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = urlParams.get("hash");
    if (hash) {
      setData((prevData) => ({
        ...prevData,
        clientHash: hash,
      }));
      next(); // Move to the next step if hash is present
    }
  }, []);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { isFirstStep, step, isLastStep, penultimateStep, next } =
    UseMultistepForm([
      <PhoneView key={0} {...data} updateFields={updateFields} />,
      <CityView key={1} {...data} updateFields={updateFields} />,
      <EmailView key={2} {...data} updateFields={updateFields} />,
      <HomeTypeView key={3} {...data} updateFields={updateFields} />,
      <HomeAreaView key={4} {...data} updateFields={updateFields} />,
      <PlanView key={5} {...data} updateFields={updateFields} />,
      <ThankYouForm key={6} {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();

    if (isFirstStep) {
      const formData = { ...data };
      console.log({ formData });
      fetch(
        "https://system.pewnylokal.pl/crm/api/newEndpoint.php?format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setData({
            clientHash: data.hash,
            submit: 1,
            dataEmailTemplate: "audytowo.com.php",
          });
          console.log("Endpoint Success: ", data);
          // Trigger PageSense custom event
          window.pagesense = window.pagesense || [];
          window.pagesense.push(['trackEvent', 'leady audytowo']);
        })
        .catch((error) => {
          console.error("Endpoint Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "audytowo.com.php",
        clientHash: data.clientHash,
        submit: 1,
      });
    } else if (!isLastStep) {
      console.log({ step });
      console.log(data);
      fetch(
        "https://system.pewnylokal.pl/crm/api/updateClientData.php?format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log("UpdateClientData Success: ", data);
          // Trigger PageSense custom event
          window.pagesense = window.pagesense || [];
          window.pagesense.push(['trackEvent', 'leady audytowo']);
        })
        .catch((error) => {
          console.error("UpdateClientData Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "",
        clientHash: data.clientHash,
        submit: 1,
      });
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="col-md uber-quiz-banner">
          <img src="wykres.jpg" draggable="false" alt="" />
        </div>
        <div className="col-md uber-quiz-question">
          <form onSubmit={onSubmit} id="my-form">
            <div className="form-content">
              <div className="form-grid">{step}</div>
            </div>
            {isLastStep ? (
              <></>
            ) : (
              <div className="btn-container">
                <button className="btn-main" type="submit">
                  {!penultimateStep ? "Dalej" : "Wyślij formularz"}
                </button>
              </div>
            )}{" "}
          </form>
        </div>
      </div>
    </>
  );
};
