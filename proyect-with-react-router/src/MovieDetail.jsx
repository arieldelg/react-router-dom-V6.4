import { useLocation, useParams } from "react-router-dom"

const MovieDetail = () => {
    const url = useParams()
    console.log(url.id)
    return (
        <div>
            here goes the movie detail
        </div>
    )
}

export { MovieDetail }