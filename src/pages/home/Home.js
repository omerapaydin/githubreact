import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="roww mt-3">
      {users && users.map((user) => <ProductCard key={user.id} user={user} />)}
    </div>
  );
}

export default Home;
