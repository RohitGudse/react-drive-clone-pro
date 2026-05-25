import React from "react";

const UploadProgress = ({ progress }) => {
  return (
    <div>
      <p>Uploading: {progress}%</p>
      <progress value={progress} max="100"></progress>
    </div>
  );
};

export default UploadProgress;