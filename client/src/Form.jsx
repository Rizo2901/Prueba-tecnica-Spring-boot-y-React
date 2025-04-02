import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css"; // Estilos para react-phone-input-2
import "./form.css"; // Importamos el archivo CSS externo
import PhoneInput from "react-phone-input-2"; // Biblioteca para el selector de teléfono

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // URL base desde el archivo .env

function Form() {
  const [step, setStep] = useState(1); // Controla el paso del formulario
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    departamento: "",
    municipio: "",
    direccion: "",
    ingresosMensuales: "",
  });
  const [emailError, setEmailError] = useState(""); // Estado para el mensaje de error del correo
  const [debounceTimeout, setDebounceTimeout] = useState(null); // Estado para manejar el debounce

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validar correo en tiempo real con debounce
  const handleEmailChange = (correo) => {
    setFormData({ ...formData, correo }); // Actualiza el estado del correo

    // Limpiar el timeout anterior
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Configurar un nuevo timeout para ejecutar la validación después de 500ms
    const timeout = setTimeout(() => {
      validateEmail(correo);
    }, 500);

    setDebounceTimeout(timeout);
  };

  // Validar correo en el servidor
  const validateEmail = async (correo) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/usuarios/validar-correo?correo=${correo}`
      );
      if (response.ok) {
        const data = await response.text(); // El backend devuelve un string
        if (data === "El correo ya está registrado.") {
          setEmailError(
            "El correo ya está en uso. Por favor, intenta con otro."
          );
        } else {
          setEmailError(""); // Limpia el error si el correo está disponible
        }
      }
    } catch (error) {
      console.error("Error al validar el correo:", error);
    }
  };

  // Avanzar al siguiente paso
  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  // Regresar al paso anterior
  const handlePreviousStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  // Enviar el formulario a la API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Usuario registrado con éxito");
        console.log("Usuario registrado con éxito");

        // Reiniciar el formulario y el estado
        setFormData({
          nombres: "",
          apellidos: "",
          correo: "",
          telefono: "",
          tipoIdentificacion: "",
          numeroIdentificacion: "",
          departamento: "",
          municipio: "",
          direccion: "",
          ingresosMensuales: "",
        });
        setStep(1); // Volver al primer paso
      } else {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          if (
            response.status === 400 &&
            errorData.message === "El correo ya está registrado."
          ) {
            alert("El correo ya está en uso. Por favor, intenta con otro.");
          } else {
            alert(
              "Ocurrió un error al registrar el usuario. Intenta nuevamente."
            );
            console.error("Error al registrar usuario:", errorData);
          }
        } else {
          alert("Ocurrió un error inesperado. Intenta nuevamente.");
          console.error("Error inesperado: Respuesta no es JSON");
        }
      }
    } catch (error) {
      alert("Error en la conexión con el servidor. Intenta nuevamente.");
      console.error("Error en la petición:", error);
    }
  };

  return (
    <div id="root">
      {/* Contenedor de la izquierda (fondo azul con imagen) */}
      <div className="left-container">
        <img
          src="/images/6b37477a40c72c4c8474921fde5e333c.jpeg"
          alt="Imagen de registro"
        />
      </div>

      {/* Contenedor de la derecha (formulario) */}
      <div className="right-container">
        <div className="text-dark p-4 w-100">
          <h2 className="text-center mb-4">Registro de Usuario</h2>

          {/* Primera parte del formulario */}
          {step === 1 && (
            <form onSubmit={handleNextStep}>
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                />
                {emailError && (
                  <small className="text-danger">{emailError}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <PhoneInput
                  country={"us"}
                  value={formData.telefono}
                  onChange={(phone) =>
                    setFormData({ ...formData, telefono: phone })
                  }
                  inputProps={{
                    name: "telefono",
                    required: true,
                    className: "form-control",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoIdentificacion" className="form-label">
                  Tipo de Identificación
                </label>
                <select
                  className="form-control"
                  id="tipoIdentificacion"
                  name="tipoIdentificacion"
                  value={formData.tipoIdentificacion}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Cédula de Ciudadanía">
                    Cédula de Ciudadanía
                  </option>
                  <option value="Cédula de Extranjería">
                    Cédula de Extranjería
                  </option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Tarjeta de Identidad">
                    Tarjeta de Identidad
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="numeroIdentificacion" className="form-label">
                  Número de Identificación
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroIdentificacion"
                  name="numeroIdentificacion"
                  value={formData.numeroIdentificacion}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Continuar
              </button>
            </form>
          )}

          {/* Segunda parte del formulario */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              {/* Botón para regresar al paso anterior */}
              <button
  type="button"
  onClick={handlePreviousStep}
  style={{
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "1.5rem",
    padding: "10px 20px",
    background: "linear-gradient(135deg, #4c4cf1, #6c6cff)", // Gradiente de colores.
    color: "white",
    border: "none",
    borderRadius: "8px", // Bordes redondeados.
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Sombra para darle profundidad.
    cursor: "pointer",
    transition: "all 0.3s ease", // Animaciones suaves.
  }}
  onMouseOver={(e) => {
    e.target.style.transform = "scale(1.1)"; // Aumenta el tamaño al pasar el mouse.
    e.target.style.background = "linear-gradient(135deg, #6c6cff, #4c4cf1)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "scale(1)"; // Vuelve al tamaño original.
    e.target.style.background = "linear-gradient(135deg, #4c4cf1, #6c6cff)";
  }}
>
  ← Atrás
</button>

              <div className="mb-3">
                <label htmlFor="departamento" className="form-label">
                  Departamento
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="departamento"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="municipio" className="form-label">
                  Municipio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="municipio"
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ingresosMensuales" className="form-label">
                  Ingresos Mensuales
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ingresosMensuales"
                  name="ingresosMensuales"
                  value={formData.ingresosMensuales}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
