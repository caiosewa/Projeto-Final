package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Produto;

public interface ProdutoService {
	
	Produto insertOrUpdate (Produto entity);
	
	void delete(int id);

	List<Produto> getAll();

	Produto getById(int id);
	
	List<Produto> getAllByTitulo (String titulo);
	
	Produto getProdutoByTitulo (String titulo);

}
