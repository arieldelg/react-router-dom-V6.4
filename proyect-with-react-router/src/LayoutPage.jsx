import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'


const LayoutPage = ({ error, setNextPage, isLoading, search, setSearch }) => {
    
    return (
        <>
        <NavBar setNextPage={setNextPage} search={search} setSearch={setSearch}/>
        {
            error && <p>{error}</p>
        }
        {
            isLoading && <p>Estamos cargando...</p>
        }
        {
            !error && !isLoading &&
                <main className='w-screen flex justify-center flex-col max-w-6xl m-auto items-center'>
                    <Outlet/>
                </main>
        }
        </>
      )
}

export { LayoutPage }