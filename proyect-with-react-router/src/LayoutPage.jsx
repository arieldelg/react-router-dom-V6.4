import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { HomePageLS } from './HomePageLS'

const LayoutPage = ({ error, setNextPage, isLoading, search, setSearch, requestToken }) => {
    return (
        <>
        <NavBar setNextPage={setNextPage} search={search} setSearch={setSearch} requestToken={requestToken}/>   
        <main className='w-screen flex justify-center flex-col max-w-6xl m-auto items-center altura'>
            <Outlet/>
        </main>
        </>
      )
}

export { LayoutPage }