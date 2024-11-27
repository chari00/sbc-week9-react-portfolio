import './Contact.css'
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import cross from '../../assets/icons8-cross-40.png';
import tick from '../../assets/icons8-tick-48.png'
import { Button } from '@material-tailwind/react';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "email" && value) {
        if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors[name] = "Email address is invalid";
        } else {
          delete newErrors[name];
        }
      } else if (value) {
        delete newErrors[name];
      }
      
      return newErrors;
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    
    if (!formData.message) formErrors.message = "Message is required";
    
    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSuccessMessage(
            <div className={successMessage}>
              <img
                src={tick}
                alt="Success"
                width={24}
                height={24}
              />
              <span className='bg-blue-800 p-4 rounded-md text-white-500'>Message sent successfully!</span>
            </div>
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          setSuccessMessage("");
          setErrorMessage(
            <div className="sendFail">
              <img
                src={cross}
                alt="Error"
                width={24}
                height={24}
              />
              <span>Failed to send message. Please try again later.</span>
            </div>
          );
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <>
    
    <div className="backgroundContainer">
      <div className="contactForm">
        <h1 className="pageHeading mt-28">Contact me</h1>
       
        {successMessage}
        <form ref={form} onSubmit={sendEmail} className="formElement">
          <label className="labelField " htmlFor="name">
            Name
            <input
              className="inputField"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="name"
            />
            {errors.name && (
              <span className={errorMessage}>{errors.name}</span>
            )}
          </label>
          <label className="labelField" htmlFor="email">
            Email
            <input
              className="inputField"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
            />
            {errors.email && (
              <span className={errorMessage}>{errors.email}</span>
            )}
          </label>
          <label className="labelField" htmlFor="phone">
            Phone
            <input
              className="inputField"
              name="phone"
              type='number'
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            
            {errors.phone && (
              <span className={errorMessage}>{errors.phone}</span>
            )}
          </label>
          <label className="labelField" from="message">
            Message
            <textarea
              className="inputField"
              name="message"
              rows="10"
              cols="40"
              value={formData.message}
              onChange={handleInputChange}
              style={{ resize: "none", color:"black" }}
            ></textarea>
            {errors.message && (
              <span className={errorMessage}>{errors.message}</span>
            )}
          </label>
          <div className="buttonContainer">
            <Button className="button" onClick={sendEmail} type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
