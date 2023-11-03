import { capitalizeFirstLetter } from '../utills/helperFunctions'
import useDisplayTypeBox from '../customHooks/useDisplayTypeBox'



const DisplayTypeBox = ({ type }) => {
    const image = useDisplayTypeBox(type);
    return(
        <div className='flex flex-col font-pokemonName items-center text-xl '>
        <img className="w-[50px] h-[50px] animate-fade-right" src={image} alt="typeImage"/>
        <p>{capitalizeFirstLetter(type)}</p>
        </div>
    );

}
export default DisplayTypeBox;