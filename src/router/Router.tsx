import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "../components/Pages/AboutMe";
import Contact from "../components/Pages/Contact";
import Main from "../components/Pages/Main";
import Project from "../components/Pages/Project";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;