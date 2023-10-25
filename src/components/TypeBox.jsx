import bug from '../assets/typeIcons/bug.png'
import dark from '../assets/typeIcons/dark.png'
import dragon from '../assets/typeIcons/dragon.png'
import electric from '../assets/typeIcons/electric.png'
import fairy from '../assets/typeIcons/fairy.png'
import fighting from '../assets/typeIcons/fighting.png'
import fire from '../assets/typeIcons/fire.png'
import flying from '../assets/typeIcons/flying.png'
import ghost from '../assets/typeIcons/ghost.png'
import grass from '../assets/typeIcons/grass.png'
import ground from '../assets/typeIcons/ground.png'
import ice from '../assets/typeIcons/ice.png'
import normal from '../assets/typeIcons/normal.png'
import poison from '../assets/typeIcons/poison.png'
import psychic from '../assets/typeIcons/psychic.png'
import rock from '../assets/typeIcons/rock.png'
import steel from '../assets/typeIcons/steel.png'
import water from '../assets/typeIcons/water.png'


const TypeBox = ({image, key}) => {
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
        <img className="w-[70px] h-[20px]" src={map[image]} alt={key}/>
    );

}
export default TypeBox;