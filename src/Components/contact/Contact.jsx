import React, { useEffect, useRef, useState } from "react";
import { FaMessage } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactMe.scss";
import SectionTitle from "../SectionTitle";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      banner ===
      "Thank you! Your email has been received, and I will reply shortly."
    ) {
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

  const handleValidation = () => {
    let isValid = true;
    if (values.name.trim() === "") {
      nameRef.current.classList.add("error");
      isValid = false;
    } else {
      nameRef.current.classList.remove("error");
    }
    if (values.email.trim() === "") {
      emailRef.current.classList.add("error");
      isValid = false;
    } else {
      emailRef.current.classList.remove("error");
    }
    if (values.message.trim() === "") {
      textAreaRef.current.classList.add("error");
      isValid = false;
    } else {
      textAreaRef.current.classList.remove("error");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      setBanner("Please fill all the required fields?");
      document.getElementById("id").style.color = "#eb6864";
      bannerColorRef.current.classList.add("errorColor");
      messageShadowRef.current.classList.add("messageShadow");
      toast.error("Please fill all the required fields?", {
        theme: "colored",
        transition: Slide,
      });
      return;
    }

    setIsLoading(true);
    toast.info("Sending email...", {
      theme: "colored",
      transition: Slide,
      autoClose: false,
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
          document.getElementById("id").style.color = "#39ac73";
          messageShadowRef.current.classList.add("messageShadow");
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
          toast.error("Failed to send the email. Please try again later.", {
            theme: "colored",
            transition: Slide,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
        toast.dismiss();
      });
  };

  return (
    <div id="Contact" className="contact-form">
      <SectionTitle title="Get In Touch With Me" />
      <div className="contact-container">
        <div className="main">
          <div className="form-img">
            <a
              href="mailto:yohanistadese06@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <s>
                  <FaEnvelope />
                </s>
                <i>yohanistadese06@gmail.com</i>
              </span>
            </a>
            <a
              href="tel:+251984751233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <s>
                  <FaPhone />
                </s>
                <i>+251 984751233</i>
              </span>
            </a>
            <a
              href="https://t.me/yohanistadese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <s>
                  <FaTelegram />
                </s>
                <i>@yohanistadese</i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yohanis-tadese/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <s>
                  <FaLinkedin />
                </s>
                <i>@yohanis-tadese</i>
              </span>
            </a>
            <a
              href="https://github.com/yohanis-tadese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <s>
                  <FaGithub />
                </s>
                <i>@yohanis-tadese</i>
              </span>
            </a>
          </div>

          <div className="content">
            <form method="POST" id="yourFormId" onSubmit={handleSubmit}>
              <span ref={messageShadowRef} id="message" className="message">
                <p ref={bannerColorRef} id="id">
                  {banner}
                </p>
              </span>
              <h2>
                Send Me a Message
                <span>
                  <FaMessage />
                </span>
              </h2>
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
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
                onChange={handleChange}
                value={values.email}
              />
              <textarea
                name="message"
                placeholder="Your message"
                ref={textAreaRef}
                onChange={handleChange}
                value={values.message}
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
