import { useState, useEffect } from "react";
import { dynamiclyImportTypeImage } from "../utills/helperFunctions";

const usePokeCardTypeElement = (type) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    dynamiclyImportTypeImage("small", type).then((image) => setImage(image));
  }, [type]);

  return image;
};
export default usePokeCardTypeElement;
