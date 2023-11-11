import { useEffect, useState } from "react";
import { dynamiclyImportTypeImage } from "../utills/helperFunctions";

const useDisplayTypeElement = (type) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    dynamiclyImportTypeImage("big", type).then((image) => setImage(image));
  }, [type]);
  return image;
};
export default useDisplayTypeElement;
