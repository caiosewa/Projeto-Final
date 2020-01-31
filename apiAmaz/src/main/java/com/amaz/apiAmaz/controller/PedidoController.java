package com.amaz.apiAmaz.controller;

import java.util.List;

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

import com.amaz.apiAmaz.model.Pedido;
import com.amaz.apiAmaz.service.PedidoService;

@RestController
@CrossOrigin("*")
public class PedidoController {
	
	@Autowired
	private PedidoService pedidoService;
	
	@PostMapping("/pedido")
	public ResponseEntity<Pedido> post(@RequestBody Pedido entity) {
		try {
			Pedido pedidoSalvo = this.pedidoService.insertOrUpdate(entity);
			return ResponseEntity.ok(pedidoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/pedido")
	public ResponseEntity<Pedido> put(@RequestBody Pedido entity) {
		try {
			Pedido pedidoSalvo = this.pedidoService.insertOrUpdate(entity);
			return ResponseEntity.ok(pedidoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@DeleteMapping("/pedido/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		if (this.pedidoService.getById(id) == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			this.pedidoService.delete(id);
			return ResponseEntity.ok("Removido com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/pedido")
	public ResponseEntity<List<Pedido>> getAll() {
		return ResponseEntity.ok(this.pedidoService.getAll());
	}
	
	@GetMapping("/pedido/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Pedido> getById(@PathVariable int id) {
		Pedido pedido = this.pedidoService.getById(id);

		if (pedido == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Pedido não encontrado!");
		}
		return ResponseEntity.ok(pedido);
	}

}
