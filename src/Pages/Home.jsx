import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../Pages/images/slide_one.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  data-aos="fade-right"
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  We Care For Your Smile
                </h2>
                <p data-aos="fade-left">
                  We Believe Everyone should have easy access to great dental
                  clinic
                </p>
                <div className="social_links"></div>
              </div>
              <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01" data-aos="fade-right">
              <h2>Flexible Schedule</h2>
              <p>
                We work on holidays, besides working late on regular days. In
                case of emergencies we accept bookings.
              </p>

              <Link
                to={"/register"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"> Chat with Doctor</div>
              </Link>
            </div>
            <div className="basic_info" id="info_02" data-aos="fade-left">
              <h2>Best Price Guarantee</h2>
              <p>
                Our reasonable prices made thousands of people smile with a new,
                beautiful, irresistible smile, as never before!!
              </p>
              <Link
                to={"/dental-clinic/contact"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Read More</div>
              </Link>
            </div>
            <div className="basic_info" id="info_03" data-aos="fade-right">
              <h2>Opening Hours</h2>
              <p>
                Monday – Saturday : 10.00 am – 10.00 pm Sunday : 5.00 pm – 10.00
                pm
              </p>

              <Link
                to={"/dental-clinic/appointment"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
