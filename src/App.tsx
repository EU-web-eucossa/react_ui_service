import Pages from "pages/Pages";
import { HashRouter } from "react-router-dom";
import Layout from "components/Layout";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Pages />
        </Layout>
      </HashRouter>
    </div>
  );
}
export default App;
