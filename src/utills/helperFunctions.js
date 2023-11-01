export const pokemonMap = new Map();

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const colorVariantConverter = (type) => {
  switch (type) {
    default:
      return "black";

    case "bug":
      return "bg-bug/80";
    case "dark":
      return "bg-dark/80";
    case "dragon":
      return "bg-dragon/80";
    case "electric":
      return "bg-electric/80";
    case "fairy":
      return "bg-fairy/80";
    case "fire":
      return "bg-fire/80";
    case "fighting":
      return "bg-fighting/80";
    case "flying":
      return "bg-flying/80";
    case "ghost":
      return "bg-ghost/80";
    case "grass":
      return "bg-grass/80";
    case "ground":
      return "bg-ground/80";
    case "ice":
      return "bg-ice/80";
    case "normal":
      return "bg-normal/80";
    case "poison":
      return "bg-poison/80";
    case "psychic":
      return "bg-psychic/80";
    case "rock":
      return "bg-rock/80";
    case "steel":
      return "bg-steel/80";
    case "water":
      return "bg-water/80";
  }
};

export const statPercent = (stat) => {
  const value = `w-[${stat}%]`;
  return value;
};
