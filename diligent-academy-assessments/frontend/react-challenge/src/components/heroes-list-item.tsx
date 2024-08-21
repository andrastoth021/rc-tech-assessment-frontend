import { useState } from "react";
import "./heroes-list-item.css";

interface props {
  id: number,
  name: string,
  isAvailable: boolean
}

export function HeroesListItem({ id, name, isAvailable }: props) {
  const [available, setAvailable] = useState<boolean>(isAvailable);

  return (
    <p className={"hero-item"} onClick={() => setAvailable(!available)}>
      {id}. {name} | {available ? "Available" : "NOT available"}
    </p>
  );
}
