import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import { LoginPage } from '../auth';
import { StudyRoutes } from '../cursos';


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<StudyRoutes/>}/>

        </Routes>
    </>
  )
}
