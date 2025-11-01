import { useState } from "react";
import "./App.css";
import CustomRadio from "./components/form_elements/CustomRadio/CustomRadio";
import TextField from "./components/form_elements/TextField/TextField";
import NumberSelector from "./components/form_elements/NumberSelector/NumberSelector";
import { useQuery } from "convex/react";
import {api} from "../convex/_generated/api"

function App() {
  const [radioValue, setRadioValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const tasks = useQuery(api.tasks.get)
  return (
    <>
    {tasks ? tasks.map((t)=>t.text):"No Tasks"}
      <TextField
        label="Name"
        onChange={() => {}}
        placeholder="Insert your name"
        value=""
        id="full-name"
        error="Invalid"
      />
      <CustomRadio
        checked={radioValue == "eMoney"}
        name="payment"
        label="e-Money"
        onChange={(val) => {
          setRadioValue(val);
        }}
        value="eMoney"
      />
      <div>
        <NumberSelector value={quantity} onChange={setQuantity} />
      </div>
    </>
  );
}

export default App;
