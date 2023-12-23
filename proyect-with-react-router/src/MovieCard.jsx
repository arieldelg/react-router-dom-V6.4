import { redirect, useNavigate } from "react-router-dom"

const MovieCard = ({ data }) => {
    const navigate = useNavigate()
    return(
        <>
            <img 
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
            alt={data.original_title} 
            className="w-[220px] rounded-xl inline-block hover:scale-105 ease-in-out duration-300 p-2 cursor-pointer"
            onClick={() => navigate(`/movie/${data.id}`)}
            aria-label={`The movie name is ${data.original_title}`}
            width={190}
            height={200}
            />
        </>
    )
}

export { MovieCard }