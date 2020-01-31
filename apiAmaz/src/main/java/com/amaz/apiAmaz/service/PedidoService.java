package com.amaz.apiAmaz.service;

import java.util.List;

import com.amaz.apiAmaz.model.Pedido;

public interface PedidoService {
	
	Pedido insertOrUpdate(Pedido entity);

	void delete(int id);

	List<Pedido> getAll();

	Pedido getById(int id);

}
