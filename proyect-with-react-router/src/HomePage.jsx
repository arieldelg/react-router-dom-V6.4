import { MovieCard } from "./MovieCard"
import { CategoryCard } from "./CategoryCard"
import { NavLink } from "react-router-dom"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const  HomePage = ({ dayTrendingMovie, genreList }) => {
    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 900
    }
    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 900
    }
    return (
        <>
            
                <div className="flex justify-between w-full py-4 items-center px-[55px]">
                    <h1 className="text-4xl font-bold">Tendencias</h1>
                    <NavLink to={'tendencias'} className={'bg-white px-2 py-1 rounded-md'}>
                        <button className="text-xl">Ver Mas</button>
                    </NavLink>
                </div>
                <div className="flex items-center h-[350px]">
                    <ChevronLeftIcon className="w-[55px] opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft}/>
                    <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth" id="slider">
                        {
                            dayTrendingMovie.map(element => {
                                return <MovieCard data={element} key={element.id}/>
                            })
                        }
                    </div>
                    <ChevronRightIcon className="w-[55px] opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight}/>
                </div>
            
            <div className="w-full pl-[55px]">
                <h1 className="text-4xl font-bold py-2">Generos</h1>
                
                <ul className='grid grid-cols-4 py-2'>
                    {
                        genreList.map(element => {
                            return <CategoryCard data={element} key={element.id}/>
                        })
                    }
                </ul>
                
            </div>
        </>
    )
}

export { HomePage }