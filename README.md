# Prueba-tecnica-Spring-boot-y-React
Prueba tecnica con creacion de dos proyectos, uno con nombre api creado con Java Spring boot y otro con nombre de client  creado con Reatc.Js y vite




# API de Registro de Usuarios

Esta es una API desarrollada con **Spring Boot** que permite registrar usuarios y validar si un correo electrónico ya está registrado. La API sigue principios de diseño SOLID y está estructurada para ser modular, escalable y fácil de mantener.

---

## **Características**

- Validación de correos electrónicos para evitar duplicados.
- Registro de usuarios con datos personales, de contacto y ubicación.
- Arquitectura basada en capas: controladores, servicios, repositorios y modelos.
- Configuración de seguridad con soporte para CORS.
- Uso de Spring Data JPA para la interacción con la base de datos.

---

## **Requisitos Previos**

Antes de iniciar, asegúrate de tener instalados los siguientes programas:

- **Java 17** o superior.
- **Maven** o **Gradle** (dependiendo de tu configuración).
- **MySQL** u otro sistema de base de datos relacional (configurable en `application.properties`).
- **Git** (opcional, para clonar el repositorio).

---

## **Estructura del Proyecto**