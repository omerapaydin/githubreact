import React, { useState, useContext } from "react"; // useContext eklendi
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext"; // ThemeContext import edildi

function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { btnColor } = useContext(ThemeContext); // useContext kullanımı düzeltildi

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
          <button className={`btn btn-${btnColor} me-2`} type="submit">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
