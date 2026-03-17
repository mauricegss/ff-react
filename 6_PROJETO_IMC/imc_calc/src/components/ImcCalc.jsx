import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }

  const handleHeightChange = (e) => {
    const updatedHeight = validDigits(e.target.value);
    setHeight(updatedHeight);
  }

  const handleWeightChange = (e) => {
    const updatedWeight = validDigits(e.target.value);
    setWeight(updatedWeight);
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={handleHeightChange}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 52,2"
              onChange={handleWeightChange}
              value={weight}
            />
          </div>
        </div>
      </form>
      <div className="action-control">
        <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}></Button>
        <Button id="clear-btn" text="Limpar" action={clearForm}></Button>
      </div>
    </div>
  );
};

export default ImcCalc;
