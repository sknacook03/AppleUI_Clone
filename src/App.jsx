import { useState } from "react";
import mockData from "./constants/mock.json";
import "./style/index.css";

function Product({ data, handleColorChange, allColor }) {
  <SelectColor />;
  return (
    <div className="items">
      <h2>Model: {data.model}</h2>
      <img src={data.modelImage} alt={data.product} height={230} />
      <p>{data.modelColorName}</p>
      <ChoiceColor handleColorChange={handleColorChange} allColor={allColor} />
      <div className="processorModel">
        <h3>{data.baseSpecification.processorModel}</h3>
      </div>
      <h3>{data.baseSpecification.processor}</h3>
      <h3>{data.baseSpecification.graphicProcessor}</h3>
      <h3>{data.baseSpecification.momory}</h3>
      <h3>{data.baseSpecification.storageCapacity}</h3>
      <h3>{data.baseSpecification.processor}</h3>
      <p>{data.features.display}</p>
      <p>{data.features.camera}</p>
      <p>{data.features.charging_port}</p>
      <p>{data.features.ports}</p>
      <p>{data.features.external_display_support}</p>
      <p>{data.features.keyboard}</p>
      <p>{data.features.trackpad}</p>
      <p>{data.features.power_adapter}</p>
      <p>${data.price.unitPrice}</p>
      <p>VAT {data.price.monthlyPayment}</p>
      <div className="button-select">
        <button>Select</button>
      </div>
    </div>
  );
}

function ButtonSelectModel({ handleModelChange, allModel }) {
  return (
    <div className="buttonSelectModel">
      <button onClick={() => handleModelChange(allModel[0])}>
        13-inch (M2 chip)
      </button>
      <button onClick={() => handleModelChange(allModel[1])}>
        13-inch (M3 chip)
      </button>
      <button onClick={() => handleModelChange(allModel[2])}>
        15-inch (M3 chip)
      </button>
    </div>
  );
}
function ChoiceColor({ handleColorChange, allColor }) {
  return (
    <div className="choiceColor">
      <button
        style={{ backgroundColor: "#011635" }}
        onClick={() => handleColorChange(allColor[0])}
      >
        {" "}
      </button>
      <button
        style={{ backgroundColor: "#f4edc6" }}
        onClick={() => handleColorChange(allColor[1])}
      >
        {" "}
      </button>
      <button
        style={{ backgroundColor: "#717378" }}
        onClick={() => handleColorChange(allColor[2])}
      >
        {" "}
      </button>
      <button
        style={{ backgroundColor: "#C0C0C0" }}
        onClick={() => handleColorChange(allColor[3])}
      >
        {" "}
      </button>
    </div>
  );
}
function SelectColor() {
  return;
}
function App({ product }) {
  const allModel = [...new Set(mockData.map((data) => data.model))];
  const [selectModel, setSelectModel] = useState(allModel[0]);
  const groupModel = mockData.filter((item) => item.model === selectModel);
  const handleModelChange = (model) => setSelectModel(model);

  const allColor = [...new Set(mockData.map((data) => data.modelColorName))];
  const [selectColor, setSelectColor] = useState(allColor[0]);
  const groupColor = mockData.filter(
    (item) => item.modelColorName === selectColor
  );
  const handleColorChange = (color) => setSelectColor(color);
  console.log(groupColor);

  const showAll = mockData.filter(
    (item) => item.model === selectModel && item.modelColorName === selectColor
  );
  return (
    <>
      <ButtonSelectModel
        handleModelChange={handleModelChange}
        allModel={allModel}
      />
      <div className="boxCon">
        {showAll.map((item, index) => (
          <Product
            key={index}
            data={item}
            handleColorChange={handleColorChange}
            allColor={allColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
