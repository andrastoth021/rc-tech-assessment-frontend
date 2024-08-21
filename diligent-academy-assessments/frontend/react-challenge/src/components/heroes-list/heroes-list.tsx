import { HeroesListItem } from "../heroes-list-item/heroes-list-item";
import "./heroes-list.css";
import { useFetch } from "../../hooks/useFetch";

function HeroesList() {
  const { data, error, isLoading } = useFetch("heroes");

  if ( isLoading ) return <h2>Loading...</h2>;
  if ( error ) return <h2>Error: {error}</h2>;

  return (
      <>
        <h2>Heroes</h2>
        <div className="grid-container">
          {data && data.map((hero) => {
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
