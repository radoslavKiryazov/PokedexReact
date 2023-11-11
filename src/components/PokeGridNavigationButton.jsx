import usePokeGridNavigationButton from "../customHooks/usePokeGridNavigationButton";
const PokeGridNavigationButton = ({ onClick, direction }) => {
  const image = usePokeGridNavigationButton(direction);
  return (
    <button
      className="border-2 border-black rounded-full hover:bg-white transition-colors"
      onClick={onClick}
    >
      <img
        className="w-7 h-7 hover:w-10 hover:h-10 transition-all"
        src={image}
        alt="forwardbutton"
      />
    </button>
  );
};
export default PokeGridNavigationButton;
