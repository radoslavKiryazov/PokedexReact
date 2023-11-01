import bug from '../assets/typeIcons/small/bug.png'
import dark from '../assets/typeIcons/small/dark.png'
import dragon from '../assets/typeIcons/small/dragon.png'
import electric from '../assets/typeIcons/small/electric.png'
import fairy from '../assets/typeIcons/small/fairy.png'
import fighting from '../assets/typeIcons/small/fighting.png'
import fire from '../assets/typeIcons/small/fire.png'
import flying from '../assets/typeIcons/small/flying.png'
import ghost from '../assets/typeIcons/small/ghost.png'
import grass from '../assets/typeIcons/small/grass.png'
import ground from '../assets/typeIcons/small/ground.png'
import ice from '../assets/typeIcons/small/ice.png'
import normal from '../assets/typeIcons/small/normal.png'
import poison from '../assets/typeIcons/small/poison.png'
import psychic from '../assets/typeIcons/small/psychic.png'
import rock from '../assets/typeIcons/small/rock.png'
import steel from '../assets/typeIcons/small/steel.png'
import water from '../assets/typeIcons/small/water.png'


const CardTypeBox = ({image}) => {
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
        <img className="w-[70px] h-[20px] animate-fade-right" src={map[image]} alt="typeImage"/>
    );

}
export default CardTypeBox;