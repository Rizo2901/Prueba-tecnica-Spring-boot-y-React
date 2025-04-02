package com.prueba.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.prueba.api.models.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    boolean existsByCorreo(String correo);
}
