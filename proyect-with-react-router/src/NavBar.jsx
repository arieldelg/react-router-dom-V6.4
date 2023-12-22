import { FilmIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'

const NavBar = ({ setNextPage }) => {
    return (
        <nav 
        className='flex w-screen h-10 bg-white justify-between px-2 items-center min-w-min'
        >
            <NavLink to={'/'} onClick={() => setNextPage(1)}>
                <FilmIcon className='w-10 h-10'/>
            </NavLink>
            <input 
            type="text"
            autoFocus
            placeholder='Search Here'
            className='border border-black w-4/5 min-w-max px-2 rounded-md h-8'
            />
            <div className='w-40 flex justify-evenly'>
              <NavLink to={'about'}>About</NavLink>
              <NavLink to={'profile'}>Profile</NavLink>
            </div>
        </nav>
    )
}

export { NavBar }