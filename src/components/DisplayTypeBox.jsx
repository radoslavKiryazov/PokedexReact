import { capitalizeFirstLetter } from '../utills/helperFunctions'
import { useEffect, useState } from 'react'
import { dynamiclyImportImage } from '../utills/helperFunctions'



const DisplayTypeBox = ({ type }) => {
    const [image, setImage] = useState(null);
    useEffect(() => {
        dynamiclyImportImage('big',type)
        .then((image) => setImage(image))
    }, [type]);

    return(
        <div className='flex flex-col font-pokemonName items-center text-xl '>
        <img className="w-[50px] h-[50px] animate-fade-right" src={image} alt="typeImage"/>
        <p>{capitalizeFirstLetter(type)}</p>
        </div>
    );

}
export default DisplayTypeBox;