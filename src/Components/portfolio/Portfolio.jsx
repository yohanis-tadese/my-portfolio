import natours from "../../assets/images/natours.jpg";
import abegarage from "../../assets/images/abegarage.jpg";
import placement from "../../assets/images/placement.jpg";
import Travel from "../../assets/images/travelList.jpg";
import Bankist from "../../assets/images/bankist.jpg";
import { motion } from "framer-motion";
import noorShop from "../../assets/images/noorShop.png";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import "./portfolio.scss";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      id="Project"
      className="Myportfolio max-w-container mx-auto lgl:px-20 py-24  "
    >
      <div className="portfolio-title">
        <SectionTitle title="Some Things I have Built" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* *************** Project one ******************** */}
        <div
          className="flex flex-col xl:flex-row gap-6"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "20px",
            background: "#F5F8FD",
          }}
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/yohanis-tadese/Internship-placement-system"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={placement}
                alt="placement-image"
              />
              <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textBlack text-sm tracking-wide text-textroyalBlue fw-bold ">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Internship Placement System
              </h3>
            </div>
            <p
              style={{ color: "#fff" }}
              className="bg-[#0794C9] text-sm md:text-base p-2 md:p-6 rounded-md  "
            >
              Developed an Internship Placement System where students are
              matched with companies using the Stable Roommates Problem
              algorithm. Students can view their assigned company placements and
              relevant details and more.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ReactJs</li>
              <li>Styled-CSS</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MySql</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textBlack duration-300"
                href="https://github.com/yohanis-tadese/Internship-placement-system"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textBlack duration-300"
                href="https://github.com/yohanis-tadese/Internship-placement-system"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* *************** Project two ******************** */}
        <div
          className="flex flex-col xl:flex-row-reverse gap-6"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "20px",
            background: "#F5F8FD",
          }}
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://yohanis-packed-travel-ready.netlify.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={Travel}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textBlack text-sm tracking-wide text-textroyalBlue fw-bold">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Traveler pack easily</h3>
            </div>
            <p
              style={{ color: "#fff" }}
              className="text-sm md:text-base bg-[#0794C9] p-2 md:p-6 rounded-md xl:-mr-16  "
            >
              Create your travel list effortlessly! Note what you can't leave
              behind and quantity. Tick off as you pack. Easily track
              essentials. Remove what you don't need. Simplify your packing
              process!
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textBlack duration-300"
                href="https://github.com/Jhontadese/react-travel-list"
                target="_blank"
              >
                <TbBrandGithub />
              </a>

              <a
                className="hover:text-textBlack duration-300"
                href="https://yohanis-packed-travel-ready.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* *************** Project three ******************** */}
      <div
        className="flex flex-col xl:flex-row gap-6 mt-20"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "#F5F8FD",
        }}
      >
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://github.com/yohanis-tadese/abe-garage"
          target="_blank"
        >
          <div>
            <img
              className="w-full h-full object-contain"
              src={abegarage}
              alt="abegarage"
            />
            <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textBlack text-sm tracking-wide text-textroyalBlue fw-bold">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Abe Garage</h3>
          </div>
          <p
            style={{ color: "#fff" }}
            className="text-sm md:text-base bg-[#0794C9] p-2 md:p-6 rounded-md  "
          >
            Abe garage management system designed to streamline operations and
            enhance efficiency, built using modern technologies such as React.js
            for the frontend and Node.js with MySQL for the backend
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>JWT</li>
            <li>MySQL</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/yohanis-tadese/abe-garage"
              target="_blank"
            >
              <TbBrandGithub />
            </a>

            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/yohanis-tadese/abe-garage"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>

      {/* *************** Project four ******************** */}
      {showMore && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="flex flex-col xl:flex-row-reverse gap-6 mt-20"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "20px",
                background: "#F5F8FD",
              }}
            >
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://yohanis-bank-site.netlify.app/"
                target="_blank"
              >
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src={Bankist}
                    alt="cyberImg"
                  />
                  <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
                <div>
                  <p className="font-titleFont text-textBlack text-sm tracking-wide text-textroyalBlue fw-bold">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold">Bankist Application</h3>
                </div>
                <p
                  style={{ color: "#fff" }}
                  className="text-sm md:text-base bg-[#0794C9] p-2 md:p-6 rounded-md xl:-mr-16  "
                >
                  Bankist is a fictional online bank. It is a project introduced
                  by Jonas Schmedtmann in order to practice DOM manipulation and
                  user interaction. Bankist has the option to log in to the
                  account and use different functionalities, almost like in an
                  actual bank
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textBlack duration-300"
                    href="https://github.com/yohanis-tadese/bankist-site"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>

                  <a
                    className="hover:text-textBlack duration-300"
                    href="https://yohanis-bank-site.netlify.app/"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col xl:flex-row gap-6 mt-20"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "20px",
                background: "#F5F8FD",
              }}
            >
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://github.com/yohanis-tadese/natours"
                target="_blank"
              >
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src={natours}
                    alt="natours-tour-image"
                  />
                  <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
                </div>
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <div>
                  <p className="font-titleFont text-textBlack text-sm tracking-wide text-textroyalBlue fw-bold">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold">
                    Natours tour and travel
                  </h3>
                </div>
                <p
                  style={{ color: "#fff" }}
                  className="bg-[#0794C9] text-sm md:text-base p-2 md:p-6 rounded-md   "
                >
                  An outstanding tour booking web application built with
                  Node.js, Express, and MongoDB, featuring a seamless payment
                  system through Stripe for enhanced user experience.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mailtrap</li>
                  <li>Stripe</li>
                  <li>JWT</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textBlack duration-300"
                    href="https://github.com/yohanis-tadese/natours"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="hover:text-textBlack duration-300"
                    href="https://github.com/yohanis-tadese/natours"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            style={{ background: "#0794C9", color: "#fff" }}
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textBlack text-[13px] border border-textBlack hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            style={{ background: "#0794C9", color: "#fff" }}
            className="w-36 h-12 rounded-md text-textBlack text-[13px] border border-textBlack hover:bg-hoverColor duration-300 "
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
