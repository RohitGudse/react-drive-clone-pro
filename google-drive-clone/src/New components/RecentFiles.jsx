import React from "react";

const RecentFiles = ({ files }) => {
  return (
    <div>
      <h2>Recent Files</h2>

      {files.map((file, index) => (
        <div key={index}>
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentFiles;