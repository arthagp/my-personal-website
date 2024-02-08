import React from "react";
import classes from "./LoadCertificate.module.css";

const LoadCertificate = () => {
  return (
    <div className={classes.loadCertificateContainer}>
      <div className={classes.loadCertificateBox}></div>
      <div className={classes.contentCertificate}></div>
    </div>
  );
};

export default LoadCertificate;
