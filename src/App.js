import "./App.css";
import Table from "./components/table/table";
// data json
import data from "./data/db.json";

function App() {
  //get data  
const dataUrl=[
  data,
  //you can add more data here
  data
 ];

  return (
    <div className="App">
      <h1>test</h1>
      {}
      {dataUrl ? dataUrl.map((el,id)=>  <Table key={id} dataUrl={el} /> ): <h1>Have a good day!</h1>}     
      {/* <div style={{ height: "1000px" }}></div> */}
    </div>
  );
}

export default App;
