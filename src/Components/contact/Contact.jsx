import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Slide } from "react-toastify";
import "./contactMe.scss";

import SectionTitle from "../SectionTitle";
import { FaEnvelope, FaPhone, FaTelegram } from "react-icons/fa";

const ContactMe = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const textAreaRef = useRef();

  const messageShadowRef = useRef();
  const bannerColorRef = useRef();
  const [banner, setBanner] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  if (values.name.length !== 0) {
    nameRef.current.classList.remove("error");
  }
  if (values.email.length !== 0) {
    emailRef.current.classList.remove("error");
  }
  if (values.message.length !== 0) {
    textAreaRef.current.classList.remove("error");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name.length === 0 ||
      values.email.length === 0 ||
      values.message.length === 0
    ) {
      e.preventDefault();
      setBanner("Please fill all the required fields?");
      document.getElementById("id").style.color = "#eb6864";
      bannerColorRef.current.classList.add("errorColor");
      messageShadowRef.current.classList.add("messageShadow");
      nameRef.current.classList.add("error");
      emailRef.current.classList.add("error");
      textAreaRef.current.classList.add("error");
      toast.error("Please fill all the required fields?", {
        theme: "colored",
        transition: Slide,
      });
      console.log("Please fill all the required fields?");
    } else {
      setIsLoading(true); // Set loading state to true
      toast.info("Sending email...", {
        // Display loading toast
        theme: "colored",
        transition: Slide,
        autoClose: false, // Don't auto close loading toast
      });
      emailjs
        .sendForm(
          "service_fgrh799",
          "template_8tja4pd",
          document.getElementById("yourFormId"),
          "lRPjByGWA0-yW1IPX"
        )
        .then(
          (response) => {
            setBanner(
              "Thank you! Your email has been received, and I will reply shortly."
            );
            console.log("SUCCESS!", response);
            document.getElementById("id").style.color = "#39ac73";
            messageShadowRef.current.classList.add("messageShadow");
            nameRef.current.classList.remove("error");
            emailRef.current.classList.remove("error");
            textAreaRef.current.classList.remove("error");
            toast.success("Your email has been sent successfully!", {
              theme: "colored",
              transition: Slide,
            });
            setValues({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        )
        .finally(() => {
          setIsLoading(false);
          toast.dismiss();
        });
    }
  };

  useEffect(() => {
    if (banner === "Thank you! Your email has been received.") {
      setTimeout(() => {
        setBanner("");
        messageShadowRef.current.classList.remove("messageShadow");
      }, 7000);
    }
  }, [banner]);

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div id="Contact" className="contact-form">
      <SectionTitle title="Get In Touch Me" />
      <div className="contact-container">
        <div className="main">
          <div className="form-img">
            <div className="form-img">
              <a
                href="mailto:yohanistadese06@gmail.com"
                target="blank"
                rel="noopener noreferrer"
              >
                <span>
                  <s>
                    <FaEnvelope />
                  </s>
                  <i>Yohanistadese06@gmail.com</i>
                </span>
              </a>
              <a
                href="tel:+251984751233"
                target="blank"
                rel="noopener noreferrer"
              >
                <span>
                  <s>
                    <FaPhone />
                  </s>
                  <i>Phone: +251 984751233</i>
                </span>
              </a>
              <a
                href="https://t.me/yohanistadese"
                target="blank"
                rel="noopener noreferrer"
              >
                <span>
                  <s>
                    <FaTelegram />
                  </s>
                  <i>Telegram: @yohanistadese</i>
                </span>
              </a>
            </div>
          </div>
          <div className="content">
            <form method="POST" id="yourFormId" onSubmit={handleSubmit}>
              <span ref={messageShadowRef} id="message" className="message">
                <p ref={bannerColorRef} id="id">
                  {banner}
                </p>
              </span>

              <h2>Send Me a Message 👇</h2>

              <br />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                ref={nameRef}
                onChange={handleChange}
                value={values.name}
              />
              <input
                type="email"
                ref={emailRef}
                onChange={handleChange}
                value={values.email}
                name="email"
                placeholder="Enter your email"
              />
              <textarea
                ref={textAreaRef}
                type="text"
                onChange={handleChange}
                value={values.message}
                name="message"
                placeholder="Your message"
                style={{
                  paddingLeft: "4.3%",
                  paddingTop: "5%",
                  width: "100%",
                  height: "70px",
                }}
              ></textarea>
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send"}{" "}
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
