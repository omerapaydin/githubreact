import React from "react";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const url = "https://api.github.com/users?q=" + query;
  const { data: users, isLoading } = useFetch(url);

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {users && users.map((user) => <ProductCard key={user.id} user={user} />)}
    </div>
  );
}

export default Search;
