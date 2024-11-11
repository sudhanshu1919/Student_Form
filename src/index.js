import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./main/App";
// import App from "./ContaxtAPI/App";

// import App from "./Redux/App";
// import App from "./Data/App";
// import App from "./Nanded/App";
// import App from "./Nanded_Navbar/App";

import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// it is Boostrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
