import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // Doğru kullanım
  const url = "https://api.github.com/users/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error)); // Hata durumları için
  }, [url]);

  return (
    <div className="row mt-3">
      {user ? (
        <>
          <div className="col-4">
            <img
              className="img-fluid rounded-start avatar"
              src={user.avatar_url}
              alt={user.login}
            />
          </div>
          <div className="col-8">
            <h2 className="card-title">ID: {user.id}</h2>
            <h3 className="card-title">Login: {user.login}</h3>
          </div>
          <div className="col-12 mt-3">
            <a href={user.html_url} className="btn btn-outline-primary">
              GitHub Profile
            </a>
          </div>
        </>
      ) : (
        <p>Kullanıcı bilgileri yükleniyor...</p>
      )}
    </div>
  );
}

export default Details;
