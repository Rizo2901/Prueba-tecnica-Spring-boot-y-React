# Prueba-tecnica-Spring-boot-y-React
Prueba tecnica con creacion de dos proyectos, uno con nombre api creado con Java Spring boot y otro con nombre de client  creado con Reatc.Js y vite




# API de Registro de Usuarios#

Esta es una API desarrollada con **Spring Boot** que permite registrar usuarios y validar si un correo electrónico ya está registrado. La API sigue principios de diseño SOLID y está estructurada para ser modular, escalable y fácil de mantener.

---

## **Características##

- Validación de correos electrónicos para evitar duplicados.
- Registro de usuarios con datos personales, de contacto y ubicación.
- Arquitectura basada en capas: controladores, servicios, repositorios y modelos.
- Configuración de seguridad con soporte para CORS.
- Uso de Spring Data JPA para la interacción con la base de datos.

---

## Requisitos Previos

Antes de iniciar, asegúrate de tener instalados los siguientes programas:

- **Java 17** o superior.
- **Maven** o **Gradle** (dependiendo de tu configuración).
- **MySQL** u otro sistema de base de datos relacional (configurable en `application.properties`).
- **Git** (opcional, para clonar el repositorio).

---
##Configuración de Seguridad para Permitir Peticiones del Proyecto del Frontend#

La API está configurada para permitir solicitudes desde el frontend (React.js) ubicado en http://localhost:5173. Esto se logra mediante la configuración de CORS en la clase SecurityConfig del proyecto api.

##Cómo Ejecutar la API#

1. Backend (API)
¿Qué se hizo?
Se creó una API RESTful con Spring Boot que permite registrar usuarios y validar correos electrónicos.
Se utilizó MongoDB como base de datos NoSQL.
Se configuró la API para aceptar solicitudes desde el frontend.
Pasos para Ejecutar la API
Navega al directorio del proyecto API:cd api

Instala las dependencias y compila el proyecto:
mvn clean install

Si usas Maven:mvn clean install
Si usas Gradle:./gradlew build
Ejecuta la API:

Con Maven: mvn spring-boot:run
Con Gradle:./gradlew bootRun

Verifica que la API esté corriendo:

Abre tu navegador y accede a:
http://localhost:8080

##**Proyecto del frontend**##

Se creó un cliente con React.js utilizando Vite como herramienta de construcción.
Se implementó un formulario dividido en dos pasos:
Datos personales y de contacto.
Información de ubicación y financiera.
Se configuró el cliente para consumir los endpoints de la API.
Pasos para Ejecutar el Cliente
Navega al directorio del proyecto cliente:

Instala las dependencias:npm install

Ejecuta el servidor de desarrollo:npm run dev

Verifica que el cliente esté corriendo: 
Abre tu navegador y accede a:http://localhost:5173
##Conexión entre el Frontend y el Backend#

Configuración del Frontend:

En el archivo .env del cliente, configura la URL base de la API.

##**Prueba de Conexión**##
Asegúrate de que tanto el backend como el frontend estén corriendo.
Completa el formulario en el frontend y verifica que los datos se envíen correctamente a la API.

##Resumen de Comandos#

Para la API (Backend)
Compilar y ejecutar con Maven:
Compilar y ejecutar con Gradle:
Ejecutar el JAR:
Para el Cliente (Frontend)
Instalar dependencias:
Ejecutar el servidor de desarrollo:
##Notas Adicionales#

Asegúrate de que MongoDB esté corriendo antes de iniciar la API.
Si necesitas cambiar el puerto de la API, edita el archivo application.properties:
Si necesitas cambiar el puerto del cliente, edita el archivo vite.config.js:

