import React from 'react';
import {ListNav , ListItem} from './App.styled'

 import { NavLink, Navigate, Route, Routes } from "react-router-dom";
// const Home = lazy(() => import('./pages/Home'))
// const Movies = lazy(() => import('./pages/Movies'))
// const MovieDetails = lazy(() => import('./pages/MovieDetails'))
// const Reviews = lazy(() => import('./Reviews/Reviews'))
// const Cast = lazy(() => import('./Cast/Cast'))

 import Home from './pages/Home'
 import Movies from './pages/Movies'
 import MovieDetails from './pages/MovieDetails'
 import Reviews from './Reviews/Reviews'
 import Cast from './Cast/Cast'


 const App = () => {
  return (<div>
          <ListNav>
        <ListItem>
          <NavLink to='/'> Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to='/movies'>Movies</NavLink>
        </ListItem>
      </ListNav>
 <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/> } />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to='/' />} />
      </Route>
      </Routes>
      </div>

  );
};

export default App;