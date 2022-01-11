import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

const NoWalletModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />

      <p className="wallet-text">There is no wallet. Please make a account in metamask </p>
      

     
    </Modal>
  );
};

export default NoWalletModal;
