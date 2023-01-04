import React, {useEffect} from 'react';
import courses from '../data/courses.json';
import { CursosCard } from './CursosCard';
import { Word } from '../../ui/components/Navbar';
import { getCurso } from '../../store/slices/cursos';
import { useDispatch } from 'react-redux';

export const CursosList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurso());
  }, [dispatch]);

  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3">
        {courses.data
        // .filter((curso) => curso.titulo.includes('Inglés') === true)
        .map((curso) => {
          return <CursosCard key={curso.id} {...curso} />;
        })}
      </div>
  );
};
