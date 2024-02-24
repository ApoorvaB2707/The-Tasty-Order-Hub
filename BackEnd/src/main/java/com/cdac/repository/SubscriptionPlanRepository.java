package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.SubscriptionPlan;

public interface SubscriptionPlanRepository extends JpaRepository<SubscriptionPlan, Long> {

	@Query("select sp from SubscriptionPlan sp where sp.isAvaliable=true")
	List<SubscriptionPlan> getAllAvaliablePlans();
	
	@Query("select sp from SubscriptionPlan sp where sp.isAvaliable=false")
	List<SubscriptionPlan> getAllNotAvaliablePlans();

}
