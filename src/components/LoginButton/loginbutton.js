"use client";
import React, { useState } from "react";
import LoginModal from "@/components/Login/login";

const LoginButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className="btn btn-primary"
      >
        Login
      </button>
      <LoginModal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default LoginButton;
