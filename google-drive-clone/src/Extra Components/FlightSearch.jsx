import React, { useState } from "react";

function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    alert(`Searching flights from ${from} to ${to}`);
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Flight Search
      </h2>

      <input
        type="text"
        placeholder="From"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        type="text"
        placeholder="To"
        className="border p-2 w-full mb-3"
        onChange={(e) => setTo(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search Flight
      </button>
    </div>
  );
}

export default FlightSearch;