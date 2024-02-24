package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.CustomerPlanSubscription;

public interface CustomerPlanRepository extends JpaRepository<CustomerPlanSubscription,Long> {

}
