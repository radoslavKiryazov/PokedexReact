import PokeCardTypeElement from "./PokeCardTypeElement";
const PokeCardTypes = ({ types }) => {
  return (
    <div className="flex flex-row space-x-2">
      {types.map((type, index) => (
        <PokeCardTypeElement type={type.type.name} key={index} />
      ))}
    </div>
  );
};
export default PokeCardTypes;
