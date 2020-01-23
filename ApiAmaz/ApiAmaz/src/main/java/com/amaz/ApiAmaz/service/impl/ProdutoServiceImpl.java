package com.amaz.ApiAmaz.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.amaz.ApiAmaz.model.Produto;
import com.amaz.ApiAmaz.service.ProdutoService;

public class ProdutoServiceImpl implements ProdutoService {
	static List<Produto> produtos = new ArrayList<Produto>();
	private static int incr = 0;

	@Override
	public Produto insert(Produto produto) {
		incr++;
		produto.setIdProduto(incr);

		this.produtos.add(produto);

		return produto;
	}

	@Override
	public Produto update(Produto produto) {
		Produto aux = getById(produto.getIdProduto());

		if (aux != null) {
			aux.setTitulo(produto.getTitulo());
			aux.setDescricao(produto.getDescricao());
			aux.setPreco(produto.getPreco());
			aux.setQtdEstoque(produto.getQtdEstoque());
			aux.setLinkFoto(produto.getLinkFoto());
			
		}
		return aux;
	}

	@Override
	public Produto getById(int id) {
		for (Produto produto : produtos) {
			if(produto.getIdProduto() == id) {
				return produto;
			}
		}
		return null;
	}

	@Override
	public List<Produto> getAll() {
		return produtos;
	}

}
