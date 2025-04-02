package com.prueba.api.services;

import com.prueba.api.models.Usuario;

public interface UsuarioService {

    void registrarUsuario(Usuario usuario);

    boolean existeCorreo(String correo); 
}