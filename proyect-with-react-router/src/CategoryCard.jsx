import { useNavigate } from "react-router-dom"

const CategoryCard = ({ data }) => {
    const navigate = useNavigate()
    return (
        <li onClick={() => navigate(`/${data.name}/${data.id}`)} className='cursor-pointer list-none no-underline'>
            <span className="pr-4 no-underline">color</span>
            <span>{data.name}</span>
        </li>
    )
}

export { CategoryCard }