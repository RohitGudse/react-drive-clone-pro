import React, { useState } from "react";

const UploadProgress = ({ progress }) => {
  const [showDetails, setShowDetails] = useState(true);

  const uploadPercentage = Math.min(100, Math.max(0, progress));

  const getUploadStatus = () => {
    if (uploadPercentage === 100) {
      return "Upload Completed Successfully!";
    } else if (uploadPercentage > 0) {
      return "Uploading your file...";
    }
    return "Waiting to upload...";
  };

  const getProgressColor = () => {
    if (uploadPercentage === 100) return "#16a34a";
    if (uploadPercentage >= 50) return "#2563eb";
    return "#f59e0b";
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h2>File Upload Progress</h2>

        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {showDetails && (
        <div className="upload-details">
          <p>{getUploadStatus()}</p>

          <div className="progress-wrapper">
            <div
              className="progress-fill"
              style={{
                width: `${uploadPercentage}%`,
                backgroundColor: getProgressColor(),
              }}
            ></div>
          </div>

          <div className="progress-info">
            <span>Uploading</span>
            <strong>{uploadPercentage}%</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadProgress;