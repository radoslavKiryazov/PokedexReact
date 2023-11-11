import AboutPageSidePanel from "../components/AboutPageSidePanel";
import AboutPageMainPanel from "../components/AboutPageMainPanel";
const About = () => {
  return (
    <div className="flex flex-row w-[1200px] h-[550px] p-5 space-x-5 font-pokemonName">
      <AboutPageSidePanel
        header={"Pokedex In The Games"}
        content={
          "The Pokédex, an electronic encyclopedia in Pokémon games, records captured Pokémon. It's a plot device in the anime, with each game generation introducing advanced features. The design reflects the respective handheld console. Professor Oak invented it, and entries were later written by Professor Westwood. In Pokémon games, it's a gift from professors."
        }
      />

      <AboutPageMainPanel />
      <AboutPageSidePanel
        header={"Pokedex In The Anime"}
        content={
          "In the anime, the Pokédex diverges from games, acting as a portable reference tool for Pokémon species and trainer tools like the Poké Flute. It serves as ID for Pokémon League competitions, with the Sinnoh version sporting a scanner demonstrating a Pokémon's moves, as seen with Paul."
        }
      />
    </div>
  );
};
export default About;
