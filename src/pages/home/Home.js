import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

function Home() {
  const { data: users } = useFetch("https://api.github.com/users");

  return (
    <div className="row mt-3">
      {users && users.map((user) => <ProductCard key={user.id} user={user} />)}
    </div>
  );
}

export default Home;
