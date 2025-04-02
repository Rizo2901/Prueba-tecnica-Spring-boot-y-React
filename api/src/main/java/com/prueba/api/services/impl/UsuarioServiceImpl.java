package com.prueba.api.services.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.prueba.api.models.Usuario;
import com.prueba.api.repository.UsuarioRepository;
import com.prueba.api.services.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public void registrarUsuario(Usuario usuario) {
        // Verificar si el correo ya está registrado
        if (usuarioRepository.existsByCorreo(usuario.getCorreo())) {
            throw new IllegalArgumentException("El correo ya está registrado.");
        }

        // Guardar el usuario en la base de datos
        usuarioRepository.save(usuario);
    }

    @Override
    public boolean existeCorreo(String correo) {
        // Verificar si el correo existe en la base de datos
        return usuarioRepository.existsByCorreo(correo);
    }
}
