import "./App.scss";
import React, { useState } from "react";
import QRcode from 'qrcode'

function App() {

    const [url, setUrl] =useState('')
    const[qrcode, setQrcode] = useState('')

    const GenerateQRcode = () => {
      QRcode.toDataURL(url, {width:800, margin: 2}, (err, url) => {
        if (err) return console.error(err)

        console.log(url)
        setQrcode(url)

      })
    }

  return (
    <>
      <div className="app">
        <h1>QR Code Generator</h1>
        <input type="text" placeholder="ex: https://google.com" value={url} onChange={(evt) => setUrl(evt.target.value)} />
        <button onClick={GenerateQRcode}>Generate</button>

        {qrcode && <>
        
          <img src={qrcode} />
          <a href={qrcode} download= "qrcode.png">Download</a>
        
        </>}


      </div>
    </>
  );
}

export default App;
