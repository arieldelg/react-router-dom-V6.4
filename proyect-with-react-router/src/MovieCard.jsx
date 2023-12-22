import { useNavigate } from "react-router-dom"

const MovieCard = ({ data }) => {
    const navigate = useNavigate()
    return(
        <div>
            <img 
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
            alt={data.original_title} 
            className="w-56 "
            onClick={() => navigate(`/movie/${data.id}`, { state: data })}
            aria-label={`The movie name is ${data.original_title}`}
            />
        </div>
    )
}

export { MovieCard }