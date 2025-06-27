import React, { useState, useEffect } from 'react'

const ApiFakeData = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch('https://api.github.com/users/octocat/repos');
      const data = await res.json();

      setRepos(data);
      setLoading(false);
    };

    fetchRepos();
  }, [])

  return (
    <div>
      <h2> Api fetching.. from github Repositories </h2>
      {loading ? <p>Loading... </p> : (
        <ul>
          {repos.map((item) => {
            return (
              <li key={item.id}> 
                <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ApiFakeData;