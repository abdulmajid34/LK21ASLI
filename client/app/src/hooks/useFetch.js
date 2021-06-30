import React, { useState, useEffect } from 'react'

function useFetch(url) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(movies => {
            setMovies(movies)
        })
        .catch((err) => {
            setError(err)
        })
        .finally((_) => setLoading(false))
    }, [url])
    
    return [ movies, loading, error ]
}

export default useFetch
