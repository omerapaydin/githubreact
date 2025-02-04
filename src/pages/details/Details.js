import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../../contexts/ThemeContext";

function Details() {
  const { id } = useParams();
  const url = "https://api.github.com/users/" + id;

  const { data: user, isLoading } = useFetch(url);
  const { color } = useContext(ThemeContext);

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
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
            <a href={user.html_url} className={`btn btn-${color} `}>
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
