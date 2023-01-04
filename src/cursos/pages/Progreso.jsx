import './Pages.css';
// import "chartjs-plugin-labels";
import { Pie } from 'react-chartjs-2';
import { data } from '../Components/Chart';

export const Progreso = () => {
  return (
    <div className="contenedor">
      <h1>Progreso</h1>
      <div className="texto">
        <img src="/assets/pagina/vector.png" className="burbuja" alt="vector" />
        <p className="centrado">
          Recuerda que al haber obtenido una nota mayor o igual a 13 en más del
          60% de tareas realizadas se te recompensará con 2 puntos extras en tu
          parcial y/o final según sea el caso.
        </p>
      </div>
      <div className="todo">
        <div className="estadistica">
          <Pie data={data} />
        </div>

        <div className="notas">
        
          
			<div id="table">
				<h1>NOTAS</h1>
				<div className="tabla tablaAlum">
					<table class="table table-dar table-hover table-bordered">
						<thead>
							<tr>
								<th scope="col" className="lista">Tareas</th>
								<th scope="col">Fecha de entrega</th>
								<th scope="col">Calificación</th>
							
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Semana 1</td>
								
								<td>02/05/2022 - 8:00 pm</td>
                <td>15/20</td>
							

							</tr>
						</tbody>
					</table>
				</div>
				</div>
        </div>
      </div>
    </div>
  );
};
