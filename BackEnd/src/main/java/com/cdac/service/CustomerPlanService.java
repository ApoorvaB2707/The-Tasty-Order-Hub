package com.cdac.service;

import java.util.List;

import com.cdac.dto.CustomerPlanDto;

public interface CustomerPlanService {


	List<CustomerPlanDto> getAllCustomerPlans();

	CustomerPlanDto getCustomerPlanById(long id);

	String removeCustomerPlanDto(long id);

	String editCustomerPlanDetails(CustomerPlanDto CustomerPlanDto);
	
	CustomerPlanDto getCustomerPlanBySubscriptionId(long id);

}
