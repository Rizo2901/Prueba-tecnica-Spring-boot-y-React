package com.prueba.api.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.prueba.api.models.Usuario;
import com.prueba.api.services.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173") // Permite solicitudes desde el frontend
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/register")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuario usuario) {
        try {
            usuarioService.registrarUsuario(usuario);
            return ResponseEntity.ok("Usuario registrado exitosamente.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping("/validar-correo")
public ResponseEntity<String> validarCorreo(@RequestParam String correo) {
    boolean existe = usuarioService.existeCorreo(correo);
    if (existe) {
        return ResponseEntity.ok("El correo ya está registrado.");
    } else {
        return ResponseEntity.ok("El correo está disponible.");
    }
}
}