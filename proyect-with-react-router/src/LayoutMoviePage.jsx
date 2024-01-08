import React, { useEffect } from "react"
import { MovieCard } from "./MovieCard"
import { useRef, useCallback } from "react"

const LayoutMoviePage = ({ data, setNextPage, title, hasNextPage, saveMovietoFavorites, items, deleteMovieFromFavorites }) => {
    const movieRef = useRef(null)
    const lastPostRef = useCallback(post => {
        
        // console.log(post)
        // if (loading) return
        
        if (movieRef.current) movieRef.current.disconnect()

        
        movieRef.current = new IntersectionObserver((posts) => {
            // console.log(posts)
            posts.forEach(element => {
                if(element.isIntersecting && hasNextPage) {
                    console.log('we are near the last element')
                    setNextPage(prev => prev + 1)
                }
            })
        })
        
        if (post) movieRef.current.observe(post) 

    }, [hasNextPage])
    
    const mapLastElement = data.map(element => {
        if(data.length - 1) {
            return <MovieCard 
            data={element} 
            key={element.id} 
            ref={lastPostRef} 
            saveMovietoFavorites={saveMovietoFavorites} 
            items={items} 
            deleteMovieFromFavorites={deleteMovieFromFavorites}
            />
        } else {
            return <MovieCard 
            data={element} 
            key={element.id} 
            saveMovietoFavorites={saveMovietoFavorites} 
            items={items} 
            deleteMovieFromFavorites={deleteMovieFromFavorites}
            />
        }
    })

    return (
        <div className="w-full max-w-6xl altura">
            {/* {
                loading && <p>Estamos Cargando...</p>
            } */}
            
                <>
                    <h1 className="text-4xl font-bold py-4">{title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {
                            mapLastElement
                        }
                    </div>
                    {/* <button type="button" onClick={() => setNextPage(prev => prev + 1)}>Siguiente pagina</button> */}
                </>
            
        </div>
    )
}

export { LayoutMoviePage }

