import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Details() {
  const { id } = useParams();
  const url = "https://api.github.com/users/" + id;

  const { data: user } = useFetch(url);

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
            <a href={user.html_url} className="btn btn-outline-warning">
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
