package com.amaz.ApiAmaz.service;

import java.util.List;

import com.amaz.ApiAmaz.model.Produto;

public interface ProdutoService {
	
	Produto insert(Produto produto);
	Produto update(Produto produto);
		
	Produto getById(int id);
	
	List<Produto> getAll();

}
