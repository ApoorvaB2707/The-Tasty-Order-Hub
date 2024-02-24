package com.cdac.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.cdac.dto.PaymentDTO;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService{

	@Override
	public PaymentDTO savePaymentDetails(PaymentDTO paymentDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
