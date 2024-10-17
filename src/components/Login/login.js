"use client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "@/components/Login/login.module.css";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import { loginValidator } from "@/components/Validation/validation";

const LoginModal = ({ isOpen, handleClose }) => {
  const inputs = ["input1", "input2", "input3", "input4"];
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [mobile, setMobile] = useState("");
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const [showloginSection, setShowLoginSection] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoginError(""); 
    try {
      await loginValidator.validate({ mobile }, { abortEarly: false });
      setShowOtpSection(true);
      setShowLoginSection(false);
      // handleCloseModal()
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setLoginError(validationError.errors[0]);
      } else {
        console.log(validationError);
      }
    }
  };
  
  
  useEffect(() => {
    inputs.forEach((id, index) => {
      const input = document.getElementById(id);
      if (input) {
        addListener(input, index);
      }
    });
  }, [showOtpSection]);
  function addListener(input, index) {
    input.addEventListener("keyup", function (event) {
      const code = parseInt(input.value);
      if (code >= 0 && code <= 9) {
        const nextIndex = index + 1;
        const nextInput = document.getElementById(inputs[nextIndex]);
        if (nextInput) nextInput.focus();
      } else {
        input.value = "";
      }
      const key = event.key;
      if (key === "Backspace" || key === "Delete") {
        const prevIndex = index - 1;
        const prevInput = document.getElementById(inputs[prevIndex]);
        if (prevInput) prevInput.focus();
      }
    });
  } 
  const handleOtpKeyUp = (e, index) => {
    const code = parseInt(e.target.value);
    if (e.key == "Backspace" || e.key == "Delete") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (code >= 0 && code <= 9) {
      if (index < inputs.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleCloseModal = () => {
    setMobile(""); 
    setLoginError(""); 
    setShowOtpSection(false); 
    setShowLoginSection(true);
    inputRefs.current.forEach((input) => {
      if (input) {
        input.value = ""; 
      }
    });

    handleClose(); 
  };
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (!value && index > 0) {
      setTimeout(() => {
        inputRefs.current[index - 1]?.focus();
      }, 0);
    }
  };

  const verifyOtp = ()=>{
    console.log("otp is", otp)
    handleCloseModal()
  }
  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      className={styles.modal}
      size="lg"
    >
      <button className={styles.closeButton} onClick={handleCloseModal}>
        &times;
      </button>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.signup}>
          <div className={styles["signup-connect"]}></div>
          <div className={styles["signup-classic"]}>
            <h1 className="text-center">Sign In</h1>
            <h2 className="text-center">Join Us Today, Empower Tomorrow</h2>
            <div className={styles.form}>
              {showloginSection && (
                <>
                  <fieldset className={styles.email}>
                    <input
                      type="email"
                      placeholder="mobile"
                      name="mobile"
                      value={mobile}
                      autoComplete="off"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </fieldset>
                  {loginError && <p className={styles.error}>{loginError}</p>}
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={handleSubmit}
                  >
                    sign in
                  </button>
                </>
              )}

              {showOtpSection && (
                <div className={`${styles["form-group"]} text-center `}>
                  <label className="mb-4 mt-5 otp-label">Verify Your OTP</label>
                  <div className={`${styles["otp-input"]} mb-4`}>
                    {inputs.map((id, index) => (
                      <input
                        className={`${styles.input} ${styles["otp-inputs"]}`}
                        key={id}
                        id={id}
                        type="text"
                        maxLength="1"
                        ref={(el) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyUp={(e) => handleOtpKeyUp(e, index)}
                      />
                    ))}
                    {loginError && (
                      <p className="" style={{ color: "red" }}>
                        {loginError}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    className={styles.btn}
                   onClick={verifyOtp}
                  >
                    verify
                  </button>
                 
                  {timer !== 0 && (
                    <p className="text-center mt-5 otp-p">
                      We've sent your code. Try again in {timer} seconds
                    </p>
                  )}
                  {timer === 0 && (
                    <p
                      className="text-center mt-3 otp-p"
                      onClick={handleOtpNotRecieved}
                      style={{ cursor: "pointer" }}
                    >
                      didn't received ? resend
                    </p>
                  )}{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
