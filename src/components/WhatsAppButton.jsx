import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919666466660" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span>How can I help you?</span>
    </a>
  );
};

export default WhatsAppButton;