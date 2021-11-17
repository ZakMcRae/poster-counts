import "./App.css";
import { useState } from "react";
import InputRow from "./components/InputRow";
import LabelRow from "./components/LabelRow";
import TotalsRow from "./components/TotalsRow";

function App() {
  const [countStore, setCountScore] = useState({});

  return (
    <div className="App">
      <div className="counts-grid">
        <LabelRow></LabelRow>
        <InputRow></InputRow>
        <TotalsRow></TotalsRow>
      </div>
    </div>
  );
}

export default App;
