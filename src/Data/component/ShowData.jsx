import React, { useEffect, useState } from "react";

function ShowData() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch("https://sudhanshu1919.github.io/Usersdata/Data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setShowData(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h6>Show Data</h6>
      {Array.isArray(showData) && showData.length > 0 ? (
        showData.map((val) => {
          return (
            <div class="card" key={val.id} style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{val.name}</h5>
                <p class="card-text">{val.username}</p>
                <p>{val.address.street}</p>
                <p>{val.address.suite}</p>
                <p>{val.address.city}</p>
                <p>{val.address.zipcode}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
}

export default ShowData;
