import { useState, useEffect } from "react";
import { dynamiclyImportImage } from "../utills/helperFunctions";
const usePokeGridNavigationButton = (direction) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    dynamiclyImportImage(direction).then((image) => setImage(image));
  }, [direction]);

  return image;
};
export default usePokeGridNavigationButton;
