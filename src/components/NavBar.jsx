import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
    <nav className= "bg-red-400 border-b-2 border-black border-solid font-pokemonName">
    <div className="max-w flex flex-wrap items-center mx-auto p-3 space-x-5">
            <img className='w-10 h-10' src={logo} alt="logo"/>
    <ul className="font-medium text-3xl flex flex-row space-x-1 p-4 md:p-0 mt-0 rounded-lg">
            
        <li>
            <Link to="/" className='block py-2 pl-3 pr-4 text-black'>Home</Link>   
        </li>
        <li>
            <Link to="/about" className="block py-2 pl-3 pr-4 text-black">About</Link>
        </li>
    </ul>
            </div>
    </nav>
    )

    
}
export default NavBar;