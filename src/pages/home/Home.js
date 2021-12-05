import ErrorMessage from "../../components/ErrorMessage";
import Recipes from "../../components/Recipes";
import Spinner from "../../components/Spinner";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {isPending && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {data && <Recipes data={data} />}
    </div>
  );
}
