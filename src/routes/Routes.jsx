/* eslint-disable react/react-in-jsx-scope */
import {BrowserRouter, Route, Routes} from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";




export default function RoutePage () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Project/>} path='/project' />
        <Route element={<NotFound/>} path='*' />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}