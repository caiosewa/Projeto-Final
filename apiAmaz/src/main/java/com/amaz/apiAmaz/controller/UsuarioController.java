package com.amaz.apiAmaz.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.amaz.apiAmaz.model.Usuario;
import com.amaz.apiAmaz.service.UsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/usuario")
	public ResponseEntity<Usuario> post(@RequestBody Usuario entity) {
		try {
			Usuario usuarioSalvo = this.usuarioService.insertOrUpdate(entity);
			return ResponseEntity.ok(usuarioSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/usuario")
	public ResponseEntity<Usuario> put(@RequestBody Usuario entity) {
		try {
			Usuario usuarioSalvo = this.usuarioService.insertOrUpdate(entity);
			return ResponseEntity.ok(usuarioSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		if (this.usuarioService.getById(id) == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			this.usuarioService.delete(id);
			return ResponseEntity.ok("Removido com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/usuario")
	public ResponseEntity<List<Usuario>> getAll() {
		return ResponseEntity.ok(this.usuarioService.getAll());
	}

	@GetMapping("/usuario/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Usuario> getById(@PathVariable int id) {
		Usuario usuario = this.usuarioService.getById(id);

		if (usuario == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado!");
		}
		return ResponseEntity.ok(usuario);
	}
	
	@GetMapping("/usuario/{nome}")
	public ResponseEntity<List<Usuario>> getAllByNome(@PathVariable String nome){
		return ResponseEntity.ok(this.usuarioService.getAllByNome(nome));
	}
	
	@GetMapping("/usuario/nome/{nome}")
	public ResponseEntity<Usuario> getUsuarioByNome(@PathVariable String nome){
		return ResponseEntity.ok(this.usuarioService.getUsuarioByNome(nome));
	}
	

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public Usuario getByEmailAndSenha(@RequestBody Usuario usuario) {
		Optional<Usuario> usuarioExistente = this.usuarioService.getByEmailAndSenha(usuario.getNome(), usuario.getSenha());

		if (!usuarioExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado!");
		}
		return usuarioExistente.get();
	}
 
}
