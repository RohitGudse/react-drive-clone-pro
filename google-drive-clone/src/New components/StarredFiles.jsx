import React from "react";

const StarredFiles = ({ files }) => {
  const starred = files.filter(file => file.starred);

  return (
    <div>
      <h2>Starred Files</h2>

      {starred.map((file, index) => (
        <div key={index}>
          ⭐ {file.name}
        </div>
      ))}
    </div>
  );
};

export default StarredFiles;