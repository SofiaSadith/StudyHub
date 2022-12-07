import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui"
import { Cursos, Tareas, TareasCompletadas, TareasPendientes, Progreso } from '../pages';
import { CursoPage } from "../pages/CursoPage";
import { Search } from "../pages/Search";
import { TareasPage } from "../pages/TareasPage";

export const StudyRoutes = () => {
  return (
    <>
     <Navbar/>
     <div className="container">
        <Routes>
            <Route path='cursos' element={<Cursos/>}/>
            <Route path='tareas' element={<Tareas/>}/>
            <Route path='progreso' element={<Progreso/>}/>
            <Route path='tareascompletadas' element={<TareasCompletadas/>}/>
            <Route path='tareaspendientes' element={<TareasPendientes/>}/>
            <Route path='/' element={<Navigate to ='/cursos'/>}/>
            <Route path="curso/:id" element={<CursoPage/>}/>
            <Route path="tareas/:id" element={<TareasPage/>}/>
            <Route pat='search' element={<Search/>}/>


        </Routes>
        </div>
    </>
  )
}
