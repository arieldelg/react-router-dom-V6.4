import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'


const HomePage = ({ error, setNextPage, isLoading }) => {
    
    return (
        <>
        <NavBar setNextPage={setNextPage}/>
        {
            error && <p>{error}</p>
        }
        {
            isLoading && <p>Estamos cargando...</p>
        }
        {
            !error && !isLoading &&
                <main>
                    <Outlet/>
                </main>
        }
        </>
      )
}

export { HomePage }