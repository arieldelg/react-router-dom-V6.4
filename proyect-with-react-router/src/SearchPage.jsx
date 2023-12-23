import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieDataBase } from "./api"
import { LayoutMoviePage } from "./LayoutMoviePage"


const SearchPage = () => {
    const url = useParams()
    const { name } = url
    const [searchData, setSearchData] = useState([])
    const [error, setError] = useState([])
    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await fetchMovieDataBase.get(`search/movie?query=${name}`)
                if(!response.status) throw new Error('Error en el llamado API')
                setSearchData(response.data.results)
                setError(null)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchSearch()
    },[name])
    return (
       <div>
        <h1>Resultados de {name}</h1>
        <LayoutMoviePage data={searchData}/>
       </div> 
    )
}
export { SearchPage }