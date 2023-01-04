import { Link } from "react-router-dom";
import '../pages/Pages.css'
export const CursosCard = ({
    id,
    titulo,
    descripcion
}
) => {
    const cursoImageUrl = `/assets/cursos/${id}.jpg`;
    return (
        <div className="row g-2 col-6 p-4 w-25">
            <div className="card" >

                    <img className="card-img-top" src={cursoImageUrl} alt={titulo} />


          
                <div className="card text-center" >

                    <div className="card-body" >
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">
                            <small className="text-muted" style={{ color: '#FFFFFF' }} >{descripcion}</small>
                        </p>
                        <Link className="btn" style={{ background: '#275E71', color: '#FFFFFF' }} to={`/curso/${id}`}>Ir</Link>
                    </div>
                </div>
                

            </div>
        </div>

    )
}
