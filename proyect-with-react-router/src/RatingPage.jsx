import { LayoutMoviePage } from "./LayoutMoviePage"

const RatingPage = ({ data, setNextPage }) => {
    return (
        <>
         <LayoutMoviePage data={data} setNextPage={setNextPage} title={'Tendencias'}/>
        </>
    )
}

export { RatingPage }