import { MovieCard } from "./MovieCard"

const LayoutMoviePage = ({ data, setNextPage, title, loading }) => {
    return (
        <div className="w-full max-w-6xl">
            {
                loading && <p>Estamos Cargando...</p>
            }
            {
                !loading &&
                <>
                    <h1 className="text-4xl font-bold py-4">{title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {
                            data.map(element => {
                                return <MovieCard data={element} key={element.id}/>
                            })
                        }
                    </div>
                    <button type="button" onClick={() => setNextPage(prev => prev + 1)}>Siguiente pagina</button>
                </>
            }
        </div>
    )
}

export { LayoutMoviePage }