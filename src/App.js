import "./App.css";
import RouterComponent from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./config/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Router>
          <RouterComponent />
        </Router>
      {/* </GlobalStyle> */}
    </div>
  );
}

export default App;
