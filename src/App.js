import "./App.css"
import Form from "./components/Form"
import Results from "./components/Results";
import Invalid from "./components/Invalid";
import { useState } from "react";

function App() {
  const [results, updateResults] = useState([]);
  const [isValid, updateValidity] = useState({
    valid: false,
    message: ""
  });

  const handleSaveData = (inputtedData) => {
    updateResults(current => [...current, inputtedData]);
  }

  return (
    <div className="container">
      {isValid.valid ? <Invalid closeOverlay={updateValidity} errorMsg={isValid.message}/> : ''}
      <Form onSaveData={handleSaveData} onCheckValidity={updateValidity}/>
      <Results data={results}/>
    </div>
  )
}
export default App