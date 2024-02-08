import React from "react";
import classes from "./LoadProject.module.css";

const LoadProject = () => {
  return (
    <div className={classes.loadProjectContainer}>
      <div className={classes.loadProjectBox}></div>
      <div className={classes.contentProject}></div>
    </div>
  );
};

export default LoadProject;
