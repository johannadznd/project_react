import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./commun/components/NavBar";
import { Provider } from "react-redux";
import store, { history } from "./store/index";
import { saveState } from "./store/localStorage";

store.subscribe(() => {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <NavBar></NavBar>
          <Router></Router>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
