import "./App.css";
import Table from "./components/table/table";
// data json
import dataUrl from "./data/db.json";

function App() {
  // data check 


  return (
    <div className="App">
      <h1>Intelico</h1>
      <Table dataUrl={dataUrl&&dataUrl} />
      <Table  dataUrl={dataUrl} />
      <Table dataUrl={dataUrl} />
      {/* <div style={{ height: "1000px" }}></div> */}
    </div>
  );
}

export default App;
