import React from "react";
// import UploadButton from "./UploadButton";
// import Button from '@mui/material/Button';
import "./SimpleContainer";
import Header from "./Header";
// import SimpleContainer from "./SimpleContainer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <Header /> */}
      <SignIn />
      {/* <SignUp /> */}
      {/* <SignUp /> */}
      {/* <SimpleContainer> */}
      {/* <UploadButton /> */}
      {/* </SimpleContainer> */}
    </div>
  );
}

export default App;
