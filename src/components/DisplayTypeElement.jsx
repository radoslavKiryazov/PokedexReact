import { capitalizeFirstLetter } from "../utills/helperFunctions";
import useDisplayTypeElement from "../customHooks/useDisplayTypeElement";

const DisplayTypeElement = ({ type }) => {
  const image = useDisplayTypeElement(type);
  return (
    <div className="flex flex-col font-pokemonName items-center text-xl animate-fade-up ">
      <img className="w-[50px] h-[50px]" src={image} alt="typeImage" />
      <p>{capitalizeFirstLetter(type)}</p>
    </div>
  );
};
export default DisplayTypeElement;
