import { NavLink, Route, Routes } from "react-router-dom";
import {Home} from '../pages/Home.page'


export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'> Home</NavLink>
        </li>
        <li>
          <NavLink to='/movies'>Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />;
        <Route path="/movies" element={<div>Movies</div>} />;
        <Route path="/movies/:movieId"element={<div>Movies items</div>} />;

      </Routes>

    </div>
  );
};
