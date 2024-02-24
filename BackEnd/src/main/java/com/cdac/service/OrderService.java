package com.cdac.service;

import java.util.List;

import com.cdac.dto.*;


public interface OrderService {

	List<OrderResponseDto> getAllOrderDetails();

	OrderResponseDto getOrderDetailsById(Long id);

	List<OrderResponseDto> getAllOrdersByCustomerId(Long id);

	String addNewOrder(OrderDto ordersDto);
	
}
