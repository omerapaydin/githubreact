import React, { useState } from "react"; // useState import edildi
import { useNavigate } from "react-router-dom";

function Search() {
  const [keyword, setKeyword] = useState(""); // 'keword' yerine 'keyword' düzeltildi
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${keyword}`);
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Anahtar Kelime"
          />
          <button className="btn btn-warning" type="submit">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
