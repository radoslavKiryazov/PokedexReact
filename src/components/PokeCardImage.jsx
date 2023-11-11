import pokeball from "../assets/pokeball.png";

const PokeCardImage = ({ image, speed }) => {
  return (
    <div className="flex items-center pb-5">
      <img
        src={pokeball}
        alt="pokeball"
        className={`relative w-[150px] h-[100px] opacity-40 animate-spin ${speed}`}
      />
      <img
        className="w-[100px] h-[100px] absolute animate-fade-down"
        src={image}
        alt="PokemonImage"
      />
    </div>
  );
};
export default PokeCardImage;
