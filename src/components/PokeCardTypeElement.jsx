import usePokeCardTypeElement from "../customHooks/usePokeCardTypeElement";

const PokeCardTypeElement = ({ type }) => {
  const image = usePokeCardTypeElement(type);
  return (
    <img
      className="w-[70px] h-[20px] animate-fade-right"
      src={image}
      alt="typeImage"
    />
  );
};
export default PokeCardTypeElement;
