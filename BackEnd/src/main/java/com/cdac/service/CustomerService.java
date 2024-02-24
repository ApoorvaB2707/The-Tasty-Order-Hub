package com.cdac.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.AddressDto;
import com.cdac.dto.CustDetailsDto;
import com.cdac.dto.CustSubPlanDto;
import com.cdac.dto.EditUserDetailsDto;
import com.cdac.dto.SubscriptionPlanDto;

public interface CustomerService {

	List<CustDetailsDto> getAllCustomers();

	CustDetailsDto getCustomerById(long id);

	String removeCustomer(long id);

	String editCustomerDetails(EditUserDetailsDto detailsDto);

	String uploadImage(Long id, MultipartFile imageFile) throws IOException;

	byte[] getImage(Long id) throws IOException;

	String addDeliveryAddress(AddressDto address, Long id);

	AddressDto getDeliveryAddress(Long id);

	String updateDeliveryAddress(AddressDto addressDto, Long id);

	List<SubscriptionPlanDto> getSubscriptionPlans(Long id);

	CustDetailsDto getByEmail(String email);
	
	public List<CustSubPlanDto> getAllOngoingSubPlan(Long id);

	String addAddress(AddressDto address, Long id);


	AddressDto getAddress(Long id);

}
