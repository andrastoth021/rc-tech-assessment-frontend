interface props {
  id: number,
  name: string,
  isAvailable: boolean
}

export function HeroesListItem({ id, name, isAvailable }: props) {

  return (
    <div>
      {id}. {name} | {isAvailable ? "Available" : "NOT available"}
    </div>
  );
}
