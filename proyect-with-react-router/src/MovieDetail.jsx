import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1MjM1ODM0YzNjN2Q0NmFmYjE4YzViOTYzM2NjNCIsInN1YiI6IjY1MDM4NWJlNmEyMjI3MDExYTdjMmE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLchL40z0mZ5vv7UdQcYoqO8gNC1L7OEnfBTldabc4M'
    }
  };

const MovieDetail = () => {
    const API_URL = 'https://api.themoviedb.org/3/'
    const url = useParams()
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const movieDetail = async () => {
            const response = await fetch(`${API_URL}movie/${url.id}`, options)
            try {
                if(!response.ok) throw new Error('Error en el llamado API')
                const details = await response.json()
                setData(details)
                setError(null)
                console.log(details)
            } catch (error) {
                setError(error.message)
            }
        }
        movieDetail()
    }, [])

    return (
        <div className="w-full h-screen">
            {
                error && <p>{error}</p>
            }
            {
                !error && 
                <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`, width: '100%', height: '100%', objectFit: 'cover'}}>
                    {/* <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.original_title}/> */}
                    {/* <div className="bg-slate-500 h-[500px]">
                        <h1>{data.original_title}</h1>
                    </div> */}
                </div>
            }
        </div>
    )
}

export { MovieDetail }