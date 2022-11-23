import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">YouTube Word Distribution</h1>
        <p className="lead">
          Use this website to discover the word distribution of a video prior to watching it!
        </p>
        <hr className="my-4" />
        <center>
        <label for="YouTube URL: "> YouTube URL:</label>
        <input type="text" id="YouTube URL: " name="YouTube URL: " 
        size = "40" placeholder="https://youtu.be/dQw4w9WgXcQ"></input>
        <Link
          to="/recipes"
          className="btn btn-sm custom-button"
          role="button"
        >
          Submit
        </Link>
        </center>
      </div>
    </div>
  </div>
);
