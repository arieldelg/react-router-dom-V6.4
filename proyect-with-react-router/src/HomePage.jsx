import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'


const HomePage = () => {
    
    return (
        <>
        <NavBar/>
        <main>
            {/* <div>
                Home stuff
            </div> */}
            <Outlet/>
        </main>
        </>
      )
}

export { HomePage }