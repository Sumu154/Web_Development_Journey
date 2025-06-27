import React, { useEffect, useState } from 'react';

const ActualRealData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Real Data from API</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {data.slice(0, 5).map((post) => {
            return (
              <li key={post.id}>{post.title}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ActualRealData;

