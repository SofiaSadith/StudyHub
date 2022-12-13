import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light p-2" >

            <Link
                className="navbar-brand" style={{ color: '#FFE000' }}
                to="/"
            >
                StudyHub
            </Link>
            <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">Buscar</button>
            </div>

            <div className="navbar-collapse padre" >
                <div className="navbar-nav menu" style={{ backgroundColor: '#50CAB3' }}>

                    <NavLink
                        className="nav-item nav-link caja"
                        to="/cursos"
                    >
                        Cursos
                    </NavLink>
                    <li className="nav-item dropdown " >
                        <NavLink
                            className="nav-link dropdown-toggle caja" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            to="/tareas"
                        >
                            Tareas
                        </NavLink>
                        <ul className="dropdown-menu caja" aria-labelledby="navbarDropdown" >
                            <li >

                                <a className='dropdown-item' href='/tareascompletadas' >
                                    Tareas Completadas
                                </a>
                                <a className='dropdown-item' href='/tareaspendientes' >
                                    Tareas Pendientes
                                </a>

                            </li>
                        </ul>


                    </li>


                    <NavLink
                        className="nav-item nav-link "
                        to="/progreso"
                    >
                        Progreso
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Sofía
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}