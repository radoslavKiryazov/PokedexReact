import { useEffect, useState } from 'react'
import { dynamiclyImportImage } from '../utills/helperFunctions'


const CardTypeBox = ({type}) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        dynamiclyImportImage('small',type)
        .then((image) => setImage(image))
    }, [type]);

    return(
        <img className="w-[70px] h-[20px] animate-fade-right" src={image} alt="typeImage"/>
    );

}
export default CardTypeBox;