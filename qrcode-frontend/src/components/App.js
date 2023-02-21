import React from "react";
import Qrscanner from "./QrcodeReader";

const App = () => {
  return (
    <div className="overflow-hidden w-screen min-h-screen bg-lightblueAW3 flex justify-center items-center">
      <Qrscanner />
    </div>
  );
};

export default App;
