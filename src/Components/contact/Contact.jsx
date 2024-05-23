import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Slide } from "react-toastify";
import "./contactMe.scss";

// import emailBg from "../../assets/core-image/about-me.png";
import SectionTitle from "../SectionTitle";

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
        );
    }
  };

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

  return (
    <div id="contact" className="contact-form">
      <SectionTitle title="Contact me" />
      <div className="contact-container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form method="POST" id="yourFormId" onSubmit={handleSubmit}>
              <div ref={messageShadowRef} id="message" className="message">
                <p ref={bannerColorRef} id="id">
                  {banner}
                </p>
              </div>

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
                  paddingLeft: "6%",
                  paddingTop: "2%",
                  width: "100%",
                  height: "70px",
                }}
              ></textarea>
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          {/* <div className="form-img">
            <span>Emainl: </span>
            <span>Phone</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
