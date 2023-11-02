import normal from '../assets/typeIcons/big/normal.png'
import bug from '../assets/typeIcons/big/bug.png'
import dark from '../assets/typeIcons/big/dark.png'
import dragon from '../assets/typeIcons/big/dragon.png'
import electric from '../assets/typeIcons/big/electric.png'
import fairy from '../assets/typeIcons/big/fairy.png'
import fighting from '../assets/typeIcons/big/fighting.png'
import fire from '../assets/typeIcons/big/fire.png'
import flying from '../assets/typeIcons/big/flying.png'
import ghost from '../assets/typeIcons/big/ghost.png'
import grass from '../assets/typeIcons/big/grass.png'
import ground from '../assets/typeIcons/big/ground.png'
import ice from '../assets/typeIcons/big/ice.png'
import poison from '../assets/typeIcons/big/poison.png'
import psychic from '../assets/typeIcons/big/psychic.png'
import rock from '../assets/typeIcons/big/rock.png'
import steel from '../assets/typeIcons/big/steel.png'
import water from '../assets/typeIcons/big/water.png'
import { capitalizeFirstLetter } from '../utills/helperFunctions'
const DisplayTypeBox = ({ type }) => {
    const map = {
        'bug': bug,
        'dark': dark,
        'dragon': dragon,
        'electric': electric,
        'fairy': fairy,
        'fighting': fighting,
        'fire': fire,
        'flying': flying,
        'ghost': ghost,
        'grass': grass,
        'ground': ground,
        'ice': ice,
        'normal': normal,
        'poison': poison,
        'psychic': psychic,
        'rock': rock,
        'steel': steel,
        'water': water,
    }
    return(
        <div className='flex flex-col font-pokemonName items-center text-xl '>
        <img className="w-[50px] h-[50px] animate-fade-right" src={map[type]} alt="typeImage"/>
        <p>{capitalizeFirstLetter(type)}</p>
        </div>
    );

}
export default DisplayTypeBox;