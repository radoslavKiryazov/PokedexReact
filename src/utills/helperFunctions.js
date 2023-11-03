const opacity = "/80";
export const colors = {
  //this is so fucking bad
  default: `bg-black${opacity}`,
  bug: {
    single: `bg-bug${opacity}`,
    primary: `from-bug${opacity}`,
    secondary: `to-bug${opacity}`,
  },
  dark: {
    single: `bg-dark${opacity}`,
    primary: `from-dark${opacity}`,
    secondary: `to-dark${opacity}`,
  },
  dragon: {
    single: `bg-dragon${opacity}`,
    primary: `from-dragon${opacity}`,
    secondary: `to-dragon${opacity}`,
  },
  electric: {
    single: `bg-electric${opacity}`,
    primary: `from-electric${opacity}`,
    secondary: `to-electric${opacity}`,
  },
  fairy: {
    single: `bg-fairy${opacity}`,
    primary: `from-fairy${opacity}`,
    secondary: `to-fairy${opacity}`,
  },
  fire: {
    single: `bg-fire${opacity}`,
    primary: `from-fire${opacity}`,
    secondary: `to-fire${opacity}`,
  },
  fighting: {
    single: `bg-fighting${opacity}`,
    primary: `from-fighting${opacity}`,
    secondary: `to-fighting${opacity}`,
  },
  flying: {
    single: `bg-flying${opacity}`,
    primary: `from-flying${opacity}`,
    secondary: `to-flying${opacity}`,
  },
  ghost: {
    single: `bg-ghost${opacity}`,
    primary: `from-ghost${opacity}`,
    secondary: `to-ghost${opacity}`,
  },
  grass: {
    single: `bg-grass${opacity}`,
    primary: `from-grass${opacity}`,
    secondary: `to-grass${opacity}`,
  },
  ground: {
    single: `bg-ground${opacity}`,
    primary: `from-ground${opacity}`,
    secondary: `to-ground${opacity}`,
  },
  ice: {
    single: `bg-ice${opacity}`,
    primary: `from-ice${opacity}`,
    secondary: `to-ice${opacity}`,
  },
  normal: {
    single: `bg-normal${opacity}`,
    primary: `from-normal${opacity}`,
    secondary: `to-normal${opacity}`,
  },
  poison: {
    single: `bg-poison${opacity}`,
    primary: `from-poison${opacity}`,
    secondary: `to-poison${opacity}`,
  },
  psychic: {
    single: `bg-psychic${opacity}`,
    primary: `from-psychic${opacity}`,
    secondary: `to-psychic${opacity}`,
  },
  rock: {
    single: `bg-rock${opacity}`,
    primary: `from-rock${opacity}`,
    secondary: `to-rock${opacity}`,
  },
  steel: {
    single: `bg-steel${opacity}`,
    primary: `from-steel${opacity}`,
    secondary: `to-steel${opacity}`,
  },
  water: {
    single: `bg-water${opacity}`,
    primary: `from-water${opacity}`,
    secondary: `to-water${opacity}`,
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
