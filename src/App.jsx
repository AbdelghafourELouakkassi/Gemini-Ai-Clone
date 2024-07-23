import React from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
    <div className="flex">
      <SideBar />
      <Main />
    </div>
    </>
  );
}

export default App;
