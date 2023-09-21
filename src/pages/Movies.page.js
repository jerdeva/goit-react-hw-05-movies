 import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import searchMoviesByWord from '../components/Api/Api'
import MoveList from 'components/MovieList';


const Movies = () => {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieTitle = searchParams.get('query' || '')
    const [loading, setLoading] = useState(false)
    
    const changeQuery = query => {
        const newQuery = query !== '' && { query };
        setSearchParams(newQuery);
    };

    useEffect(() => {
      const search = async () => {
        try {
          setLoading(true);
          const movies = await searchMoviesByWord(movieTitle);
          setResults(movies);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      search();
    }, [movieTitle]);


    return (
        <div>
            <MoveList movies={results}/>
        </div>
    )
 }


export default Movies;