import React, { useEffect, useState } from "react";
import "./css/Projects.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import axios from "axios";
import Laoding from "../Extra/Laoding";


function Projects() {
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    await axios
      .get("https://api.github.com/users/ayaan-qadri/repos?page=1&per_page=100")
      .then((data) => {
        setData(data.data);
        console.log(data)
        return data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data ? (<div className="main">
      {data &&
        data.map((repo) => (
          <div className="card">
            {repo.fork && <div className="forkedLable">Forked</div>}
            {console.log(repo)}
            <div className="card-content">
              <h2>{repo.name}</h2>
              <div className="details">
                <p>{repo.description}</p>
                <Link
                  to={repo.html_url}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find out more
                  <ArrowRightAltIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>) : <Laoding />
  );
}

export default Projects;
