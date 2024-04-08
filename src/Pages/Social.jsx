import React from "react";
import "./css/Socials.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="social">
      <div className="button-container">
        <Link
          to={"https://github.com/ayaan-qadri"}
          className="glass-btn black-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="github" style={{ fontSize: 35 }} />
        </Link>

        <Link
          to={"https://x.com/@0ayaanqadri"}
          className="glass-btn black-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="x" style={{ fontSize: 35 }} />
        </Link>

        <Link
          to={"https://www.linkedin.com/in/ayaan-qadri-b74022214"}
          className="glass-btn blue-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="linkedin" style={{ fontSize: 50 }} />
        </Link>

        <Link
          to={"https://youtube.com/@AyaanTheTechStorage"}
          className="glass-btn red-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="youtube" style={{ fontSize: 50 }} />
        </Link>
      </div>
    </div>
  );
}

export default Social;
