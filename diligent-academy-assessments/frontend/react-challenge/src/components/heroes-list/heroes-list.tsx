import {
  useEffect,
  useState
} from "react";
import { callApi } from "../../call-api";
import { HeroesListItem } from "../heroes-list-item/heroes-list-item";
import "./heroes-list.css";

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
        <div className="grid-container">
          {heroes && heroes.map((hero: Hero) => {
                return (
                  <div className="grid-item" key={hero.id}>
                    <HeroesListItem key={hero.id} id={hero.id} name={hero.name} isAvailable={hero.available}/>
                  </div>
                )
              }
          )}
        </div>
      </>
  );
}

export default HeroesList;
