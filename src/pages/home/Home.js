import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

function Home() {
  const { data: users, isLoading } = useFetch("https://api.github.com/users");

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {users && users.map((user) => <ProductCard key={user.id} user={user} />)}
    </div>
  );
}

export default Home;
