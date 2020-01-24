package com.amaz.ApiAmaz.model;

public class Produto {

	private int idProduto;
	private String titulo;
	private String descricao;
	private String linkFoto;
	private double preco;
	private int qtdEstoque;

	public Produto() {
		super();
	}

	public Produto(int idProduto, String titulo, String descricao, String linkFoto, double preco, int qtdEstoque) {
		super();
		this.idProduto = idProduto;
		this.titulo = titulo;
		this.descricao = descricao;
		this.linkFoto = linkFoto;
		this.preco = preco;
		this.qtdEstoque = qtdEstoque;
	}

	public int getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(int idProduto) {
		this.idProduto = idProduto;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public int getQtdEstoque() {
		return qtdEstoque;
	}

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}
	
	

}
