import React, { useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import "../../style/login.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../api/config";
import { jwtDecode } from "jwt-decode";

function Login() {
  const user = useRef(null);
  const pass = useRef(null);

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    let userLogin = {
      mail: user.current.value,
      password: pass.current.value,
    };

    const response = await api.post("/auth/login", userLogin);
    if (response.status == 200 || response.status == 201) {
      
      setToken(response.data.access_token);
      
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="body-login d-flex justify-content-center align-items-center">
      <div className="card shadow w-50 py-5 border">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col col-sm-6 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
            <img src={Logo} alt="" className="" />
          </div>
          <div className="col col-sm-12 col-md-12 col-xl-6 px-5">
            <h3>Iniciar Sesion</h3>
            <div className="mt-4">
              <div className="form-group">
                <label htmlFor="">Correo electronico</label>
                <input class="form-control" ref={user} />
              </div>
              <div className="form-group">
                <label htmlFor="">Contraseña</label>
                <input class="form-control" ref={pass} />
              </div>
            </div>
            <button className="acceptButton mt-3" onClick={handleLogin}>
              Subir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
