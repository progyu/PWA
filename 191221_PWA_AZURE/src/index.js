import React from "react";
import ReactDOM from "react-dom";

const App = () => <div className="app">알 수가 없군요...</div>;

ReactDOM.render(<App />, document.getElementById("app"));

// 서비스워커를 지원한다면
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
