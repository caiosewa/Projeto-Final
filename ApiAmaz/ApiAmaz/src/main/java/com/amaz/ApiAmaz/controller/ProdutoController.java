package com.amaz.ApiAmaz.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.amaz.ApiAmaz.service.impl.ProdutoServiceImpl;
import com.amaz.ApiAmaz.model.Produto;
import com.amaz.ApiAmaz.service.ProdutoService;


@CrossOrigin("*")
@RestController
public class ProdutoController {

	ProdutoService ProdutoService = new ProdutoServiceImpl();

	@GetMapping("/produto/all")
	public List<Produto> getAll() {
		return ProdutoService.getAll();
	}

	@GetMapping("/produto/{id}")
	public ResponseEntity<Produto> getById(@PathVariable int id) {
		Produto Produto = ProdutoService.getById(id);

		if (Produto == null)
			ResponseEntity.notFound();

		return ResponseEntity.ok(Produto);
	}

	@PostMapping("/produto/")
	public ResponseEntity<Produto> insert(@RequestBody Produto Produto) {
		if (Produto.getIdProduto() != 0) {
			return ResponseEntity.badRequest().body(Produto);
		}
		ProdutoService.insert(Produto);
		return ResponseEntity.ok(Produto);
	}

	@PutMapping("/produto/")
	public Produto update(@RequestBody Produto Produto) {
		ProdutoService.update(Produto);
		return Produto;
	}
}
