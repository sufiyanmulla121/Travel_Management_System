import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <Spinner animation="border" />
    </div>
  );
}
export default Loader;
