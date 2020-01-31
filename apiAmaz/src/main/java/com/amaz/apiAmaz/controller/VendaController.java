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

import com.amaz.apiAmaz.model.Venda;
import com.amaz.apiAmaz.service.VendaService;

@RestController
@CrossOrigin("*")
public class VendaController {

	@Autowired
	private VendaService vendaService;
	
	@PostMapping("/venda")
	public ResponseEntity<Venda> post(@RequestBody Venda entity) {
		try {
			Venda vendaSalvo = this.vendaService.insertOrUpdate(entity);
			return ResponseEntity.ok(vendaSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/venda")
	public ResponseEntity<Venda> put(@RequestBody Venda entity) {
		try {
			Venda vendaSalvo = this.vendaService.insertOrUpdate(entity);
			return ResponseEntity.ok(vendaSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@DeleteMapping("/venda/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		if (this.vendaService.getById(id) == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			this.vendaService.delete(id);
			return ResponseEntity.ok("Removida com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/venda")
	public ResponseEntity<List<Venda>> getAll() {
		return ResponseEntity.ok(this.vendaService.getAll());
	}

	@GetMapping("/venda/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Venda> getById(@PathVariable int id) {
		Venda venda = this.vendaService.getById(id);

		if (venda == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Venda não encontrada!");
		}
		return ResponseEntity.ok(venda);
	}
	
	@GetMapping("/venda/{dataVenda}")
	public ResponseEntity<List<Venda>> getAllByDataVenda(@PathVariable String dataVenda) {
		return ResponseEntity.ok(this.vendaService.getAllByDataVenda(dataVenda));
	}
	
	
}
