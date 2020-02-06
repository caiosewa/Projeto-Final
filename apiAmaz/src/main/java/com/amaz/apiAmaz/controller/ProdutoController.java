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

import com.amaz.apiAmaz.model.Produto;
import com.amaz.apiAmaz.service.ProdutoService;

@RestController
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@PostMapping("/produto")
	public ResponseEntity<Produto> post(@RequestBody Produto entity) {
		try {
			Produto produtoSalvo = this.produtoService.insertOrUpdate(entity);
			return ResponseEntity.ok(produtoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/produto")
	public ResponseEntity<Produto> put(@RequestBody Produto entity) {
		try {
			Produto produtoSalvo = this.produtoService.insertOrUpdate(entity);
			return ResponseEntity.ok(produtoSalvo);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@DeleteMapping("/produto/{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		if (this.produtoService.getById(id) == null) {
			return ResponseEntity.notFound().build();
		}

		try {
			this.produtoService.delete(id);
			return ResponseEntity.ok("Removido com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/produto")
	public ResponseEntity<List<Produto>> getAll() {
		return ResponseEntity.ok(this.produtoService.getAll());
	}
	
	@GetMapping("/produto/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Produto> getById(@PathVariable int id) {
		Produto produto = this.produtoService.getById(id);

		if (produto == null) {
			new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrada!");
		}
		return ResponseEntity.ok(produto);
	}
	
	
	@GetMapping("/produto/todos/{titulo}")
	public ResponseEntity<List<Produto>> getAllByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(this.produtoService.getAllByTitulo(titulo));
	}
	
	@GetMapping("/produto/titulo/{titulo}")
	public ResponseEntity<Produto> getProdutoByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(this.produtoService.getProdutoByTitulo(titulo));
	}
	
	
}
