/* eslint-disable react/react-in-jsx-scope */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import SinglePost from '../pages/SinglePost';
import Post from '../pages/post';
import Project from '../pages/Project';
import NavBar from "../components/NavBar";



export default function RoutePage () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route element={<Home/>} path='/' exact /> */}
        <Route element={<About/>} path='/about' />
        <Route element={<SinglePost/>} path='/post/:slug' />
        <Route element={<Post/>} path='/post' />
        <Route element={<Project/>} path='/project' />
      </Routes>
    </BrowserRouter>
  )

}