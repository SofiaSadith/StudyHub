import { Navigate, useParams } from 'react-router-dom'
import { getCursoById } from '../helpers';
import { Link } from 'react-router-dom';
import './Pages.css';
export const TareasPage = () => {
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


            <div className="card-body">
              <h5 className="card-title">{curso.semana1.pregunta1.enunciado}</h5>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                  <label className="form-check-label" >
                  {curso.semana1.pregunta1.opciones[0]}
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" >
                  {curso.semana1.pregunta1.opciones[1]}
                  </label>
              </div>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{curso.semana1.pregunta2.enunciado}</h5>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" />
                  <label className="form-check-label" >
                  {curso.semana1.pregunta2.opciones[0]}
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" />
                  <label className="form-check-label" >
                  {curso.semana1.pregunta2.opciones[1]}
                  </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{curso.semana3.pregunta3.enunciado}</h5>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3" />
                  <label className="form-check-label">
                  {curso.semana3.pregunta3.opciones[0]}
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault3"  />
                  <label className="form-check-label" >
                  {curso.semana3.pregunta3.opciones[1]}
                  </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            
            <div className="card-body">
            <h5 className="card-title">{curso.semana4.pregunta3.enunciado}</h5>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4"/>
                  <label className="form-check-label" >
                  {curso.semana4.pregunta3.opciones[0]}
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault4" />
                  <label className="form-check-label" >
                  {curso.semana4.pregunta3.opciones[1]}
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='osito'>
          <Link className="btn" style={{ background: '#FF743D', width:'5rem'}} to={`/curso/${id}`}>Enviar</Link>
          </div>



    </>

  )
}