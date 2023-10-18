import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
    <nav className= "bg-white border-b-2 border-black border-solid bg-poke-pattern">
         <div className="max-w flex flex-wrap items-center mx-auto p-3 space-x-5">
            <img className='w-10 h-10' src={logo} alt="logo"/>
        <ul class="font-medium text-xl flex flex-row space-x-1 p-4 md:p-0 mt-0 rounded-lg">
             <li>
              <NavLink to="/" className='block py-2 pl-3 pr-4 text-black'>Home</NavLink>   
             </li>
             <li>
              <NavLink to="about" className="block py-2 pl-3 pr-4 text-black">About</NavLink>
            </li>
        </ul>
            </div>
    </nav>
    )

    
}
export default NavBar;