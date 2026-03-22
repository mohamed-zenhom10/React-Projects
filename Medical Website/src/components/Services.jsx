import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoIosDocument } from "react-icons/io";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { AiFillMedicineBox } from "react-icons/ai";
import waves from "../../public/waves.png";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="main-title">
          <h1>
            To <span className="text-gradient">Services</span> we offer
          </h1>
          <p>
            In today's fast-paced world, your health deserves the utmost
            attention and convenience. That's why HealNet offers a suite of
            <br />
            integrated services designed to cater to your healthcare needs
            digitally:
          </p>
        </div>
        <div className="services-cards">
          <div className="card">
            <img src={waves} alt="" />
            <div className="icon">
              <BsCameraVideoFill />
            </div>
            <h4>Online Consultations</h4>
            <p>
              Consult with top doctors across various specialties via video or
              chat communication. It’s totally secure, private, and convenient. 
              Choose the best time for an in-person visit with our easy-to-use 
              scheduling system, or proceed with our online consultation.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <SlCalender />
            </div>
            <h4>Booking Appointments</h4>
            <p>
              Choose the best time for an in-person visit with our easy-to-use
              scheduling system, or proceed with our online consultation
              features.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <IoIosDocument />
            </div>
            <h4>Prescriptions</h4>
            <p>
              Receive and renew prescriptions digitally after your consultation
              with our specialists .
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <LiaNotesMedicalSolid />
            </div>
            <h4>Medical Notes</h4>
            <p>
              Obtain necessary medical notes for work or school with only a few
              clicks of hassle.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <AiFillMedicineBox />
            </div>
            <h4>Medicine Refills</h4>
            <p>
              Skip the pharmacy queues and save time + energy by ordering
              medicine refills online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
