import React, { useEffect, useState } from "react";
import QRcode from "qrcode";
import AnimatedLetters from "./Animatedletters";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const GenerateQRcode = () => {
    QRcode.toDataURL(url, { width: 800, margin: 2 }, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <>
      <div className="app">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"QR Code Generator".split("")}
            idx={15}
          />
        </h1>
        <input
          type="text"
          placeholder="ex: https://google.com"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <button onClick={GenerateQRcode}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Generate".split("")}
            idx={15}
          />
        </button>

        {qrcode && (
          <>
            <img src={qrcode} alt="qrcode" />
            <a className="dl" href={qrcode} download="qrcode.png">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Download".split("")}
                idx={15}
              />
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default App;
