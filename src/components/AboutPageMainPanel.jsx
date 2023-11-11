import pokedex1 from "../assets/pokedex1.png";
import pokedex2 from "../assets/pokedex2.png";
import pokedex3 from "../assets/pokedex3.png";

const AboutPageMainPanel = () => {
  return (
    <div className="flex flex-col bg-gray-200/20 rounded-3xl shadow-lg w-[450px] h-[500px] p-5 justify-center items-center animate-fade-up">
      <div className="flex flex-row w-max space-x-3 mb-10">
        <img
          className="w-[100px] h-[100px] animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-fill-both"
          src={pokedex1}
          alt="Pokedex1"
        />
        <img
          className="w-[150px] h-[100px] animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-fill-both"
          src={pokedex2}
          alt="Pokedex2"
        />
        <img
          className="w-[120px] h-[100px] animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-fill-both"
          src={pokedex3}
          alt="Pokedex3"
        />
      </div>

      <h1 className="text-3xl"> The Pokédex can... </h1>
      <ul className="list-disc text-xl">
        <li className="bullet-point">Identify Pokémon</li>
        <li>Scan Poké Balls</li>
        <li>Identify battle moves</li>
        <li>Show where to capture Pokémon</li>
      </ul>
    </div>
  );
};
export default AboutPageMainPanel;
