import React from "react";
import classes from "./LoadProject.module.css";

const LoadProject: React.FC = () => {
  return (
    <div className={classes["load-poject-container"]}>
      <div className={classes["load-project-box"]}></div>
      <div className={classes["content-project"]}></div>
    </div>
  );
};

export default LoadProject;
