import React from "react";
import doctor_1 from "../../public/meet-1.png";
import doctor_2 from "../../public/meet-2.png";
import { FaPhone } from "react-icons/fa6";
import dots from "../../public/dots.png";

const FindDoctors = () => {
  return (
    <div className="find-doctor">
      <div className="container">
        <div className="main-title">
          <h1>
            <span className="text-gradient">Masters of Medicine:</span>
            <br />
            Meet our team of specialists
          </h1>
          <p>
            Our team of specialists is at the forefront of medical innovation.
            Each specialist brings a unique <br />
            blend of expertise, empathy, and experience to ensure that your
            health is in the best hands:
          </p>
        </div>
        <div className="doctors">
          <div className="doctor-card">
            <div className="img">
              <img src={doctor_1} alt="" />
            </div>
            <div className="text">
              <h3>Dr. Sarah Johnson (Cardiologist)</h3>
              <p>
                Heart health is Dr. Wong’s passion, and her approach to
                cardiology integrates cutting-edge technology with compassionate
                care. She’s a respected voice in the prevention of heart disease
                and a trusted partner to her patients on their journey to
                wellness.
              </p>
              <button>
                <span>Book appointment</span>
                <FaPhone />
              </button>
            </div>
            <img className="dots" src={dots} alt="" />
          </div>
          <div className="doctor-card">
            <div className="img">
              <img src={doctor_2} alt="" />
            </div>
            <div className="text">
              <h3>Dr. Mark Lee (Dermatologist)</h3>
              <p>
                Dr. Lee is a visionary in dermatology, advancing treatments for
                skin health with a gentle, holistic approach. His dedication to
                clinical excellence and patient education has made him a leader
                in dermatological care. He’s known for his precision and
                commitment to patient-centered care.
              </p>
              <button>
                <span>Book appointment</span>
                <FaPhone />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;
