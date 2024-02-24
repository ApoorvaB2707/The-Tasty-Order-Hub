package com.cdac.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dto.*;
import com.cdac.entity.*;
import com.cdac.repository.*;

@Transactional
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private CustomerRepository custRepo;

	@Autowired
	private SubscriptionPlanRepository subscriptionRepo;

	@Autowired
	private CustomerPlanRepository customerPlanRepo;


	@Override
	public List<OrderResponseDto> getAllOrderDetails() {
		List<Order> orders = orderRepo.findAll();
		List<OrderResponseDto> orderDetails = new ArrayList<OrderResponseDto>();

		orders.forEach(order -> {
			OrderResponseDto responseDto = new OrderResponseDto();
			responseDto.setId(order.getId());
			responseDto.setCustomerId(order.getCustomer().getId());
			responseDto.setDateTime(order.getDateTime());
			// responseDto.setPaymentAmount(order.getPayment().getAmount());
			order.getPlans().forEach(p->{
				responseDto.setName(p.getName()) ;
				responseDto.setPrice(p.getPrice());
				responseDto.setPlanIds(p.getId());
			});
			orderDetails.add(responseDto);
		});

		return orderDetails;
	}

	@Override
	public OrderResponseDto getOrderDetailsById(Long id) {
		Order order = orderRepo.getOrderDetailsById(id);
		OrderResponseDto responseDto = new OrderResponseDto();
		responseDto.setId(order.getId());
		responseDto.setCustomerId(order.getCustomer().getId());
		responseDto.setDateTime(order.getDateTime());
		// responseDto.setPaymentAmount(order.getPayment().getAmount());
		order.getPlans().forEach(p->{
			responseDto.setName(p.getName()) ;
			responseDto.setPrice(p.getPrice());
			responseDto.setPlanIds(p.getId());
		});
		return responseDto;
	}

	@Override
	public List<OrderResponseDto> getAllOrdersByCustomerId(Long id) {
		Customer customer = custRepo.findById(id).orElseThrow();
		Set<Order> orders = customer.getOrders();
		List<OrderResponseDto> orderDetails = new ArrayList<OrderResponseDto>();
		orders.forEach(order -> {
			OrderResponseDto responseDto = new OrderResponseDto();
			responseDto.setId(order.getId());
			responseDto.setCustomerId(order.getCustomer().getId());
			responseDto.setDateTime(order.getDateTime());
			// responseDto.setPaymentAmount(order.getPayment().getAmount());
			order.getPlans().forEach(p->{
				responseDto.setName(p.getName()) ;
				responseDto.setPrice(p.getPrice());
				responseDto.setPlanIds(p.getId());
			});
			//responseDto.setPlanIds();
			orderDetails.add(responseDto);
		});
		return orderDetails;
	}

	@Override
	public String addNewOrder(OrderDto ordersDto) {

		// Finding Customer and Subscription Plan
		Customer customer = custRepo.findById(ordersDto.getCustomerId()).orElseThrow();
		List<SubscriptionPlan> subscriptionPlans = subscriptionRepo.findAllById(ordersDto.getSubscriptionId());

		List<CustomerPlanSubscription> planSubscriptions = new ArrayList<CustomerPlanSubscription>();
		// Creating Object of CustomerSubscriptioPlan
		subscriptionPlans.forEach(sp -> {
			CustomerPlanSubscription customerPlanSubscription = new CustomerPlanSubscription(customer, sp);
			LocalDate curDate = LocalDate.now();
			customerPlanSubscription.setStartDate(curDate);
			customerPlanSubscription.setEndDate(curDate.plusDays(sp.getPlanType().getDuration()));
			planSubscriptions.add(customerPlanSubscription);
		});

		Order order = new Order();
		order.setCustomer(customer);
		order.setPlans(new HashSet<SubscriptionPlan>(subscriptionPlans));
		order.setQuantity(subscriptionPlans.size());
		// Saving in Database
		order = orderRepo.save(order);
		customerPlanRepo.saveAll(planSubscriptions);
		return "Order Placed Successfully with Order Id : " + order.getId();
	}

}
