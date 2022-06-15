import "./App.css";
import Graph from "components/Graph";
import Table from "components/Table";
import UserState from "components/UserState";
import SocialMedia from "components/SocialMedia";

function App() {
  return (
    <div className="App">
      <UserState />
      <SocialMedia/>
      <Graph />
      <Table />
    </div>
  );
}

export default App;
