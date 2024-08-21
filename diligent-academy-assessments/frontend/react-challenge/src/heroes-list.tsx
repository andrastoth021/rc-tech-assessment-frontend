import {
  useEffect,
  useState
} from "react";
import { callApi } from "./call-api";
import { HeroesListItem } from "./heroes-list-item";

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
          <HeroesListItem key={hero.id} id={hero.id} name={hero.name} isAvailable={hero.available} />
        )
      }
      )}
    </>
  );
}

export default HeroesList;
