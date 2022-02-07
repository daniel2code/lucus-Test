import "./App.css";
import RouterComponent from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./config/globalStyles";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./store/reducers/index";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <RouterComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
