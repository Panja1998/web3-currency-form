import "../App.css";
import React, {  useState } from "react";
import { Button } from "react-bootstrap";
import banner_image from "../images/neptune_logo.jpg";
import WalletDisconnectedModal from "./WalletDisconnectedModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoWalletModal from "./NoWalletModal";
const NeptuneForm = () => {
  const [currencyType, setCurrencyType] = useState("");
  const [currencyValue, setCurrencyValue] = useState();
 

  const [modalShow, setModalShow] = useState(false);
 
  const [noWalletShow, setNoWallet] = useState(false);

  let nepAmount, bsudAmount;
  if (currencyType === "nep") {
    nepAmount = parseFloat(currencyValue * 3).toFixed(2)
  } else {
    bsudAmount = parseFloat(currencyValue /3).toFixed(2)
  }
  const isConnect=()=>{
    if ( window.ethereum){
     
      setModalShow(true)
    }
    else{
      setNoWallet(true)
    }
  }
  return (
    <>
      <img className="banner-image" src={banner_image} alt="Neptune-Logo" />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Crypto Converter</h5>
<form>
          <label htmlFor="nep" style={{ display: "block" }}>
            NEP
          </label>
          <input
            type="number"
            id="nep"
            value={bsudAmount}
            onClick={(e) => {
              setCurrencyType(e.target.id);
            }}
            onChange={(e) => {
              setCurrencyValue(e.target.value);
            }}
        className="nep-value"
          />
          

          <label htmlFor="busd" style={{ display: "block" }} className="busd-label">
            BUSD
          </label>

          <input
            type="number"
            id="busd"
            value={nepAmount}
            onClick={(e) => {
              setCurrencyType(e.target.id);
            }}
            onChange={(e) => {
              setCurrencyValue(e.target.value);
            }}
          className="busd-value"
          />
          </form>
          <Button variant="dark" onClick={isConnect}>Check Wallet Details</Button>
         

          <WalletDisconnectedModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        
          <NoWalletModal
            show={noWalletShow}
            onHide={() => setNoWallet(false)}
          />
        </div>
      </div>
    </>
  );
};

export default NeptuneForm;
