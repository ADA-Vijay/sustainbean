"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import style from "@/components/Newsletter/newsletter.module.css";
const Newsletter = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        size="lg"
        centered
      >
        <Modal.Body className={style.modalBody}>
          <button
            className={style.closeButton}
            onClick={() => setOpenModal(false)}
          >
            &times;
          </button>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://cdn.pixabay.com/photo/2019/01/12/16/21/breakfast-3928800_960_720.jpg"
                alt="img"
              />
            </div>
            <div className={style.subscribe}>
              <h2>Sustain a Bean</h2>
              <p>Subscribe for our latest articles and news.</p>
              <div className={style.formDiv}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  autoComplete="off"
                />
                <br />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Newsletter;
