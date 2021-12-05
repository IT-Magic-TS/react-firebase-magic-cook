import "./Recipe.css";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Spinner";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data, isPending, error } = useFetch(url);
  const { mode } = useTheme();
  return (
    <div
      className="w3-content recipe"
      style={{ color: mode == "dark" ? "white" : "black" }}
    >
      {isPending && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {data && (
        <>
          <h2 className="w3-center">{data.title}</h2>
          <p className="w3-center">Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
