import { useState, useEffect } from "react";

const useAbilityBox = (url) => {
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const englishEffect = data.effect_entries.find(
          (effect) => effect.language.name === "en"
        );
        if (englishEffect) {
          setAbility({ ...data, short_effect: englishEffect.short_effect });
        }
      });
  });

  return ability;
};
export default useAbilityBox;
