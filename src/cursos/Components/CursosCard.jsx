import { Link } from "react-router-dom";

export const CursosCard = ({
    id,
    titulo,
    descripcion
}
) => {
    const cursoImageUrl = `/assets/cursos/${id}.jpg`;
    return (
        <div className="row g-2 col-6 p-4 w-25" >
            <div className="card p-3" style={{ alignItems: 'center' }} >
                
                

                    <img className="card-img-top" src={cursoImageUrl} alt={titulo} />


          
                <div className="card text-center">

                    <div className="card-body" >
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">
                            <small className="text-muted">{descripcion}</small>
                        </p>
                        <Link className="btn" style={{ background: '#FF743D' }} to={`/curso/${id}`}>Ir</Link>
                    </div>
                </div>
                

            </div>
        </div>

    )
}
