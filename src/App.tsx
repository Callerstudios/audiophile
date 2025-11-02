import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

const RoutesWrapper = ()=>{
  return (
    useRoutes(routes)
  )
}

function App() {
  // const tasks = useQuery(api.tasks.get)
  return (
    <>
    {/* {tasks ? tasks.map((t)=>t.text):"No Tasks"} */}
      {/* <TextField
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
      </div> */}
      <BrowserRouter>
      <RoutesWrapper/>
      </BrowserRouter>
    </>
  );
}

export default App;
