# Prueba Técnica - Spring Boot y React

Este proyecto consiste en la creación de dos aplicaciones:
- **API (Backend)**: Desarrollada con **Java Spring Boot**.
- **Cliente (Frontend)**: Desarrollado con **React.js** y **Vite**.

---

## API de Registro de Usuarios

Esta es una API desarrollada con **Spring Boot** que permite registrar usuarios y validar si un correo electrónico ya está registrado. La API sigue principios de diseño **SOLID** y está estructurada para ser modular, escalable y fácil de mantener.

### Características
- Validación de correos electrónicos para evitar duplicados.
- Registro de usuarios con datos personales, de contacto y ubicación.
- Arquitectura basada en capas: controladores, servicios, repositorios y modelos.
- Configuración de seguridad con soporte para **CORS**.
- Uso de **Spring Data JPA** para la interacción con la base de datos.

### Requisitos Previos
Antes de iniciar, asegúrate de tener instalados los siguientes programas:
- **Java 17** o superior.
- **Maven** o **Gradle** (dependiendo de tu configuración).
- **MongoDB** u otro sistema de base de datos NoSQL.
- **Git** (opcional, para clonar el repositorio).

### Configuración de Seguridad para Permitir Peticiones del Frontend
La API está configurada para permitir solicitudes desde el frontend (**React.js**) ubicado en `http://localhost:5173`. Esto se logra mediante la configuración de **CORS** en la clase `SecurityConfig` del proyecto API.

---

## Cómo Ejecutar la API

### Pasos para Ejecutar la API
1. Navega al directorio del proyecto **API**:
   ```sh
   cd api
   ```
2. Instala las dependencias y compila el proyecto:
   - Con Maven:
     ```sh
     mvn clean install
     ```
   - Con Gradle:
     ```sh
     ./gradlew build
     ```
3. Ejecuta la API:
   - Con Maven:
     ```sh
     mvn spring-boot:run
     ```
   - Con Gradle:
     ```sh
     ./gradlew bootRun
     ```
4. Verifica que la API esté corriendo:
   - Abre tu navegador y accede a:
     ```sh
     http://localhost:8080
     ```

---

## Proyecto del Frontend

El frontend es una aplicación creada con **React.js** utilizando **Vite** como herramienta de construcción.

### Características
- Formulario dividido en dos pasos:
  1. Datos personales y de contacto.
  2. Información de ubicación y financiera.
- Consumo de los endpoints de la API.

### Pasos para Ejecutar el Cliente
1. Navega al directorio del proyecto **cliente**:
   ```sh
   cd client
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Verifica que el cliente esté corriendo:
   - Abre tu navegador y accede a:
     ```sh
     http://localhost:5173
     ```

---

## Conexión entre el Frontend y el Backend

### Configuración del Frontend
En el archivo `.env` del cliente, configura la URL base de la API.

### Prueba de Conexión
1. Asegúrate de que tanto el backend como el frontend estén corriendo.
2. Completa el formulario en el frontend y verifica que los datos se envíen correctamente a la API.

---

## Resumen de Comandos

### Para la API (Backend)
- **Compilar y ejecutar con Maven**:
  ```sh
  mvn clean install
  mvn spring-boot:run
  ```
- **Compilar y ejecutar con Gradle**:
  ```sh
  ./gradlew build
  ./gradlew bootRun
  ```

### Para el Cliente (Frontend)
- **Instalar dependencias**:
  ```sh
  npm install
  ```
- **Ejecutar el servidor de desarrollo**:
  ```sh
  npm run dev
  ```

---

## Notas Adicionales

- Asegúrate de que **MongoDB** esté corriendo antes de iniciar la API.
- Si necesitas cambiar el puerto de la API, edita el archivo `application.properties`.
- Si necesitas cambiar el puerto del cliente, edita el archivo `vite.config.js`.