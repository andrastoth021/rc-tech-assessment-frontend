import {
  useEffect,
  useState
} from "react";
import { callApi } from "./call-api";

interface Hero {
  id: number,
  name: string,
  available: boolean
}

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    callApi("heroes")
      .then(data => {
        // @ts-ignore
        setHeroes(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      })

  }, []);

  if ( isLoading ) return <h2>Loading...</h2>;
  if ( error ) return <h2>Error: {error}</h2>;

  return (
    <>
      <h2>Heroes</h2>
      { heroes && heroes.map((hero: Hero) => {
        return (
          <div key={hero.id}>{hero.id}. {hero.name}: {hero.available ? "Available" : "NOT available"}</div>
        )
      }
      )}
    </>
  );
}

export default HeroesList;
