import React from "react";

function StarredFiles({ files = []}){
  const starredFiles = files.filter(({ starred}) => starred === true);

  return(
    <section className = "starred-files">
        <h2> starred files </h2>

        {starredFiles.length > 0 ?(
          <ul>
            {starredFiles.map((file, index) => (
              <li key={index}>
                ⭐ {file.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No starred files.</p>
        )}
      </section>
    )
  }