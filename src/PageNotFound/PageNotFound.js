import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center">
      <div className="text-danger fs-1 fw-bold mt-5">
        No page found
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
