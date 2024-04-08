import React from "react";
import "./css/Projects.css"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="main">
      <div class="card">
        <img
          src="https://raw.githubusercontent.com/PentW0lf/OnlineCarBooking/main/Readme-images/landing_page.png"
          alt=""
        />
        <div class="card-content">
          <h2>Online Car Booking</h2>
          <div className="details">
            <p>
              I have created a project in BCA sem-5 on Online car booking it was
              fully devloped by myself using pure HTML, CSS and PHP,JavaScript.
            </p>
            <Link
              to="https://github.com/ayaan-qadri/OnlineCarBooking"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find out more
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* <div class="card">
        <img
          src="https://raw.githubusercontent.com/PentW0lf/OnlineCarBooking/main/Readme-images/landing_page.png"
          alt=""
        />
        <div class="card-content">
          <h2>Online Car Booking</h2>
          <div className="details">
            <p>
              I have created a project in BCA sem-5 on Online car booking it was
              fully devloped by myself using pure HTML, CSS and PHP,JavaScript.
            </p>
            <a href="#" class="button">
              Find out more
              <ArrowRightAltIcon />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
