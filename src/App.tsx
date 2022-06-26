import "./App.css";
//import Table from "components/Table";
//import  User State from "components/UserState";
//import SocialMedia from "components/SocialMedia";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
