export const colors = {
  //this is so fucking bad
  default: `bg-black/40`,
  bug: {
    single: `bg-bug/40`,
    primary: `from-bug/40`,
    secondary: `to-bug/40`,
  },
  dark: {
    single: `bg-dark/40`,
    primary: `from-dark/40`,
    secondary: `to-dark/40`,
  },
  dragon: {
    single: `bg-dragon/40`,
    primary: `from-dragon/40`,
    secondary: `to-dragon/40`,
  },
  electric: {
    single: `bg-electric/40`,
    primary: `from-electric/40`,
    secondary: `to-electric/40`,
  },
  fairy: {
    single: `bg-fairy/40`,
    primary: `from-fairy/40`,
    secondary: `to-fairy/40`,
  },
  fire: {
    single: `bg-fire/40`,
    primary: `from-fire/40`,
    secondary: `to-fire/40`,
  },
  fighting: {
    single: `bg-fighting/40`,
    primary: `from-fighting/40`,
    secondary: `to-fighting/40`,
  },
  flying: {
    single: `bg-flying/40`,
    primary: `from-flying/40`,
    secondary: `to-flying/40`,
  },
  ghost: {
    single: `bg-ghost/40`,
    primary: `from-ghost/40`,
    secondary: `to-ghost/40`,
  },
  grass: {
    single: `bg-grass/40`,
    primary: `from-grass/40`,
    secondary: `to-grass/40`,
  },
  ground: {
    single: `bg-ground/40`,
    primary: `from-ground/40`,
    secondary: `to-ground/40`,
  },
  ice: {
    single: `bg-ice/40`,
    primary: `from-ice/40`,
    secondary: `to-ice/40`,
  },
  normal: {
    single: `bg-normal/40`,
    primary: `from-normal/40`,
    secondary: `to-normal/40`,
  },
  poison: {
    single: `bg-poison/40`,
    primary: `from-poison/40`,
    secondary: `to-poison/40`,
  },
  psychic: {
    single: `bg-psychic/40`,
    primary: `from-psychic/40`,
    secondary: `to-psychic/40`,
  },
  rock: {
    single: `bg-rock/40`,
    primary: `from-rock/40`,
    secondary: `to-rock/40`,
  },
  steel: {
    single: `bg-steel/40`,
    primary: `from-steel/40`,
    secondary: `to-steel/40`,
  },
  water: {
    single: `bg-water/40`,
    primary: `from-water/40`,
    secondary: `to-water/40`,
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
