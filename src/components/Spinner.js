import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="mt-2 d-flex flex-column align-items-center mb-3">
      <img src={loading} alt={loading} />
    </div>
  );
};

export default Spinner;
