import { Navigate, useParams } from 'react-router-dom'
import { getCursoById } from '../helpers';
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
              </div>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{curso.semana2.pregunta2.enunciado}</h5>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}