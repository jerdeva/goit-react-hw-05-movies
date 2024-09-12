import React, {
  lazy,
} from 'react';

import { Layout } from './Layout/Layout';

import {
  Navigate, Route, Routes
} from "react-router-dom";


 
const Home = lazy(() => import('./pages/Home'))
const Movies = lazy(() => import('./pages/Movies'))
const MovieDetails = lazy(() => import('./pages/MovieDetails'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Cast = lazy(() => import('./Cast/Cast'))


 const App = () => {
   return (<div>
        <Routes>
        <Route path='/' element={<Layout />}>
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