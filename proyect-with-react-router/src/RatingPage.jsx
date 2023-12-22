import { MovieCard } from "./MovieCard"

const RatingPage = ({ dayTrendingMovie, setNextPage }) => {
    return (
        <div >
            <div className="flex">
                {
                    dayTrendingMovie.map(element => {
                        return <MovieCard data={element} key={element.id}/>
                    })
                }
            </div>
            <button type="button" onClick={() => setNextPage(prev => prev + 1)}>Siguiente pagina</button>
        </div>
    )
}

export { RatingPage }