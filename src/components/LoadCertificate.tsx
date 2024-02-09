import React from "react";
import classes from "./LoadCertificate.module.css";

const LoadCertificate: React.FC = () => {
  return (
    <div className={classes["load-certificate-container"]}>
      <div className={classes["load-certificate-box"]}></div>
      <div className={classes["content-certificate"]}></div>
    </div>
  );
};

export default LoadCertificate;
