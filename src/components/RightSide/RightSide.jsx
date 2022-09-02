import React from "react";
import Analytics from "../Analytics/Analytics";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Recent Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Analytics</h3>
        <Analytics />
      </div>
    </div>
  );
};

export default RightSide;
