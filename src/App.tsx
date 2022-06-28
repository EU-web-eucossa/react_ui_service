import "./App.css";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Pages />
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
