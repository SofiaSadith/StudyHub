import './Navbar.css';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createContext } from 'react';
import { CursosList } from '../../cursos/Components/CursosList';
import Datos from '../../auth/pages/Datos';
import Speech from 'react-speech';

const user = Datos;
const appId = process.env.REACT_APP_SPEECHLY_APP_ID;
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Word = createContext();

export const Navbar = () => {

    const navigate = useNavigate();

    const numbers = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        zero: '0',
        o: '0',
    };
    const [curso, setCurso] = useState('');

    const commands = [
        {
            command: 'SHOW ME *',
            callback: function (curso) {
                setCurso(`${curso}`);
            },
            matchInterim: true,
        },
    ];

    const {
        transcript,
        listening,
        // browserSupportsSpeechRecognition
    } = useSpeechRecognition({ commands });
    const startListening = () => SpeechRecognition.startListening({ continuous: true });

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    const style = {
        container: { },
        text: { },
        buttons: { },
        play: {
          hover: {
            backgroundColor: 'GhostWhite'
          },
          button: {
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'Gainsboro',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
          }
        },
        pause: {
          play: { },
          hover: { }
        },
        stop: {
          play: {
          hover: { },
          button: { }
        },
        resume: {
          play: {
          hover: { },
          button: { }
        }
      }}};
    //const [usuario, establecerUsuario] = useState(user.nombre);

    return (
        <>
      
        <Speech style={{
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'Gainsboro',
            color: "#000000",
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
          }} text={`Welcome ${user.nombre}`}/>
        
        <Word.Provider value={curso}>
            <nav className="navbar navbar-expand-sm navbar-light p-2" >

                <Link
                    className="navbar-brand" style={{ color: '#FFE000' }}
                    to="/"
                >
                    StudyHub
                </Link>
                <div class="input-group">
                    <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon"
                        defaultValue={curso}
                    // onClick={setWord(transcript)}
                    />
                    <button type="button" className="btn"
                        onTouchStart={startListening}
                        onMouseDown={startListening}
                        onTouchEnd={SpeechRecognition.stopListening}
                        onMouseUp={SpeechRecognition.stopListening}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg>
                    </button>
                    <button type="button" className="btn btn-outline-primary">Buscar</button>
                </div>

                <div className="navbar-collapse padre"  >
                    <div className="navbar-nav menu" style={{ backgroundColor: '#50CAB3' }}>

                        <NavLink
                            className="nav-item nav-link caja"
                            to="/cursos"
                        >
                            Cursos
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link caja" to="/tareas"
                        >
                            Tareas
                        </NavLink>

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
                        <span className='nav-item nav-link text-success' >
                            {user.nombre}
                        </span>

                        <button
                            className='nav-item nav-link btn btn-danger' style={{ color: 'white' }} type="button"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
        </Word.Provider>
        </>
    )
}
export { Word };
// export const word = curso;