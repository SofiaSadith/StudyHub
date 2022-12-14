import React from 'react';
import courses from '../data/courses.json';
import { CursosCard } from './CursosCard';



export const CursosList = () => {
  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {courses.data
        .filter((curso) => curso.titulo.includes('Inglés') === true)
        .map((curso) => {
          return <CursosCard key={curso.id} {...curso} />;
        })}
    </div>
  );
};
