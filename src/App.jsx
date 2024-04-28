import { useState } from "react";
import mockData from "./constants/mock.json";
import "./style/index.css";

function Product({ data, handleColorChange, allColor, selectColor }) {
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
      {allModel.map((model, index) => (
        <button key={index} onClick={() => handleModelChange(model)}>
          {model}
        </button>
      ))}
    </div>
  );
}
function ChoiceColor({ handleColorChange, allColor }) {
  return (
    <div className="choiceColor">
      {allColor.map((color,index) => (
        <button key={index} onClick={() => handleColorChange(color)}>
          <img src={color.image} alt={color.name} width={16} height={16} />
        </button>
      ))}
    </div>
  );
}
function App({ product }) {
  const allModel = [...new Set(mockData.map((data) => data.model))];
  const [selectModel, setSelectModel] = useState(allModel[0]);
  const groupModel = mockData.filter((item) => item.model === selectModel);
  const handleModelChange = (model) => setSelectModel(model);

  const allColorSet = new Set(
    mockData.map((data) => {
      return JSON.stringify({
        name: data.modelColorName,
        image: data.modelColorImage,
      });
    })
  );
console.log(allColorSet)
  const allColor = Array.from(allColorSet).map((item) => JSON.parse(item));
  const [selectColor, setSelectColor] = useState(allColor[0]);

  const handleColorChange = (color) => {
    setSelectColor(color);
    
  };

  const showAll = mockData.filter(
    (item) =>
      item.model === selectModel && item.modelColorName === selectColor.name
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
            selectColor={selectColor}
            allColor={allColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
