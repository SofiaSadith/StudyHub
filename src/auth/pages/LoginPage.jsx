import { useNavigate } from "react-router-dom"
import React from 'react'

export const LoginPage = () => {

    const navigate = useNavigate();

    function onLogin(){
        navigate('/', {
            replace: true
        })
    }

    function valida(){
        var urlBd="http://localhost:5000"
        console.log("Funciona");
        const co=document.getElementsByClassName("form-control mb-3 mt-4")[0].value;
        const pw=document.getElementsByClassName("form-control")[1].value;
        const plini = {
            codigo:co,
            clave:pw,
        }
        postData(urlBd + '/usuario/iniciaSesionAlumno', plini)
            .then(data => {
                console.log("inin");
                if (data.status === "SUCCESS") {
                    onLogin();
                }
                else {
                    alert(data.message);
                }
            }).catch(err => console.log(err));
    }

    async function postData(url = "", data) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

  return (
    <div style={{marginLeft:"400px", marginTop:"200px", width:"40rem"}}>
            <h1>Login Page</h1>
            <input type="codigo" className="form-control mb-3 mt-4" placeholder="Codigo" />
            <input type="password" className="form-control" placeholder="Password" />
            <button className="btn btn-secondary mt-3" onClick={valida}>ENVIAR</button>
        </div>
  )
}