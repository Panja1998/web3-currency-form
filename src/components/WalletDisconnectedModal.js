import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Modal, Button, Table } from "react-bootstrap";
import React, {  useState } from "react";
import { ethers } from "ethers";

const WalletDisconnectedModal = (props) => {
  const [defaultAccount, setDefaultAccount] = useState();
  const [userBalance, setUserBalance] = useState();
  const [userChainId, setUserChainId] = useState();
  const connect = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        accountChangeHandler(result[0]);
      });
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
    getChainId(newAccount);
  
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };
  const getChainId = (address) => {
    window.ethereum
      .request({ method: "eth_chainId", params: [address, "latest"] })
      .then((chainid) => {
        setUserChainId(chainid);
      });
  };


  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       
      >
        {userBalance === null || userBalance === undefined ? (
          <>
            <Modal.Header closeButton />
            <p className="wallet-text">
              Wallet is not connected please click the connect button above{" "}
            </p>
            <Button variant="dark" onClick={connect}>
              Connect
            </Button>
          </>
        ) : (
          <>
            <Modal.Header closeButton>Wallet Details</Modal.Header>
            <p className="wallet-text">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                   
                    <th>Address</th>
                    <th>Balance</th>
                    <th>ChainId</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>{defaultAccount}</td>
                    <td>{userBalance}</td>
                    <td>{userChainId}</td>
                  </tr>
                </tbody>
              </Table>
            </p>
          </>
        )}
      </Modal>
    </>
  );
};

export default WalletDisconnectedModal;
