import React, { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="roww mt-3">
      {users &&
        users.map((user) => (
          <div className="card mb-3" key={user.id}>
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  className="img-fluid rounded-start avatar"
                  src={user.avatar_url}
                  alt={user.login}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h3 className="card-title">{user.login}</h3>
                  <a href={user.html_url} className="btn btn-primary me-2">
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
