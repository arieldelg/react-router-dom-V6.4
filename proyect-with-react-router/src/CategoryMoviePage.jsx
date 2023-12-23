import { useParams } from "react-router-dom"
import { fetchMovieDataBase } from "./api"
import { useEffect, useState } from "react"
import { LayoutMoviePage } from "./LayoutMoviePage"


const CategoryMoviePage = ({ nextPage, setNextPage }) => {
    const url = useParams()
    const { name, id } = url
    const [dataMovie, setDataMovie] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchCategory = async () => {
            setIsLoading(true)
            try {
                const response = await fetchMovieDataBase.get(`discover/movie?with_genres=${id}&page=${nextPage}`)
                if(!response.status) throw new Error('Error en el LLamado API')
                setDataMovie(response.data.results)
                setError(null)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCategory()
    }, [])
    return (
        <div>
            {
                error && <p>{error}</p>
            }
            {
                !error &&
                <LayoutMoviePage data={dataMovie} title={name} loading={isLoading} setNextPage={setNextPage}/>
            }
        </div>
    )
}

export { CategoryMoviePage }