import { MovieCard } from "./MovieCard"
import { CategoryCard } from "./CategoryCard"
import { NavLink } from "react-router-dom"

const  HomeData = ({ dayTrendingMovie, genreList }) => {

    return (
        <div className="w-screen">
            <div>
                <div>
                    <h1>Tendencias</h1>
                    <NavLink to={'tendencias'}>
                        <button>Ver Mas</button>
                    </NavLink>
                </div>
                <div className="w-full flex">
                    {
                        dayTrendingMovie.map(element => {
                            return <MovieCard data={element} key={element.id}/>
                        })
                    }
                </div>
            </div>
            <div>
                <h1>Generos</h1>
                <ul>
                    {
                        genreList.map(element => {
                            return <CategoryCard data={element} key={element.id}/>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export { HomeData }