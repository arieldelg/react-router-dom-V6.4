import { useParams } from "react-router-dom"


const CategoryMoviePage = () => {
    const url = useParams()
    const { name, id } = url
    
    return (
        <div>
            aqui van todas las peliculas de categorias de {name} con el id de {id}
        </div>
    )
}

export { CategoryMoviePage }