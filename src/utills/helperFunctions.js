const opacity = "/80";
export const colors = {
  //this is so fucking bad
  default: `bg-black${opacity}`,
  bug: {
    single: `bg-bug/80`,
    primary: `from-bug/80`,
    secondary: `to-bug/80`,
  },
  dark: {
    single: `bg-dark/80`,
    primary: `from-dark/80`,
    secondary: `to-dark/80`,
  },
  dragon: {
    single: `bg-dragon/80`,
    primary: `from-dragon/80`,
    secondary: `to-dragon/80`,
  },
  electric: {
    single: `bg-electric/80`,
    primary: `from-electric/80`,
    secondary: `to-electric/80`,
  },
  fairy: {
    single: `bg-fairy/80`,
    primary: `from-fairy/80`,
    secondary: `to-fairy/80`,
  },
  fire: {
    single: `bg-fire/80`,
    primary: `from-fire/80`,
    secondary: `to-fire/80`,
  },
  fighting: {
    single: `bg-fighting/80`,
    primary: `from-fighting/80`,
    secondary: `to-fighting/80`,
  },
  flying: {
    single: `bg-flying/80`,
    primary: `from-flying/80`,
    secondary: `to-flying/80`,
  },
  ghost: {
    single: `bg-ghost/80`,
    primary: `from-ghost/80`,
    secondary: `to-ghost/80`,
  },
  grass: {
    single: `bg-grass/80`,
    primary: `from-grass/80`,
    secondary: `to-grass/80`,
  },
  ground: {
    single: `bg-ground/80`,
    primary: `from-ground/80`,
    secondary: `to-ground/80`,
  },
  ice: {
    single: `bg-ice/80`,
    primary: `from-ice/80`,
    secondary: `to-ice/80`,
  },
  normal: {
    single: `bg-normal/80`,
    primary: `from-normal/80`,
    secondary: `to-normal/80`,
  },
  poison: {
    single: `bg-poison/80`,
    primary: `from-poison/80`,
    secondary: `to-poison/80`,
  },
  psychic: {
    single: `bg-psychic/80`,
    primary: `from-psychic/80`,
    secondary: `to-psychic/80`,
  },
  rock: {
    single: `bg-rock/80`,
    primary: `from-rock/80`,
    secondary: `to-rock/80`,
  },
  steel: {
    single: `bg-steel/80`,
    primary: `from-steel/80`,
    secondary: `to-steel/80`,
  },
  water: {
    single: `bg-water/80`,
    primary: `from-water/80`,
    secondary: `to-water/80`,
  },
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const replaceSpeciesWithPokemon = (link) => {
  if (link === null) {
    return null;
  }
  const updatedURL = link.replace(/\/pokemon-species\//, "/pokemon/");
  return updatedURL;
};

export const buildDynamicColor = (types) => {
  if (types.length > 1) {
    console.log(
      `bg-gradient-to-r ${colors[types[0].type.name].primary} ${
        colors[types[1].type.name].secondary
      }`
    );
    return `bg-gradient-to-r ${colors[types[0].type.name].primary} ${
      colors[types[1].type.name].secondary
    }`;
  } else {
    return colors[types[0].type.name].single;
  }
};

export const statPercent = (stat) => {
  const value = `w-[${stat}%]`;
  return value;
};

export const dynamiclyImportImage = async (size, image) => {
  return (await import(`../assets/typeIcons/${size}/${image}.png`)).default;
};
