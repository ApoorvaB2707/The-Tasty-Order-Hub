import './PopUp.css';

function Popup({ onClose }) {
    return (
      <div className="popup">
        <div className="popup-content">
          Message Sent!
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
export default Popup;  