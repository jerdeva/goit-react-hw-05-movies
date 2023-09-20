import {  NavLink, Navigate, Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home.page'
import Movies from '../pages/Movies.page'
import MovieDetails from '../pages/MovieDetails.page'
import Reviews from '../components/Reviews';
import Cast from "./Cast";



export const App = () => {
  return (<div>
          <ul>
        <li>
          <NavLink to='/'> Home</NavLink>
        </li>
        <li>
          <NavLink to='/movies'>Movies</NavLink>
        </li>
      </ul>

    <Routes path='/'>
        <Route index element={<Home/>} />;
        <Route path="/movies" element={<Movies/>} />;
          <Route path="/movies/:movieId" element={<MovieDetails />} >;
            <Route path="cast" element={<Cast/> } />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      <Route path="*" element={<Navigate to ='/'/> } />
    <Route/>
    </Routes>
    </div>
  );
};
