import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function ProductCard({ user }) {
  const { color } = useContext(ThemeContext);

  return (
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
            <h2 className="card-title">{user.id}</h2>
            <h3 className="card-title">{user.login}</h3>
            <Link
              to={`/details/${user.id}`}
              className={`btn btn-${color} me-2`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
