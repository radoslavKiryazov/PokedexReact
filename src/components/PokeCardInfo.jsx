const PokeCardInfo = ({ id, name }) => {
  return (
    <div>
      <p className="font-extrabold text-2xl font-pokemonId animate-fade-right">
        #{id}
      </p>
      <h1 className="font-pokemonName text animate-fade-right">{name}</h1>
    </div>
  );
};
export default PokeCardInfo;
