import { Navigate, useParams } from 'react-router-dom'
import './Pages.css'
import { getCursoById } from '../helpers';
import { Link } from 'react-router-dom';

export const CursoPage = () => {
  const { id } = useParams();
  const curso = getCursoById(id);

  if (!curso) {
    return <Navigate to="/cursos" />
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 contenedor">
        <div className="col">
          <div className="card">
          
          <img src="/assets/semanas/semana1.png" className="card-img-top" alt="semana1" />
          <div className="card text-center" >

              <div className="card-body" >
                <h5 className="card-title">{curso.semana1.nombre}</h5>
                <p className="card-text">Tareas de la Semana 1.</p>
                <Link className="btn" style={{ background: '#FF743D' }} to={`/tareas/${id}`}>Ir</Link>
              </div>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/assets/semanas/semana2.png" className="card-img-top" alt="semana2"/>
            <div className="card text-center" >
              <div className="card-body">
                <h5 className="card-title">{curso.semana2.nombre}</h5>
                <p className="card-text">Tareas de la Semana 2.</p>
                <Link className="btn" style={{ background: '#FF743D' }} to={`/tareas/${id}`}>Ir</Link>
              </div>
          </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/assets/semanas/semana3.png" className="card-img-top" alt="semana3"/>
            <div className="card text-center" >
              <div className="card-body">
                <h5 className="card-title">{curso.semana3.nombre}</h5>
                <p className="card-text">Tareas de la Semana 3.</p>
                <Link className="btn" style={{ background: '#FF743D' }} to={`/tareas/${id}`}>Ir</Link>
              </div>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/assets/semanas/semana4.png" className="card-img-top" alt="semana4"/>
            <div className="card text-center" >
              <div className="card-body">
                <h5 className="card-title">{curso.semana4.nombre}</h5>
                <p className="card-text">Tareas de la Semana 4.</p>
                <Link className="btn" style={{ background: '#FF743D' }} to={`/tareas/${id}`}>Ir</Link>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>

  )
}
