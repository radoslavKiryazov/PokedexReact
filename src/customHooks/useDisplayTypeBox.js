import { useEffect, useState } from "react";
import { dynamiclyImportImage } from "../utills/helperFunctions";

const useDisplayTypeBox = (type) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    dynamiclyImportImage("big", type).then((image) => setImage(image));
  }, [type]);
  return image;
};
export default useDisplayTypeBox;