import React, { useState } from "react";
import "./Payment.css";

const Payment = ({ setShow }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [alertShow, setAlertShow] = useState(false);

  const handleBooking = () => {
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 5000);
  };
  return (
    <div className="modal">
      <div className="payment-container">
        <h3 className="close-icon" onClick={() => setShow(false)}>
          {" "}
          X
        </h3>
        <h2>Complete Payment</h2>
        <div className="payment-options">
          <div className="payment-button">
            <button
              className={`${
                selectedMethod === "paypal" ? "active" : "paypal-button"
              }`}
              onClick={() => setSelectedMethod("paypal")}
            >
              <img src="./paypal-img.webp" alt="" />
            </button>
          </div>
          <div className="payment-button">
            <button
              className={`${
                selectedMethod === "gpay" ? "active" : "gpay-button"
              }`}
              onClick={() => setSelectedMethod("gpay")}
            >
              <img
                src="https://logohistory.net/wp-content/uploads/2023/08/Google-Pay-Logo.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div>
          {selectedMethod === "paypal" && (
            <div className="payment-option">
              <div className="card-form">
                <input type="email" placeholder="PayPal Email" />
              </div>
            </div>
          )}
          {selectedMethod === "gpay" && (
            <div className="payment-option">
              <div className="card-form">
                <input type="text" placeholder="Google Pay Phone Number" />
              </div>
            </div>
          )}
        </div>
        <div className="card-details">
          <h5>Or checkout using credit card / debit card</h5>
          <div className="card-form">
            <input type="text" placeholder="Cardholder Name" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiry Date (MM/YYYY)" />
            <input type="text" placeholder="CVV" />
          </div>
        </div>
        <div>
          <button className="pay-button" onClick={handleBooking}>
            Pay Now
          </button>
        </div>
        {alertShow && (
          <div className="alert-box">
            <h3>
              Congratulations! Your booking has been successfully completed. 🎉
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
