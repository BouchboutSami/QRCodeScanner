import { React, useState } from "react";
import QrReader from "react-qr-scanner";

const QrcodeReader = () => {
  const [Data, setData] = useState({});

  const handleScan = (data) => {
    setData(data);
    console.log("scan", data);
  };

  const handleError = (err) => {
    console.error("error", err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {Data ? <p>{Data.text}</p> : null}
    </div>
  );
};

export default QrcodeReader;
