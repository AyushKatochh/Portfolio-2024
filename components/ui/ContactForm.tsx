"use client";
import React, { useState } from "react";

import { FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


interface typeinputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  
  return (
    <div className="w-11/12 md:w-1/2 p-6 text-white z-50">
      <h2>Contact Information</h2>
      <ul>
        <li>
          <FaEnvelope className="mr-2 inline-block" />
          <strong>Email:</strong>{" "}
          <a href="mailto:katochayushhp@gmail.com">
            katochayushhp@gmail.com
          </a>
        </li>
        <li>
          <FaGithub className="mr-2 inline-block" />
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/AyushKatochh">
            https://github.com/AyushKatochh
          </a>
        </li>
        <li>
          <FaTwitter className="mr-2 inline-block" />
          <strong>Twitter:</strong>{" "}
          <a href="https://twitter.com/AyushKatoch17">
            https://twitter.com/AyushKatoch17
          </a>
        </li>
        <li>
          <FaLinkedinIn className="mr-2 inline-block" />
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/ayush-katoch-00197021a/">
            https://www.linkedin.com/in/ayush-katoch-00197021a/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactForm;
