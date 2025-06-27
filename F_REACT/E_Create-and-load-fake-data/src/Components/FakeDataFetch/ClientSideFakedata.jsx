// when the actual API is unavailable tokhn emn fake data banaye system test kora jay

import React, { useEffect, useState } from "react";

const ClientSideFakeData = () => {

  // fake data array of object  
  // const data = [
  //   { id: 1, name: 'Sample Item 1', description: 'This is a fake item' },
  //   { id: 2, name: 'Sample Item 2', description: 'Another fake item' },
  // ]

  // ei array te public folder eo save kore rakhte pari .json folder banaye
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/Json/ClientFakeData.json'); // Path to the JSON file in the public folder
      const data = await res.json();
      setData(data);

    }
    fetchData();
    
  }, []);

  return (
    <div>
      <h2> Client Side Fake Data </h2>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}> <strong> {item.name} </strong>: {item.description} </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ClientSideFakeData;