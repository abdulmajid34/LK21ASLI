import React, { useState, useEffect } from 'react';

function useFetch(url) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(movie => {
            setMovies(movie)
        })
        .catch((err) => {
            setError(err)
        })
        .finally((_) => {
            setLoading(false)
        })
    }, [url])
    return (
        [ movies, loading, error ]
    )
}

export default useFetch